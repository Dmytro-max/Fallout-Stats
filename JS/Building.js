

function BuildAbilities(char) {
    for (let key in char.Main_Abilities) {
        AbilitieBlockBuild(char.Main_Abilities[key], key);
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
        // Ad_level.textContent = `${(perk?.level_taken !=null ? perk?.level_taken + '|' : '', perk.level) }`



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
                        LevelForAllDesired.textContent = `Уровень для получения: ${char.WishedLevelUpAbilitiesAmount * char.levelsForPerk * perk.rangs}`

                        if (char.WishedLevelUpAbilitiesAmount * char.levelsForPerk > char.max_level) {
                            LevelForAllDesired.style.color = 'red'
                        }

                        //Adding desired abilities to 
                        // if (!char.DesireAbilities.has(perk.level)) {
                        //     char.DesireAbilities.set(perk.level, {});
                        // }
                        // if (!char.DesireAbilities.get(perk.level)[`${perk.type}`]) {
                        //     char.DesireAbilities.get(perk.level)[`${perk.type}`] = new Set();
                        // }
                        // char.DesireAbilities.get(char.level)[`${perk.type}`].add(name)

                        break;
                    case 'special':
                        char.WishedSpecialAbilitiesAmount += 1;
                        DesiredSpecialPerks.textContent = `Желанные способности: ${char.WishedSpecialAbilitiesAmount}`
                        break;
                    case 'implant':
                        char.WishedImplantAbilitiesAmount += 1;
                        DesiredImplantPerks.textContent = `Желанные способности: ${char.WishedImplantAbilitiesAmount}`

                        if (char.WishedLevelUpAbilitiesAmount > char.SPECIAL['Endurance']) {
                            LevelForAllDesired.style.color = 'red'
                        }
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
                        LevelForAllDesired.textContent = `Уровень для получения: ${char.WishedLevelUpAbilitiesAmount * char.levelsForPerk * perk.rangs}`

                        if (char.WishedLevelUpAbilitiesAmount * char.levelsForPerk <= char.max_level) {
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

                        if (char.WishedLevelUpAbilitiesAmount <= char.SPECIAL['Endurance']) {
                            LevelForAllDesired.style.color = '--main-text-color'
                        }
                        break;
                }

                div.classList.replace("Checked", "unChecked");
                div.closest('div.ability').classList.remove("desired");
            }
        }
        idiv.addEventListener('click', () => (CheckboxActivate(idiv)))


        char.Abilities_Availible.set(key, av_block)
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

