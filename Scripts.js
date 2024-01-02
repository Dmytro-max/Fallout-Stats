function ElemDescription(Desc, elem) {
    Desc.querySelector("#Elem").textContent = elem.name
    Desc.querySelector("#Text").textContent = elem.Description
}

function Choose_prize(char, name, elem) {
    if (char.level == 1) {
        if (elem.classList.contains("unChecked") && 100 - char.skills[name].value(char) >= 15) {
            if (char.prize_skillsNum > 0) {
                char.prize_skillsNum -= 1;
                char.need_sp -= 15;
                char.skills[name].bonus += 15;
                char.skillsByLevel[char.level - 1][name] += 15;
                elem.classList.replace("unChecked", "Checked");
                char.PrizeSkills.add(name);
            }
        }
        else {
            if (char.skills[name].bonus - 15 >= 0) {
                elem.classList.replace("Checked", "unChecked");
                char.prize_skillsNum += 1;
                char.need_sp += 15;
                char.skills[name].bonus -= 15;
                char.skillsByLevel[char.level - 1][name] -= 15;
                char.PrizeSkills.delete(name);
            }
        }
    }
}
function Skill_up(name, char) {
    let skill_points = char.skillsByLevel[char.level - 1]['points'];
    let spent = char.skillsByLevel[char.level - 1]['spent'];
    let skillvalue = char.skillsByLevel[char.level - 1][name];

    if (skillvalue < 100 && skill_points > spent) {
        char.total_b -= 1;
        char.skills[name].bonus += 1;
        char.skillsByLevel[char.level - 1]['spent'] += 1;
        char.skillsByLevel[char.level - 1][name] += 1;

        char.skillBlocks.get(name).down.disabled = false;
        if (char.skillsByLevel[char.level - 1]['spent'] == skill_points) {
            for (let item of char.skillBlocks.values()) {
                item.up.disabled = true;
            }
        }
    }
    // return char.skills[name].bonus;
}
function Skill_down(name, char) {
    let skillvalue = char.skillsByLevel[char.level - 1][name]
    if (skillvalue > 0) {
        char.total_b += 1;
        char.skills[name].bonus -= 1;
        skillvalue = char.skills[name].bonus;
        char.skillsByLevel[char.level - 1]['spent'] -= 1;
        char.skillsByLevel[char.level - 1][name] -= 1;
        char.skillBlocks.get(name).up.disabled = false;

        // if (char.skillsByLevel[char.level - 1]['spent'] - char.skillsByLevel[char.level - 1]['points'] == 1) {//!! spent more than available????
        //     for (let item of char.skillBlocks.values()) {
        //         item.up.disabled = false;
        //     }
        // }
        if (char.skillsByLevel[char.level - 1][name] == 0) {
            char.skillBlocks.get(name).down.disabled = true;
        }
        for (let key in char.skills) {
            if (char.skills[key].value(char) < 100) {
                char.skillBlocks.get(key).up.disabled = false;
            }
        }
    }
}
function Special_up(char, name) {
    if (char.Special_BonusPoints >= 1 && char.SPECIAL[name].value < 10) {
        char.SPECIAL[name].value += 1
        char.Special_BonusPoints -= 1

        char.SpecialBlocks.downs.get(name).disabled = false;
        if (char.SPECIAL[name].value == 10) {
            char.SpecialBlocks.ups.get(name).disabled = true;
        }
        if (char.Special_BonusPoints == 0) {
            for (sp of char.SpecialBlocks.ups.values()) {
                sp.disabled = true;
            }
        }
    }
}
function Special_down(char, name) {
    if (char.SPECIAL[name].value > char.baseSpecial) {
        char.SPECIAL[name].value -= 1
        char.Special_BonusPoints += 1

        char.SpecialBlocks.ups.get(name).disabled = false;
        if (char.SPECIAL[name].value == char.baseSpecial) {
            char.SpecialBlocks.downs.get(name).disabled = true;
        }
        for (key in char.SPECIAL) {
            if (char.SPECIAL[key].value < 10)
                char.SpecialBlocks.ups.get(key).disabled = false;
        }
    }
}

