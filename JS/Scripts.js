function ElemDescription (Desc, elem) {
    Desc.querySelector("#Elem").textContent = elem.name
    Desc.querySelector("#Text").textContent = elem.Description
}
//elem - dom element 
function Choose_prize (char, name, elem) {
    if (char.level == 1) {
        if (elem.classList.contains("unChecked") && 100 - char.skills[name].value(char) >= 15) {
            if (char.prizeSkillsAveilible > 0) {
                elem.classList.replace("unChecked", "Checked");
                char.prizeSkillsAveilible -= 1;
                char.need_sp -= 15;
                char.skills[name].bonus += 15;
                char.skillsByLevel[char.level - 1][name] += 15;
                char.PrizeSkills.add(name);
            }
        }
        else {
            if (char.skills[name].bonus - 15 >= 0) {
                elem.classList.replace("Checked", "unChecked");
                char.prizeSkillsAveilible += 1;
                char.need_sp += 15;
                char.skills[name].bonus -= 15;
                char.skillsByLevel[char.level - 1][name] -= 15;
                char.PrizeSkills.delete(name);
            }
        }
    }
}
function Skill_up (name, char) {
    let skill_points = char.skillsByLevel[char.level - 1]['points'];
    let spent = char.skillsByLevel[char.level - 1]['spent'];
    let skillvalue = char.skillsByLevel[char.level - 1][name];

    let step = 1
    //if our defined step smaller or equal to the points left 
    char.skillPoints_perUp <= (skill_points - spent) ? step = char.skillPoints_perUp : step = 1;


    if (skillvalue + step <= 100 && skill_points > spent) {
        char.skills[name].bonus += step;
        char.skillsByLevel[char.level - 1]['spent'] += step;
        char.skillsByLevel[char.level - 1][name] += step;

        SkillsUpDownCheck(char)
    }
    // return char.skills[name].bonus;
}
function Skill_down (name, char) {
    let skill_Bonus = char.skillsByLevel[char.level - 1][name]

    let step = 1
    //if our defined step bigger or equal to the points added to skill at this level 
    char.skillPoints_perDown <= (skill_Bonus) ? step = char.skillPoints_perDown : step = 1;

    if (skill_Bonus > 0) {
        char.skills[name].bonus -= step;
        char.skillsByLevel[char.level - 1]['spent'] -= step;
        char.skillsByLevel[char.level - 1][name] -= step;

        SkillsUpDownCheck(char)
    }
}
function Special_up (char, name) {
    if (char.Special_BonusPoints >= 1 && char.SPECIAL[name].value < 10) {
        char.SPECIAL[name].value += 1
        char.Special_BonusPoints -= 1

        SpecialUpDownCheck(char)
    }
}
function Special_down (char, name) {
    if (char.SPECIAL[name].value > char.baseSpecial) {
        char.SPECIAL[name].value -= 1
        char.Special_BonusPoints += 1

        SpecialUpDownCheck(char)
    }
}

function Choose_trait (char, elem, name) {
    if (char.level == 1) {
        if (elem.classList.contains("unChecked") && char.traits_Aveilible >= 1) {//make sure value is not too big
            if (char.traits[name].PersonalFuncOn?.(char, elem)) {
                return
            }
            elem.classList.replace("unChecked", "Checked");
            char.traits_Aveilible -= 1
            char.chosenTraits.add(name)
        }
        else if (elem.classList.contains("Checked")) {
            if (char.traits[name].PersonalFuncOff?.(char, elem)) {
                return
            }
            elem.classList.replace("Checked", "unChecked");
            char.traits_Aveilible += 1
            char.chosenTraits.delete(name)
        }
    }
}