function InsertAbilities(char){
    for (let key in char.Main_Abilities) {
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
}

function Ability_AveilabilityCheck(char) {
    let Check = (perk, key) => {
        let av_block = char.Abilities_Availible.get(key);
        let added_block = char.Abilities_Added.get(key);

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

        char.TraitBlocks.set(traitDiv.id, traitDiv)
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


function SpecialWindowCreate(char, elem, Perkname) {
    let SpecialWindow = {
        values: new Map(),
        downs: new Map(),
        ups: new Map(),
        article: true,
        window: null,
    };
    elem.SpecialWindow = SpecialWindow;
    let windowBlock = document.createElement('div');

    windowBlock.className = 'window';
    SpecialWindow['window'] = windowBlock;

    let h3 = document.createElement('h3');
    SpecialWindow['article'] = h3;
    windowBlock.appendChild(h3);
    // let stored = document.createElement('h3');

    let Stats = document.createElement('div');
    Stats.classList = 'Stats Special';
    for (key in char.SPECIAL) {
        // let name = 
        let wrapdiv = document.createElement('div');
        // console.log(char)
        let name = char.SPECIAL[key].name;

        let up = document.createElement('button');
        up.textContent = '+';
        up.name = key;
        up.className = 'up';
        up.addEventListener('click', () => {
            let name = event.currentTarget.name;
            if (elem.points > 0) {
                elem.SPECIAL[name] += 1;
                elem.points -= 1;
                elem.spent += 1;

                elem.Increased[elem.rang] = name;
                SpecialWindow['reset'].disabled = false;
                if (elem.points == 0) {
                    SpecialWindow['accept'].disabled = false;
                    for (up of SpecialWindow['ups'].values()) {
                        up.disabled = true;
                    }
                }

                SpecialWindow['downs'].get(name).disabled = false;
                SpecialWindow['values'].get(name).textContent = elem.SPECIAL[name];

                SpecialWindow['article'].textContent = `SPECIAL ${elem['points']}`;

            }
        });
        SpecialWindow['ups'].set(key, up);

        let down = document.createElement('button');
        down.textContent = '-';
        down.name = key;
        down.className = 'down';
        down.addEventListener('click', () => {
            let name = down.name;
            if (elem.spent > 0) {
                elem.SPECIAL[name] -= 1;
                elem.points += 1;
                elem.spent -= 1;
                console.log('up')

                SpecialWindow['ups'].get(name).disabled = false;

                SpecialWindow['values'].get(name).textContent = elem.SPECIAL[name];
                SpecialWindow['article'].textContent = `SPECIAL ${elem['points']}`;

                SpecialWindow['accept'].disabled = true;
                if (elem.spent == 0) {
                    SpecialWindow['reset'].disabled = true;
                    for (down of SpecialWindow['downs'].values()) {
                        down.disabled = true;
                    }
                    for (up of SpecialWindow['ups'].values()) {
                        up.disabled = false;
                    }
                }
            }
        });
        SpecialWindow['downs'].set(key, down);
        down.disabled = true;

        let value = document.createElement('a');

        value.setAttribute('name', key);
        value.className = 'value';
        SpecialWindow['values'].set(down.name, value);

        wrapdiv.insertAdjacentHTML('beforeend', `<img src="Icons/${key}_icon.webp">`);
        wrapdiv.append(value);
        wrapdiv.insertAdjacentHTML('beforeend', `<a>${name}</a>`)
        wrapdiv.append(down);
        wrapdiv.append(up);
        Stats.append(wrapdiv);

    }

    windowBlock.appendChild(Stats);
    createControl();

    function createControl() {

        let control = document.createElement('div');
        control.className = 'control';

        let reset = document.createElement('button');
        reset.id = 'reset';
        reset.textContent = 'Сброс';

        reset.addEventListener('click', () => {
            for (key in elem.SPECIAL) {
                elem.SPECIAL[key] = char.SPECIAL[key].value;
                elem.SpecialWindow['values'].get(key).textContent = char.SPECIAL[key].value;
                elem.points += elem.spent;
                elem.spent = 0;
                elem.SpecialWindow['article'].textContent = 'SPECIAL ' + elem.points;
                SpecialWindow['downs'].get(key).disabled = true;
                SpecialWindow['ups'].get(key).disabled = false;
            }
        });

        let accept = document.createElement('button');
        accept.id = 'accept';
        accept.textContent = 'Готово'
        accept.addEventListener('click', () => {
            let name = elem.Increased[elem.rang]
            for (key in elem.SPECIAL) {
                SpecialWindow['downs'].get(key).disabled = true;
            }
            reset.disabled = true;
            accept.disabled = true;

            Ability_Add(char, Perkname);
            FNV(char);
        });
        SpecialWindow['accept'] = accept;
        SpecialWindow['reset'] = reset;
        elem.SpecialWindow['accept'].disabled = true;
        elem.SpecialWindow['reset'].disabled = true;

        control.appendChild(reset);
        control.appendChild(accept);

        windowBlock.appendChild(control);
    }
}
function SpecialBlockCreate(char) {
    let window = {
        values: new Map(),
        downs: new Map(),
        ups: new Map(),
    };
    char.SpecialBlocks = window

    let Stats = document.createElement('div');
    Stats.classList = 'Stats Special';
    for (key in char.SPECIAL) {
        let wrapdiv = document.createElement('div');
        let name = char.SPECIAL[key].name;

        let up = document.createElement('button');
        up.textContent = '+';
        up.name = key;
        up.className = 'up';
        up.addEventListener('click', () => {
            let name = up.name;
            Special_up(char, name);
            FNV(char);
        });

        let down = document.createElement('button');
        down.textContent = '-';
        down.name = key;
        down.className = 'down';
        down.addEventListener('click', () => {
            let name = down.name;
            Special_down(char, name);
            FNV(char)
        });

        let value = document.createElement('a');

        value.setAttribute('name', key);
        value.className = 'value';

        wrapdiv.insertAdjacentHTML('beforeend', `<img src="Icons/${key}_icon.webp">`);
        wrapdiv.append(value);
        wrapdiv.insertAdjacentHTML('beforeend', `<a>${name}</a>`)
        wrapdiv.append(down);
        wrapdiv.append(up);
        Stats.append(wrapdiv);
        window['ups'].set(key, up)
        window['downs'].set(key, down)
        window['values'].set(key, value)
    }

    Special.appendChild(Stats);
}
function SkillsWindowCreate(char, elem, Perkname) {
    let windowBlock = document.createElement('div');
    let SkillWindow = {
        values: new Map(),
        blocks: new Map(),
        article: null,
        window: windowBlock,
        reset: null,
        accept: null,
    };
    elem.SkillWindow = SkillWindow;

    windowBlock.className = 'window';
    // windowBlock.id = '';
    SkillWindow['window'] = windowBlock;

    let h3 = document.createElement('h3');
    SkillWindow['article'] = h3;

    windowBlock.appendChild(h3);


    let Stats = document.createElement('div');
    Stats.classList = 'Stats';
    Stats.appendChild(h3);
    windowBlock.appendChild(Stats);

    for (key in char.skills) {
        let id = key;
        let wrapdiv = document.createElement('div');
        wrapdiv.classList = 'main unChecked';
        wrapdiv.id = id;
        let i = document.createElement('i');
        i.className = 'checkbox';

        let name = char.skills[key].name;

        let value = document.createElement('a');

        value.setAttribute('name', key);
        value.className = 'value';

        wrapdiv.append(i);
        wrapdiv.insertAdjacentHTML('beforeend', `<img src="Icons/${key}.webp">`);
        wrapdiv.append(value);
        wrapdiv.insertAdjacentHTML('beforeend', `<a>${name}</a>`)
        Stats.append(wrapdiv);

        SkillWindow['values'].set(id, value);
        SkillWindow['blocks'].set(id, wrapdiv);
        wrapdiv.addEventListener('click', () => {
            if (wrapdiv.classList.contains("unChecked")) {
                // console.log((100 - char.skills[id].value(char)) < 15)
                if ((100 - char.skills[id].value(char)) > 15 && elem.points > 0) {
                    value.textContent = char.skills[id].value(char) + 15;
                    wrapdiv.classList.replace("unChecked", "Checked");
                    elem.Increased = wrapdiv.id;
                    elem.SkillWindow['accept'].disabled = false;
                    elem.SkillWindow['reset'].disabled = false;
                    elem.points -= 1;
                    elem.SkillWindow['article'].textContent = 'Skills ' + elem.points;
                }
            }
            else if (wrapdiv.classList.contains("Checked")) {
                if (char.skills[id].bonus < 15) {
                    value.textContent = char.skills[id].value(char) - 15;
                    wrapdiv.classList.replace("Checked", "unChecked");
                    elem.Increased = wrapdiv.id;
                    elem.SkillWindow['accept'].disabled = true;
                    elem.SkillWindow['reset'].disabled = true;
                    elem.points += 1;
                    elem.SkillWindow['article'].textContent = 'Skills ' + elem.points;
                }
            }
        })
    }

    windowBlock.appendChild(Stats);
    createControl();

    function createControl() {

        let control = document.createElement('div');
        control.className = 'control';

        let reset = document.createElement('button');
        reset.id = 'reset';
        reset.textContent = 'Сброс';

        reset.addEventListener('click', () => {
            elem.SkillWindow['blocks'].get(elem.Increased).classList.replace("Checked", "unChecked");
            char.SkillWindow['values'].get(elem.Increased).textContent = char.skills.value(char);
            elem.points += 1;
            elem.SkillWindow['article'].textContent = 'Skills ' + elem.points;
        });

        let accept = document.createElement('button');
        accept.id = 'accept';
        accept.textContent = 'Готово'
        accept.addEventListener('click', () => {
            let name = elem.Increased;

            Ability_Add(char, Perkname);
            FNV(char);
        });
        SkillWindow['accept'] = accept;
        SkillWindow['reset'] = reset;
        elem.SkillWindow['accept'].disabled = true;
        elem.SkillWindow['reset'].disabled = true;

        control.appendChild(reset);
        control.appendChild(accept);

        windowBlock.appendChild(control);
    }
}