function Choose_trait(char, elem, name) {
    if (char.level == 1) {
        if (elem.classList.contains("unChecked") && char.trait_n >= 1) {//make sure value is not too big
            if (char.traits[name].PersonalFuncOn?.(char, elem)) {
                return
            }
            elem.classList.replace("unChecked", "Checked");
            char.trait_n -= 1
        }
        else if (elem.classList.contains("Checked")) {
            if (char.traits[name].PersonalFuncOff?.(char, elem)) {
                return
            }
            elem.classList.replace("Checked", "unChecked");
            char.trait_n += 1
        }
    }
}

function AbilityInfoFill() {
    let name = perk.name;
    let rangs = perk.rangs;
    let rang = perk.rang;
    let requirements_text = perk?.requirements_text !== (undefined || null) ? perk.requirements_text : '';

    if (perk.type == 'levelup') {
        av_block.innerHTML = `<h4>${name}</h4><h4 class='level'>${perk.level}</h4><a>${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
        added_block.innerHTML = `<h4>${name}</h4><h4 class='level'>${perk.level}|${perk.level_taken}</h4><a>${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
    }
    else {
        av_block.innerHTML = `<h4>${name}</h4><a lang="ru">${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
        added_block.innerHTML = `<h4>${name}</h4><h4 class='level'>${perk.level_taken}</h4><a lang="ru">${requirements_text}</a><h4 class'rang'>${rang}/${rangs}</h4>`;
    }

    let description_text = perk.Description;
    let Av_Additional = document.createElement('div');
    Av_Additional.innerHTML = `<p class="description">${description_text}</p>`;
    Av_Additional.className = 'additional';
    let Ad_Additional = Av_Additional.cloneNode(true);


    let idiv = document.createElement('div');
    idiv.className = 'unChecked';

    idiv.addEventListener('click', CheckboxActivate)

    function CheckboxActivate(event) {
        target = event.target;
        console.log(target);
        let div = event.target.closest('div');
        console.log(div);
        number = div.dataset.number;
        skill = div.dataset.skill;

        if (div.classList.contains('unChecked')) {
            char.WishedAbilitiesAmount += 1;

            div.classList.replace("unChecked", "Checked");
            div.closest('div.ability').classList.add("desired");
        }
        else {
            char.WishedAbilitiesAmount -= 1;

            div.classList.replace("Checked", "unChecked");
            div.closest('div.ability').classList.remove("desired");
        }
    }
    av_block.prepend(idiv);

    let i = document.createElement('i');
    i.classList = 'checkbox';
    idiv.prepend(i);


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


function Ability_Add(char, name) {
    if (!char.Abilities_Availible.get(name).classList.contains('unAvailible')) {
        let perk = char.Main_Abilities[name];
        switch (perk.type) {
            case 'levelup':
            case 'special':
            case 'implant':
                perk.Add?.(char);
                perk.rang += 1;
                perk.level_taken = char.level;
                break;
        }
        if (!char.PerksbyLevel.has(char.level)) {
            char.PerksbyLevel.set(char.level, {});
        }
        if (!char.PerksbyLevel.get(char.level)[`${perk.type}`]) {
            char.PerksbyLevel.get(char.level)[`${perk.type}`] = new Set();
        }
        char.PerksbyLevel.get(char.level)[`${perk.type}`].add(name)

        ChangeInfo()
        function ChangeInfo() {
            let added_block = char.Abilities_Added.get(name);
            if (perk.RangsAdded?.()) {
                let Rangs = added_block.querySelector('p.rangs')
                Rangs.innerHTML = ('<h3>Ранги:</h3>')
                let gen = perk.RangsAdded();
                let number = 1;
                for (let value of gen) {
                    let rang_text = document.createElement('a');
                    rang_text.textContent = `${number}. ${value}`;
                    Rangs.appendChild(rang_text);
                    number++;
                }
            }
            added_block.querySelector('h4.rang').textContent = `${perk.rang}/${perk.rangs}`
            added_block.querySelector('h4.level').textContent = `${perk.level_taken}${(perk.type == 'levelup' && perk?.level != undefined) ? '|' + perk?.level : ''}`
            added_block.style.display = 'grid'


            let av_block = char.Abilities_Availible.get(name);
            av_block.querySelector('h4.rang').textContent = `${perk.rang}/${perk.rangs}`
            perk.rang == perk.rangs ? av_block.style.display = 'none' : ''
        }
    }
}
function Ability_Remove(char, name) {
    if (!char.Abilities_Added.get(name).classList.contains('unAvailible')) {
        let perk = char.Main_Abilities[name];
        perk.Remove?.(char);
        perk.rang -= 1;
        char.PerksbyLevel.get(char.level)[perk.type].delete(name);

        switch (perk.type) {
            case 'levelup':
            case 'special':
            case 'implant':
                break;
        }

        ChangeInfo()
        function ChangeInfo() {
            let added_block = char.Abilities_Added.get(name);
            if (perk.RangsAdded?.()) {
                let Rangs = added_block.querySelector('p.rangs')
                Rangs.innerHTML = ('<h3>Ранги:</h3>')
                let gen = perk.RangsAdded();
                let number = 1;
                for (let value of gen) {
                    let rang_text = document.createElement('a');
                    rang_text.textContent = `${number}. ${value}`;
                    Rangs.appendChild(rang_text);
                    number++;
                }
            }
            added_block.querySelector('h4.rang').textContent = `${perk.rang}/${perk.rangs}`
            added_block.querySelector('h4.level').textContent = `${perk.level_taken}${(perk.type == 'levelup' && perk?.level != undefined) ? '|' + perk?.level : ''}`
            perk.rang == 0 ? added_block.style.display = 'none' : ''

            let av_block = char.Abilities_Availible.get(name);
            av_block.querySelector('h4.rang').textContent = `${perk.rang}/${perk.rangs}`
        }
    }
}

// let levelSelect = document.querySelector('#ImplantlevelChoose')
let CharlevelChoose = document.querySelector('#CharlevelChoose')

CharlevelChoose.addEventListener('change', () => (LevelJump(char), FNV(char)))

// let implantLevelup = document.querySelector('#implantLevel.up')
// let implantLeveldown = document.querySelector('#implantLevel.down')

// implantLevelup.addEventListener('click', () => (levelSelect.selectedIndex + 2 < char.max_level ? levelSelect.selectedIndex += 1 : ''))
// implantLeveldown.addEventListener('click', () => (levelSelect.selectedIndex + 2 > 2 ? levelSelect.selectedIndex -= 1 : ''))

let CharLevelup = document.querySelector('#CharLevelup.next')
let CharLeveldown = document.querySelector('#CharLeveldown.previous')


CharLevelup.addEventListener('click', () => (LevelUp(char), FNV(char)))
CharLeveldown.addEventListener('click', () => (LevelDown(char), FNV(char)))

function LevelUp(char) {
    let spent = char.skillsByLevel[char.level - 1]['spent'];
    let levels = char.level_reached;
    console.log('Reached: ' + char.level_reached)

    let skill_points = char.skillsByLevel[char.level - 1]['points'];

    if (levels > char.level) {//Checking if there are taken levels for restoring
        RestoringLevel()
    }

    else if (levels == 1 && char.Special_BonusPoints == 0 && char.prize_skillsNum == 0) {
        ToSecondLevel()
    }

    else if (spent == skill_points && char.prize_skillsNum == 0 && (!char.IsPerkLevel() || (char.IsPerkLevel() &&
        char.PerksbyLevel.has(char.level) ? char.PerksbyLevel.get(char.level)['levelup'] : false))) {
        NewLevel()
    }

    for (let key in char.skills) {
        char.skillBookBlocks.get(key)['select'].selectedIndex = CharlevelChoose.selectedIndex;
    }

    function ToSecondLevel() {
        CharlevelChoose.insertAdjacentHTML('beforeend', `<option value="${char.level + 1}">${char.level + 1}</option>`);
        CharlevelChoose.selectedIndex += 1;

        //level of gaining book after getting new level
        for (let key in char.skills) {
            char.skillBookBlocks.get(key)['select'].insertAdjacentHTML('beforeend', `<option value="${char.level + 1}">${char.level + 1}</option>`);
            char.skillBookBlocks.get(key)['select'].selectedIndex = CharlevelChoose.selectedIndex;
        }

        char.level += 1;
        char.level_reached += 1;

        for (let block of char.SpecialBlocks.ups.values()) {
            block.disabled = true;
        }
        for (let block of char.SpecialBlocks.downs.values()) {
            block.disabled = true;
        }
        for (let item of char.skillBlocks.values()) {
            item.up.disabled = false;
        }
        char.skillsByLevel[char.level - 1]['points'] = Math.floor(char.SkillPointsCount());
        char.rest_point += char.SkillPointsCount() - Math.floor(char.SkillPointsCount());
        if (char.rest_point == 1) {//!!
            char.rest_point = 0;
            char.skillsByLevel[char.level - 1]['points'] += 1;
        }
    }

    function RestoringLevel() {
        console.log('restore: ' + levels)
        char.level += 1;
        if (char.PerksbyLevel.has(char.level)) {
            let perks = char.PerksbyLevel.get(char.level)

            for (let key in (perks)) {
                for (let ab of perks[key]) {
                    char.Main_Abilities[(ab)].Add?.(char);
                }
            }
        }

        for (let key in char.skills) {
            char.skills[key].bonus += char.skillsByLevel[char.level - 1][key];


            if (char.skillsByLevel[char.level - 1][key] > 0) {
                char.skillBlocks.get(key).down.disabled = false;
            }
            if (char.skillsByLevel[char.level - 1]['spent'] < Math.floor(char.SkillPointsCount())) {
                char.skillBlocks.get(key).up.disabled = false;
            }
            else {
                char.skillBlocks.get(key).up.disabled = true;
            }
        }

        // if (char.PerksbyLevel.has(char.level)) {//Making unAvailible to interact previos level ability
        //     for (let key in char.PerksbyLevel.get(char.level)) {
        //         for (let name of char.PerksbyLevel.get(char.level)[key]){
        //             Ability_Remove(char, name);
        //         }
        //         //;//char.PerksbyLevel.get(char.level)[key]
        //         console.log(key)
        //     }
        // }
        ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        CharlevelChoose.selectedIndex += 1;
    }

    function NewLevel() {
        for (let key in char.skills) {

            char.skillBookBlocks.get(key)['select'].insertAdjacentHTML('beforeend', `<option value="${char.level + 1}">${char.level + 1}</option>`);
            char.skillBookBlocks.get(key)['select'].selectedIndex = CharlevelChoose.selectedIndex;
        }
        char.level_reached += 1;
        char.level += 1;

        char.skillsByLevel[char.level - 1]['skillbook_bonus'] = char.skillbook_bonus;

        char.skillsByLevel[char.level - 1]['points'] = Math.floor(char.SkillPointsCount() + Math.floor(char.rest_point));
        char.rest_point += char.SkillPointsCount() - Math.floor(char.SkillPointsCount());
        if (char.rest_point == 1) {//!!
            char.rest_point = 0;
            char.skillsByLevel[char.level - 1]['points'] += 1;
        }

        for (let item of char.skillBlocks.values()) {
            item.up.disabled = false;
            item.down.disabled = true;
        }

        CharlevelChoose.insertAdjacentHTML('beforeend', `<option value="${levels + 1}">${levels + 1}</option>`);
        CharlevelChoose.selectedIndex += 1;
    }
}
function LevelDown(char) {
    console.log('Level ' + char.level)
    if (char.level > 2) {
        console.log('tolevel')
        toLevel()
    }
    else if (char.level > 1) {
        toFirstLevel()
    }
    function toLevel() {
        if (char.PerksbyLevel.has(char.level)) {
            let perks = char.PerksbyLevel.get(char.level)

            for (let key in (perks)) {
                for (let ab of perks[key]) {
                    char.Main_Abilities[(ab)].Remove?.(char);
                }
            }
        }
        char.level -= 1;
        CharlevelChoose.selectedIndex -= 1;

        for (let key in char.skills) {
            char.skillBlocks.get(key).up.disabled = true;
            char.skills[key].bonus -= char.skillsByLevel[char.level][key];

            if (char.skillsByLevel[char.level - 1][key] > 0) {
                char.skillBlocks.get(key).down.disabled = false;
            }
            else {
                char.skillBlocks.get(key).down.disabled = true;
            }
            char.skillBookBlocks.get(key)['select'].selectedIndex = CharlevelChoose.selectedIndex;
        }
    }
    function toFirstLevel() {
        char.level -= 1;
        CharlevelChoose.selectedIndex -= 1;

        for (let key in char.skills) {
            char.skillBlocks.get(key).up.disabled = true;
            char.skillBlocks.get(key).down.disabled = true;
            char.skills[key].bonus = char.skillsByLevel[char.level - 1][key];
            char.skillBookBlocks.get(key)['select'].selectedIndex = CharlevelChoose.selectedIndex;
        }
        for (let key in char.SPECIAL) {
            if (char.SPECIAL[key].value < 10 && char.Special_BonusPoints > 0) {
                char.SpecialBlocks.ups.get(key).disabled = false;
            }
            if (char.SPECIAL[key].value > char.baseSpecial) {
                char.SpecialBlocks.downs.get(key).disabled = false;
            }
        }
    }
}
function LevelJump(char) {
    let level = CharlevelChoose.value;
    CharlevelChoose.selectedIndex = char.level - 1;
    if (level > char.level) {
        while (level > char.level) {
            LevelUp(char);
        }
    }
    else if (level < char.level) {//if
        while (level < char.level) {
            LevelDown(char);
        }
    }
}

function FNV(char) {
    for (let key in char.SPECIAL) {
        char.SpecialBlocks['values'].get(key).textContent = char.SPECIAL[key].value
    }

    special.textContent = `SPECIAL ${char.Special_BonusPoints}`
    char.skillscount()
    char.total = Math.floor(char.inup_level * (10 + (char.SPECIAL['Intelligence'].value - 1) / 2) + (10 + (char.SPECIAL['Intelligence'].value) / 2) *
        (char.max_level - 1 - char.inup_level))

    for (let key in char.skills) {
        char.skillBlocks.get(key).value.textContent = char.skills[key].value(char);
    }

    let skill_points = char.skillsByLevel[char.level - 1]['points'];
    let spent = char.skillsByLevel[char.level - 1]['spent'];


    bonus.textContent = `Skills ${char.prize_skillsNum}/3`
    // max.textContent = `Skill points on the ${char.max_level}:` + (char.total);
    max.textContent = `Skill points aveilible ${Math.floor(skill_points) - spent}`;
    need.textContent = `Needed: ${char.need_sp}`
    // CharlevelChoose.textContent = `Уровень Героя ${char.level}`

    for (let key in char.derived) {
        char.derivedBlocks.get(key).textContent = char.derived[key].value(char);
    }

    InsertAbilities(char);
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
            for(key in elem.SPECIAL){
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