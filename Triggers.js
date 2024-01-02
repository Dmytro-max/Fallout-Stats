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
let DesiredLevelUpPerks = document.querySelector('#DesiredLevelUpPerks')
let LevelForAllDesired = document.querySelector('#LevelForAllDesired')
let DesiredSpecialPerks = document.querySelector('#DesiredSpecialPerks')
let DesiredImplantPerks = document.querySelector('#DesiredImplantPerks')

let AbilitiesBlock = document.querySelector('#Abilities');
let Level_Availible = document.querySelector('.Choose_list');
let Level_Added = document.querySelector('.added');


let Availible = document.querySelector('#Special_Abilities .Choose_list');
let Added = document.querySelector('#Special_Abilities .added');

let ImplantsAvailible = document.querySelector('#Implants_Abilities .Choose_list');
let ImplantsAdded = document.querySelector('#Implants_Abilities .added');


function BuildAbilities(char) {
    for (let key in char.Main_Abilities) {
        AbilitieBlockBuild(char.Main_Abilities[key], key);
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
    
    function AbilitieBlockBuild(perk, key) {
        let av_block = document.createElement('div');
        av_block.id = key;
        av_block.classList = 'ability main';
        let added_block = av_block.cloneNode(true);
        added_block.style.display = 'none';

        let name = perk.name;
        let rangs = perk.rangs;
        let rang = perk.rang;
        let requirements_text = perk.requirements_text ?? '';

        let Av_RangArtickle = document.createElement('h4');
        Av_RangArtickle.className = 'rang'
        Av_RangArtickle.textContent = `${rang}/${rangs}`
        let Ad_RangArtickle = Av_RangArtickle.cloneNode(true)

        let Av_level = document.createElement('h4');
        Av_level.className = 'level'
        Av_level.textContent = `${perk.level}`
        let Ad_level = Av_level.cloneNode(true)



        av_block.innerHTML += `<h4 lang="ru">${name}</h4>`;
        av_block.append(perk.type == 'levelup' ? Av_level : '');
        av_block.innerHTML += `<a lang="ru">${requirements_text}</a>`;
        av_block.append(Av_RangArtickle);

        added_block.innerHTML += `<h4 lang="ru">${name}</h4>`
        added_block.append(Ad_level);
        added_block.innerHTML += `<a lang="ru">${requirements_text}</a>`
        added_block.append(Ad_RangArtickle);

        let description_text = perk.Description;
        let Av_Additional = document.createElement('div');
        Av_Additional.innerHTML = `<p class="description">${description_text}</p>`;
        Av_Additional.className = 'additional';

        let Rangs = document.createElement('p');
        Rangs.className = "rangs"
        Rangs.innerHTML = perk.RangsAdded?.() ? '<h3>Ранги:</h3>' : '';

        let Ad_Additional = document.createElement('div');
        Ad_Additional.innerHTML = `<p class="description">${description_text}</p>`;
        Ad_Additional.className = 'additional';
        Ad_Additional.appendChild(Rangs)

        let idiv = document.createElement('div');
        idiv.className = 'unChecked';

        let i = document.createElement('i');
        i.classList = 'checkbox';
        idiv.prepend(i);

        av_block.prepend(idiv);

        function CheckboxActivate(div) {
            if (div.classList.contains('unChecked')) {
                switch (perk.type) {
                    case 'levelup':
                        char.WishedLevelUpAbilitiesAmount += 1;
                        DesiredLevelUpPerks.textContent = `Желанные способности: ${char.WishedLevelUpAbilitiesAmount}`
                        LevelForAllDesired.textContent = `Уровень для получения: ${char.WishedLevelUpAbilitiesAmount*char.levelsForPerk}`

                        if(char.WishedLevelUpAbilitiesAmount * char.levelsForPerk > char.max_level){
                            LevelForAllDesired.style.color = 'red'
                        }
                        break;
                    case 'special':
                        char.WishedSpecialAbilitiesAmount += 1;
                        DesiredSpecialPerks.textContent = `Желанные способности: ${char.WishedSpecialAbilitiesAmount}`
                        break;
                    case 'implant':
                        char.WishedImplantAbilitiesAmount += 1;
                        DesiredImplantPerks.textContent = `Желанные способности: ${char.WishedImplantAbilitiesAmount}`
                        break;
                }

                div.classList.replace("unChecked", "Checked");
                div.closest('div.ability').classList.add("desired");
            }
            else {
                switch (perk.type) {
                    case 'levelup':
                        char.WishedLevelUpAbilitiesAmount -= 1;
                        DesiredLevelUpPerks.textContent = `Желанные способности: ${char.WishedLevelUpAbilitiesAmount}`
                        LevelForAllDesired.textContent = `Уровень для получения: ${char.WishedLevelUpAbilitiesAmount*char.levelsForPerk}`

                        if(char.WishedLevelUpAbilitiesAmount * char.levelsForPerk <= char.max_level){
                            LevelForAllDesired.style.color = '--main-text-color'
                        }
                        break;
                    case 'special':
                        char.WishedSpecialAbilitiesAmount -= 1;
                        DesiredSpecialPerks.textContent = `Желанные способности: ${char.WishedSpecialAbilitiesAmount}`
                        break;
                    case 'implant':
                        char.WishedImplantAbilitiesAmount -= 1;
                        DesiredImplantPerks.textContent = `Желанные способности: ${char.WishedImplantAbilitiesAmount}`
                        break;
                }

                div.classList.replace("Checked", "unChecked");
                div.closest('div.ability').classList.remove("desired");
            }
        }
       idiv.addEventListener('click', () => (CheckboxActivate(idiv)))


        char.Abilities_Availible.set(key,  av_block)
        char.Abilities_Added.set(key, added_block);

        av_block.appendChild(Av_Additional);
        added_block.appendChild(Ad_Additional);


        av_block.addEventListener('click', () => (ElemDescription(Desc, char.Main_Abilities[av_block.id])))
        added_block.addEventListener('click', () => (ElemDescription(Desc, char.Main_Abilities[av_block.id])))
        //
        av_block.addEventListener('click', () => Targeting(av_block))
        added_block.addEventListener('click', () => Targeting(added_block))

        added_block.addEventListener('dblclick', () => (Ability_Remove(char, av_block.id), FNV(char)))
        //if ability require some more specific actions from player(choosing parameter to increase)
        perkname = key;
        if ('SpecialWindow' in perk) {
            SpecialWindowCreate(char, perk, av_block.id);
        }
        else if ('SkillWindow' in perk) {
            SkillsWindowCreate(char, perk, av_block.id);
        }
        else {
            av_block.addEventListener('dblclick', () => (Ability_Add(char, av_block.id), FNV(char)))
        }

        if ('SpecialWindow' in perk) {
            Av_Additional.appendChild(perk.SpecialWindow['window']);
        }
        else if ('SkillWindow' in perk) {
            Av_Additional.appendChild(perk.SkillWindow['window']);
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
        // if (perk.rang < perk.rangs) {
        //     av_block.style.display = "grid";
        // }
        // else {
        //     av_block.style.display = "none";
        // }

        // if (perk.rang > 0) {
        //     added_block.style.display = "grid";
        // }
        // else {
        //     added_block.style.display = "none";
        // }

        //console.log(av_block)
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
    }
}

function SkillsBuild(char) {
    liSet = new Set();
    for (key in char.skills) {

        let skillObject = {
            name: key,
        }
        SkillFullCreate(key, char);
        function SkillFullCreate(key, char) {
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
            fulldiv.appendChild(ul);

            skillObject['up'] = up;
            skillObject['down'] = down;
            char.skillBlocks.set(key, skillObject);

            let Stats = (document.querySelector('#Skills>.Stats'))
            Stats.append(fulldiv)
        }

        function SkillMainCreate(skillObject, skill) {
            let maindiv = document.createElement('div')
            maindiv.id = key;
            maindiv.classList = `skill main unChecked`;

            let i = document.createElement('i');
            i.classList = 'checkbox'
            maindiv.appendChild(i);

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

            if ('Books' in char.skills[key]) {
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

                for (let i = 0; i < char.skills[key].Books.length; i++) {
                    fillBooks(li, char.skills[key].Books[i], i, key);
                }
                ul.appendChild(li);

                function fillBooks(li, book, number, skill) {
                    let idiv = document.createElement('div');
                    idiv.className = 'unChecked';
                    idiv.dataset.skill = skill;
                    idiv.dataset.number = number;

                    idiv.addEventListener('click', CheckboxActivate)

                    function CheckboxActivate(event) {
                        let div = event.target.closest('div');
                        number = div.dataset.number;
                        skill = div.dataset.skill;
                        if (div.classList.contains('unChecked')) {
                            char.skillsByLevel[char.level - 1][skill] += char.skillbook_bonus;
                            char.skills[skill].Books[number].level = char.level;

                            char.skills[skill].bonus += char.skillbook_bonus;
                            char.skillBookBlocks.get(skill)['BookLevels'].get(number).textContent = char.level;
                            div.classList.replace("unChecked", "Checked");
                        }
                        else {
                            let level = char.skills[skill].Books[number].level;
                            char.skills[skill].Books[number].level = null;

                            char.skillsByLevel[level - 1][skill] -= char.skillbook_bonus;
                            char.skills[skill].bonus -= char.skillbook_bonus;
                            char.skillBookBlocks.get(skill)['BookLevels'].get(number).textContent = '';
                            div.classList.replace("Checked", "unChecked");
                        }
                        FNV(char);
                    };

                    li.appendChild(idiv);

                    let i = document.createElement('i');
                    i.classList = 'books checkbox';
                    idiv.appendChild(i);

                    let level = document.createElement('h2');
                    level.className = 'book_level';
                    level.id = select.name + number;
                    char.skillBookBlocks.get(skill)['BookLevels'].set(idiv.dataset.number, level);
                    li.appendChild(level);

                    let location = document.createElement('a');
                    location.textContent = book.location;
                    location.lang = 'ru';
                    li.appendChild(location);

                    let details = document.createElement('a');
                    details.textContent = book.details;
                    details.lang = 'ru';
                    details.className = 'details';
                    li.appendChild(details);
                }
                liSet.add(li)
                return ul;
            }
        }

    }//intendation for books

    SkillBooksPositioning(liSet)
    function SkillBooksPositioning(liSet) {
        const skillsHeadHeight = 3.12
        const skillBlockHeight = 2.8
        const rem = 16

        const totalNumberOfSkills = Object.keys(char.skills).length

        let number = 0;
        for (elem of liSet) {
            elemHeight = elem.offsetHeight / rem
            //if elem height is lower than position
            if ((elemHeight * 0.3) < skillsHeadHeight + skillBlockHeight * number) {
                elem.style.top = -(elemHeight * 0.3) + 'rem';
            }
            else {
                elem.style.top = -3.12 + 'rem'
            }
            //if elem height is higher than height of skillBlocks left
            if ((elemHeight) > skillBlockHeight * (totalNumberOfSkills - number - 1)) {
                elem.style.top = -(elemHeight - skillBlockHeight * (totalNumberOfSkills - number)) + 'rem'
            }
            number++;
        }
    }

    CharlevelChoose.insertAdjacentHTML('beforeend', `<option value="${char.level}">${char.level}</option>`);
    for (let key in char.skills) {
        char.skillBookBlocks.get(key)['select'].insertAdjacentHTML('beforeend', `<option value="${char.level}">${char.level}</option>`);
        char.skillBookBlocks.get(key)['select'].selectedIndex = char.level - 1;
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
        i.classList = 'checkbox';
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
//to finish
function SpecialBuild(char) {
    for (key in char.SPECIAL) {

        let SpecialObject = {
        }
        SpecialFullCreate(key, char, SpecialObject);
        function SpecialFullCreate(key, char) {
            let fulldiv = document.createElement('div');
            fulldiv.className = 'full';

            let img = document.createElement('img');
            img.src = `Icons/${key}.webp`;
            fulldiv.appendChild(img);

            let value = document.createElement('a');
            value.id = key;
            value.className = 'value';
            fulldiv.appendChild(value);

            let name = document.createElement('a');
            name.textContent = skill.name;
            fulldiv.appendChild(name);

            SpecialObject['value'] = value

            let special = char.SPECIAL[key];
            fulldiv.addEventListener('click', () => (ElemDescription(Desc, char.skills[value.id])))

            let down = document.createElement('button');
            down.id = key;
            down.className = 'down';
            down.textContent = '-';
            down.addEventListener('click', () => (Special_down(down.id, char), FNV(char)))
            down.disabled = true;
            fulldiv.appendChild(down);

            let up = document.createElement('button');
            up.id = key;
            up.className = 'up';
            up.addEventListener('click', () => (Special_up(up.id, char), FNV(char)))
            up.textContent = '+';
            fulldiv.appendChild(up);

            SpecialObject['up'] = up;
            SpecialObject['down'] = down;
            char.skillBlocks.set(key, skillObject);

            let Stats = (document.querySelector('#SPECIAL>.Stats'))
            Stats.append(fulldiv)
        }
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
console.time('Abilitie test');
BuildAbilities(char);
InsertAbilities(char);
console.timeEnd('Abilitie test');
let skill = 'Barter';
//to finish
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
            Ability_Add(char, char.Abilities_Availible.get(arr[char.level / 2 - 1]))
        }
        LevelUp(char);
    }
}


FNV(char)

// toMaxLevel()