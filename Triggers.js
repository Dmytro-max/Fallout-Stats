// const { Stats } = require("fs")

// const { before } = require("node:test")

Desc = document.querySelector('#Description')
// let Traits = document.querySelectorAll('#Traits>.Stats>div')
const Special = document.querySelector("#SPECIAL")
const Skills = document.querySelector("#Skills")
let Special_Values = document.querySelectorAll('#SPECIAL .value')
let Skill_Values = document.querySelectorAll("a.Value")
let Skills_up = document.querySelectorAll('.full>.up')
let Skills_down = document.querySelectorAll('.full>.down')
let special = document.querySelector("#SPECIAL>h3")

//SPECIAL points up and down
Specials_up = document.querySelectorAll('#SPECIAL .up')
for (let sp of Specials_up.entries()) {
    let name = sp[1].name;
    sp[1].addEventListener("click", () => (Special_up(char, name), FNV(char)))
}
Specials_down = document.querySelectorAll('#SPECIAL .down')
for (let sp of Specials_down.entries()) {
    let name = sp[1].name;
    sp[1].addEventListener("click", () => (Special_down(char, name), FNV(char)))
}
//create
const fnv = document.querySelector(".FNV")
// fnv.addEventListener("click", () => (
//     char = new FNVChar,
//     BuildAbilities(char),
//     SkillsBuild(char),
//     SpecialWindowCreate(char)),
//     console.log(char),
//     FNV(char)
// );


let AbilitiesBlock = document.querySelector('#Abilities');
let Level_Availible = document.querySelector('.Choose_list');
let Level_Added = document.querySelector('.added');


let Availible = document.querySelector('#Special_Abilities .Choose_list');
let Added = document.querySelector('#Special_Abilities .added');

let ImplantsAvailible = document.querySelector('#Implants_Abilities .Choose_list');
let ImplantsAdded = document.querySelector('#Implants_Abilities .added');
// console.log(Added)