function AbilityInfoFill () {
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

    function CheckboxActivate (event) {
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

function Ability_Add (char, name) {
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
        //adding new object with Sets of abilities different kinds added on this level
        if (!char.PerksbyLevel.has(char.level)) {
            char.PerksbyLevel.set(char.level, {});
        }
        if (!char.PerksbyLevel.get(char.level)[`${perk.type}`]) {
            char.PerksbyLevel.get(char.level)[`${perk.type}`] = new Set();
        }
        char.PerksbyLevel.get(char.level)[`${perk.type}`].add(name)

        ChangeInfo()
        function ChangeInfo () {
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
function Ability_Remove (char, name) {
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
        function ChangeInfo () {
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

let CharLevelup = document.querySelector('#CharLevelup.next')
let CharLeveldown = document.querySelector('#CharLeveldown.previous')


CharLevelup.addEventListener('click', () => (LevelUp(char), FNV(char)))
CharLeveldown.addEventListener('click', () => (LevelDown(char), FNV(char)))

function LevelUp (char) {
    let spent = char.skillsByLevel[char.level - 1]['spent'];
    let level_reached = char.level_reached;
    console.log('Reached: ' + char.level_reached)

    let skill_points = char.skillsByLevel[char.level - 1]['points'];

    if (level_reached > char.level && (char.Special_BonusPoints == 0 && char.prizeSkillsAveilible == 0)) {//Checking if there are taken level_reached for restoring
        RestoringLevel()
    }

    else if (level_reached == 1 && char.Special_BonusPoints == 0 && char.prizeSkillsAveilible == 0) {
        ToSecondLevel()
    }

    //No skillpoints left, all Prize Skills chosen, all Special Points spent, it is not level where perk is recieved or Perk is chosen
    else if (spent == skill_points && char.prizeSkillsAveilible == 0 && char.Special_BonusPoints == 0 && (!char.IsPerkLevel() ||
        (char.IsPerkLevel() && char.PerksbyLevel.has(char.level) ? char.PerksbyLevel.get(char.level)['levelup'] : false))) {
        NewLevel()
    }

    for (let key in char.skills) {
        char.skillBookBlocks.get(key)['select'].selectedIndex = CharlevelChoose.selectedIndex;
    }

    function ToSecondLevel () {
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

        SpecialUpDownCheck(char)

        char.skillsByLevel[char.level - 1]['points'] = Math.floor(char.SkillPointsCount());
        char.rest_point += char.SkillPointsCount() - Math.floor(char.SkillPointsCount());
        if (char.rest_point == 1) {//!!
            char.rest_point = 0;
            char.skillsByLevel[char.level - 1]['points'] += 1;
        }
    }

    function RestoringLevel () {
        console.log('restore: ' + level_reached)
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
        //Level Select box new option
        CharlevelChoose.selectedIndex += 1;
        SpecialUpDownCheck(char)
    }

    function NewLevel () {
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

        CharlevelChoose.insertAdjacentHTML('beforeend', `<option value="${level_reached + 1}">${level_reached + 1}</option>`);
        CharlevelChoose.selectedIndex += 1;
    }
}
function LevelDown (char) {
    console.log('Level ' + char.level)
    if (char.level > 2) {
        console.log('tolevel')
        toLevel()
    }
    else if (char.level > 1) {
        toFirstLevel()
    }
    function toLevel () {
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
    function toFirstLevel () {
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
function LevelJump (char) {
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

function FNV (char) {
    for (let key in char.SPECIAL) {
        char.SpecialBlocks['values'].get(key).textContent = char.SPECIAL[key].value
    }

    special.textContent = `SPECIAL ${char.Special_BonusPoints}`
    char.skillscount()
    char.total = Math.floor(char.inup_level * (10 + (char.SPECIAL['Intelligence'].value - 1) / 2) +
        (10 + (char.SPECIAL['Intelligence'].value) / 2) * (char.max_level - 1 - char.inup_level))

    for (let key in char.skills) {
        char.skillBlocks.get(key).value.textContent = char.skills[key].value(char);
    }

    let skill_points = char.skillsByLevel[char.level - 1]['points'];
    let spent = char.skillsByLevel[char.level - 1]['spent'];


    bonus.textContent = `Skills ${char.prizeSkillsAveilible}/3`
    // max.textContent = `Skill points on the ${char.max_level}:` + (char.total);
    max.textContent = `Skill points aveilible ${Math.floor(skill_points) - spent}`;
    need.textContent = `Needed: ${char.need_sp}`
    // CharlevelChoose.textContent = `Уровень Героя ${char.level}`

    for (let key in char.derived) {
        char.derivedBlocks.get(key).textContent = char.derived[key].value(char);
    }

    InsertAbilities(char);
    Ability_AveilabilityCheck(char);
}