function BuildAbilities(char) {
    for (let key in char.Main_Abilities) {
        AbilitiesBlocksBuild(char.Main_Abilities[key], key);
        let av_block = char.Abilities_Availible.get(key);
        let added_block = char.Abilities_Added.get(key);

        Level_Availible.append(av_block);
        Level_Added.append(added_block);
        switch (char.Main_Abilities[key].type) {
            case 'levelup':
                Level_Availible.append(av_block);
                Level_Added.append(added_block);
                break;
            case 'special':
                Availible.append(av_block);
                Added.append(added_block);
                break;
            case 'implant':
                ImplantsAvailible.append(av_block);
                ImplantsAdded.append(added_block);
                break;
        }
    }
    function AbilitiesBlocksBuild(perk, key) {
        let name = key;
        // let rangs = perk.rangs;
        // let rang = perk.rang;
        // let requirements_text = perk.requirements_text !== (undefined || null) ? perk.requirements_text : '';
        let av_block = document.createElement('div');
        av_block.id = name;
        av_block.classList = 'ability main';

        let added_block = av_block.cloneNode(true);

        char.Abilities_Availible.set(key, av_block);
        char.Abilities_Added.set(key, added_block);

        added_block.addEventListener('dblclick', () => (Ability_Remove(char, av_block.id), FNV(char)))

        av_block.addEventListener('click', () => (ElemDescription(Desc, char.Main_Abilities[av_block.id])))
        added_block.addEventListener('click', () => (ElemDescription(Desc, char.Main_Abilities[av_block.id])))
        //
        av_block.addEventListener('click', () => Targeting(av_block))
        added_block.addEventListener('click', () => Targeting(added_block))
        if ('SpecialWindow' in perk) {
            SpecialWindowCreate(char, perk, name);
        }
        else if ('SkillWindow' in perk) {
            SkillsWindowCreate(char, perk, name);
        }
        else {
            av_block.addEventListener('dblclick', () => (Ability_Add(char, av_block.id), FNV(char)))
        }
    }

}
let LastTarget
function Targeting(target) {
    if (target != LastTarget) {
        if (LastTarget != undefined) {
            LastTarget.classList.toggle('targeted');
        }
        target.classList.toggle('targeted');
        LastTarget = target
        let name = target.id;
        char.Main_Abilities[name].UnWrap?.(char)
    }
}
function InsertAbilities(char) {
    let Check = (perk, key) => {
        let av_block = char.Abilities_Availible.get(key);
        let added_block = char.Abilities_Added.get(key);
        if (perk.rang < perk.rangs) {
            av_block.style.display = "grid";
        }
        else {
            av_block.style.display = "none";
        }

        if (perk.rang > 0) {
            added_block.style.display = "grid";
        }
        else {
            added_block.style.display = "none";
        }

        if (perk.RequirementsCheck?.(char) == false || !char.IsPerkLevel() && perk.type == 'levelup' || (char.IsPerkLevel() && perk.type == 'levelup' &&
            (perk.level > char.level || (char.PerksbyLevel.has(char.level) ? char.PerksbyLevel.get(char.level)['levelup']?.size > 0 : false)))
        ) {
            av_block.classList.add('unAvailible');
        }
        else {
            av_block.classList.remove('unAvailible');
        }

        if (!(char.PerksbyLevel.has(char.level) ? char.PerksbyLevel.get(char.level)[perk.type]?.has(key) : false)) {
            added_block.classList.add('unAvailible');
        }
        else {
            added_block.classList.remove('unAvailible');
        }
    }

    for (let key in char.Main_Abilities) {
        let av_block = char.Abilities_Availible.get(key);
        let added_block = char.Abilities_Added.get(key);
        perk = char.Main_Abilities[key];

        if (!char.PerksbyLevel.has(char.level) || !char.PerksbyLevel.get(char.level)['uplevel'] ||
            (char.PerksbyLevel.has(char.level) ? char.PerksbyLevel.get(char.level)[perk.type].has(key) : false)
        ) {
            Check(perk, key);
        }
        else {
            av_block.classList.add('unAvailible');
        }

        AbilityInfoFill();
        function AbilityInfoFill() {
            let name = perk.name;
            let rangs = perk.rangs;
            let rang = perk.rang;
            let requirements_text = perk.requirements_text !== (undefined || null) ? perk.requirements_text : '';

            if (perk.type == 'levelup') {
                av_block.innerHTML = `<h4>${name}</h4><h4 class='level'>${perk.level}</h4><a>${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
                added_block.innerHTML = `<h4>${name}</h4><h4 class='level'>${perk.level}|${perk.level_taken}</h4><a>${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
            }
            else {
                av_block.innerHTML = `<h4>${name}</h4><a lang="ru">${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
                added_block.innerHTML = `<h4>${name}</h4><a lang="ru">${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
            }
            let description_text = perk.Description;
            let Av_Additional = document.createElement('div');
            Av_Additional.innerHTML = `<p class="description">${description_text}</p>`;
            Av_Additional.className = 'additional';
            let Ad_Additional = Av_Additional.cloneNode(true);
            if (perk.RangsAdded?.()) {
                Ad_Additional.insertAdjacentHTML('beforeend', '<h3>Ранги:</h3>')
                let gen = perk.RangsAdded();
                let i = 1;
                for (let value of gen) {
                    let rang_text = document.createElement('a');
                    rang_text.textContent = `${i}. ${value}`;
                    Ad_Additional.appendChild(rang_text);
                    i++;
                }
            }

            if ('SpecialWindow' in perk) {
                Av_Additional.appendChild(perk.SpecialWindow['window']);
            }
            else if ('SkillWindow' in perk) {
                Av_Additional.appendChild(perk.SkillWindow['window']);
            }

            av_block.appendChild(Av_Additional);
            added_block.appendChild(Ad_Additional);
        }
    }
}

function SkillsBuild(char) {
    liSet = new Set();
    for (key in char.skills) {

        let skillObject = {
            name: key,
        }
        // SkillFullCreate(key, char);
        // SkillFullCreate(key, char) 
        // {
        let fulldiv = document.createElement('div');
        fulldiv.className = 'full';

        let skill = char.skills[key];
        let maindiv = SkillMainCreate(skillObject, skill);
        maindiv.addEventListener('click', () => (Choose_prize(char, maindiv.id, maindiv),
            FNV(char), ElemDescription(Desc, char.skills[maindiv.id])))

        fulldiv.append(maindiv);

        let down = document.createElement('button');
        down.id = key;
        down.className = 'down';
        down.textContent = '-';
        down.addEventListener('click', () => (Skill_down(down.id, char), FNV(char)))
        down.disabled = true;
        fulldiv.appendChild(down);

        let up = document.createElement('button');
        up.id = key;
        up.className = 'up';
        up.addEventListener('click', () => (Skill_up(up.id, char), FNV(char)))
        up.textContent = '+';
        up.disabled = true;
        fulldiv.appendChild(up);

        let ul = SkillBooksFill(key, char);
        // }


        function SkillMainCreate(skillObject, skill) {
            let maindiv = document.createElement('div')
            maindiv.id = key;
            maindiv.classList = `skill main unChecked`;
            maindiv.appendChild(document.createElement('i'));

            let img = document.createElement('img');
            img.src = `Icons/${key}.webp`;
            maindiv.appendChild(img);

            let value = document.createElement('a');
            value.id = key;
            value.className = 'value';
            maindiv.appendChild(value);

            let name = document.createElement('a');
            name.textContent = skill.name;
            maindiv.appendChild(name);

            skillObject['block'] = maindiv
            skillObject['value'] = value

            return maindiv;
        }

        function SkillBooksFill(key, char) {
            let ul = document.createElement('ul');
            ul.classList = 'books_side unactive';
            ul.id = key + 'List';

            if (key in char.skillBooks) {
                let li = document.createElement('li');
                let bookdiv = document.createElement('div');
                bookdiv.className = 'unChecked';
                let i = document.createElement('i');
                i.classList = 'books all';
                bookdiv.appendChild(i);

                let select = document.createElement('select');
                select.name = key;
                select.id = key + 'Book_level';
                select.classList = 'level_select all';
                char.skillBookBlocks.set(select.name, {
                    'select': select,
                    'BookLevels': new Map(),
                })

                let location = document.createElement('h2');
                location.textContent = 'Локация';
                let details = document.createElement('h2');
                details.textContent = 'Детали';


                li.appendChild(bookdiv);
                li.appendChild(select);
                li.appendChild(location);
                li.appendChild(details);

                for (let book of char.skillBooks[key].Books) fillBooks(li, book, select.name);

                ul.appendChild(li);

                function fillBooks(li, book, skill) {
                    let idiv = document.createElement('div');
                    idiv.className = 'unChecked';
                    idiv.dataset.skill = skill;
                    idiv.dataset.number = book[0];

                    idiv.addEventListener('click', CheckboxActivate)

                    function CheckboxActivate(event) {
                        let div = event.target.closest('div');
                        number = div.dataset.number;
                        skill = div.dataset.skill;
                        if (div.classList.contains('unChecked')) {
                            char.skillsByLevel[char.level - 1][skill] += char.skillbook_bonus;
                            char.skillBooks[skill].get(number).level = char.level;
                            char.skills[skill].bonus += char.skillbook_bonus;
                            char.skillBookBlocks.get(skill)['BookLevels'].get(number).textContent = char.level;
                            div.classList.replace("unChecked", "Checked");
                        }
                        else {
                            let level = char.skillBooks[skill].get(number).level;
                            char.skillBooks[skill].get(number).level = null;
                            char.skillsByLevel[level - 1][skill] -= char.skillbook_bonus;
                            char.skills[skill].bonus -= char.skillbook_bonus;
                            char.skillBookBlocks.get(skill)['BookLevels'].get(number).textContent = '';
                            div.classList.replace("Checked", "unChecked");
                        }
                        FNV(char);
                    };

                    li.appendChild(idiv);

                    let i = document.createElement('i');
                    i.classList = 'books';
                    idiv.appendChild(i);

                    let alevel = document.createElement('h2');
                    alevel.className = 'book_level';
                    alevel.id = select.name + book[0].toString();
                    char.skillBookBlocks.get(skill)['BookLevels'].set(idiv.dataset.number, alevel);
                    li.appendChild(alevel);

                    let alocation = document.createElement('a');
                    alocation.textContent = book[1].location;
                    alocation.lang = 'ru';
                    li.appendChild(alocation);

                    let adetails = document.createElement('a');
                    adetails.textContent = book[1].details;
                    adetails.lang = 'ru';
                    adetails.className = 'details';
                    li.appendChild(adetails);

                }
                liSet.add(li)
                return ul;
            }

        }

        fulldiv.appendChild(ul);

        skillObject['up'] = up;
        skillObject['down'] = down;
        char.skillBlocks.set(key, skillObject);
        // char.skillBlocks.set(key, {
        //     name: key,
        //     value: value,
        //     up: up,
        //     down: down,
        //     block: maindiv,
        // })

        let Stats = (document.querySelector('#Skills>.Stats'))
        Stats.append(fulldiv)
    }//intendation for books
    const skillsHeadHeight = 3.12
    const skillBlockHeight = 2.8
    const rem = 16

    const totalNumberOfSkills = Object.keys(char.skills).length

    let number = 0;
    for (elem of liSet) {
        elemHeight = elem.offsetHeight
        if ((elemHeight * 0.3) / rem < skillsHeadHeight + skillBlockHeight * number) {
            elem.style.top = -(elemHeight * 0.3) / rem + 'rem';
        }
        else {
            elem.style.top = -3.12 + 'rem'
        }
        if ((elemHeight * 0.3) / rem > skillBlockHeight * (totalNumberOfSkills - number - 1)) {
            elem.style.top = -(elemHeight / rem - skillBlockHeight * (totalNumberOfSkills - number)) + 'rem'
        }
        number++;
    }
    // for (let i = 2; i <= char.max_level; i++) {
    //     levelSelect.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`);
    // }
    CharlevelChoose.insertAdjacentHTML('beforeend', `<option value="${char.level}">${char.level}</option>`);
    for (let key in char.skills) {
        char.skillBookBlocks.get(key)['select'].insertAdjacentHTML('beforeend', `<option value="${char.level}">${char.level}</option>`);
        char.skillBookBlocks.get(key)['select'].selectedIndex = CharlevelChoose.selectedIndex;
    }
}
const DerivedBlock = document.querySelector('#Derived');
function DerivedBuild(char) {
    for (let key in char.derived) {
        let div = document.createElement('div');
        div.id = key;
        let name = document.createElement('a');
        name.textContent = char.derived[key].abreviation;
        let value = document.createElement('a');
        value.className = 'derived_value';
        value.id = key;
        // value.textContent = char.derived[key].value;
        char.derivedBlocks.set(key, value);
        div.appendChild(name);
        div.appendChild(value);
        DerivedBlock.appendChild(div);
        div.addEventListener("click", () => ElemDescription(Desc, char.derived[div.id]))
    }
}

function TraitsBuild(char) {
    for (let key in char.traits) {
        let traitDiv = document.createElement("div");
        traitDiv.id = key;
        traitDiv.classList = "main unChecked";

        let i = document.createElement("i");
        traitDiv.appendChild(i);

        let img = document.createElement("img");
        img.src = `Icons/${key}.webp`;
        traitDiv.appendChild(img);

        let name = document.createElement('a');
        name.textContent = char.traits[key].name;
        traitDiv.appendChild(name);

        document.querySelector("#Traits>.Stats").appendChild(traitDiv);

        traitDiv.addEventListener("click", () => (Choose_trait(char, traitDiv, traitDiv.id), FNV(char),
            ElemDescription(Desc, char.traits[key])))
    }
}

char = new FNVChar(SPECIAL, SPECIAL_Ru, FNV_Abilities, FNV_Abilities_Ru, skills, skills_Ru, Traits, Traits_Ru, Derived, Derived_Ru)
SpecialBlockCreate(char)
SkillsBuild(char)
DerivedBuild(char)
TraitsBuild(char)

// while (char.Special_BonusPoints > 0) {
//     Special_up(char, 'Agility');
// }
// Choose_prize(char, 'Barter', document.querySelector('.main#Barter'))
// Choose_prize(char, 'M_W', document.querySelector('.main#M_W'))
// Choose_prize(char, 'E_W', document.querySelector('.main#E_W'))

// LevelUp(char);

arr = [];

BuildAbilities(char)
InsertAbilities(char);
let skill = 'Barter';
function toMaxLevel() {
    while (char.level < char.max_level) {
        // console.log(char.skillsByLevel[char.level - 1]['spent'] < char.SkillPointsCount(char))
        while (char.skillsByLevel[char.level - 1]['spent'] < Math.floor(char.SkillPointsCount(char))) {
            // console.log(char.skills[skill])
            if (char.skills[skill].value(char) == 100) {
                for (let key in char.skills) {
                    if (char.skills[key].value(char) < 100) {
                        skill = key;
                    }
                }
            }
            Skill_up(skill, char);
        }
        if (char.IsPerkLevel()) {
            console.log(char.Abilities_Availible.get(arr[char.level / 2 - 1]))
            Ability_Add(char, char.Abilities_Availible.get(arr[char.level / 2 - 1]))
        }
        LevelUp(char);
    }
}


FNV(char)

// toMaxLevel()