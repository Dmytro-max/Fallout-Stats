// saving progress before leaving page
window.onbeforeunload = function () {
    // localStorage.setItem("storedChar", JSON.stringify(char));
    if (char.level > 1) {
        let specialToSave = JSON.stringify(char.SPECIAL, function replacer (key, value) {
            return (key == 'value' || key == '' || typeof (value) === 'object') ? value : undefined;
        })
        console.log(specialToSave)
        localStorage.setItem("SPECIAL", specialToSave)
        console.log(char.SPECIAL)
        // console.log((localStorage.getItem("SPECIAL")))
        let SkillsToSave = JSON.stringify(Object.entries(char.skills).reduce((acc, [key, value]) => {
            const { Books, bonus } = value;
            acc[key] = {
                bonus: bonus,
                Books: Books.map(({ location, level }) => ({ location, level })),
            };
            return acc;
        }, {}))
        localStorage.setItem("skills", SkillsToSave)

        let abilitiesToSave = JSON.stringify(char.Main_Abilities, function replacer (key, value) {
            return (key == 'rang' || value == 'level_taken' || value == 'Increased' || typeof (value) === 'object'
                && (key != 'SPECIAL' && key != 'SpecialWindow' && key != 'window')) ? value : undefined;
        })
        // console.log(ability);
        localStorage.setItem("Main_Abilities", abilitiesToSave)
        localStorage.setItem("PrizeSkills", JSON.stringify(Array.from(char.PrizeSkills)))
        localStorage.setItem("chosenTraits", JSON.stringify(Array.from(char.chosenTraits)))
        localStorage.setItem("skillsByLevel", JSON.stringify(char.skillsByLevel))
        // localStorage.setItem("skillsByLevel", JSON.stringify(char.PerksbyLevel,))


        let params = {
            level: char.level,
            implants_added: char.implants_added,
            prizeSkillsAveilible: char.prizeSkillsAveilible,
            traits_Aveilible: char.traits_Aveilible,
            Special_BonusPoints: char.Special_BonusPoints,

            skillbook_bonus: char.skillbook_bonus,
            skillPoints_perUp: char.skillPoints_perUp,
            skillPoints_perDown: char.skillPoints_perDown,

            max_level: char.max_level,
            level_reached: char.level_reached,
            baseSpecial: char.baseSpecial,
            skill_pointsBonus: char.skillPoints,
            levelsForPerk: char.levelsForPerk,
        }

        localStorage.setItem("charParams", JSON.stringify(params))
        // return "Данные не сохранены. Точно перейти?";}
    }
};
console.log('saveload')
// console.log(localStorage.getItem("SPECIAL") != '{}');


if (localStorage.getItem("SPECIAL")) {
    console.log('restoration')

    let specialToRestore = (JSON.parse(localStorage.getItem("SPECIAL")))

    char = new FNVChar(specialToRestore, SPECIAL_Ru, FNV_Abilities, FNV_Abilities_Ru, skills, skills_Ru, Traits, Traits_Ru, Derived, Derived_Ru)


    let restoredSkills = JSON.parse(localStorage.getItem("skills"))
    for (let skill in restoredSkills) {
        char.skills[skill].bonus = restoredSkills[skill].bonus
        for (let index = 0; index < char.skills[skill].Books.length; index++) {
            char.skills[skill].Books[index] = Object.assign(char.skills[skill].Books[index], restoredSkills[skill].Books[index])
        }
    }

    let restoredAbilities = JSON.parse(localStorage.getItem("Main_Abilities"))
    console.log(restoredAbilities);
    for (let abilitie in restoredAbilities) {
        char.Main_Abilities[abilitie].level_taken = restoredAbilities[abilitie].level_taken
        char.Main_Abilities[abilitie].rang = restoredAbilities[abilitie].rang

        if (char.Main_Abilities[abilitie]?.['Increased']) {
            char.Main_Abilities[abilitie]['Increased'] = restoredAbilities[abilitie]['Increased']
        }

    }

    let skillsByLevel = JSON.parse(localStorage.getItem("skillsByLevel"))
    char.skillsByLevel = skillsByLevel

    let params = JSON.parse(localStorage.getItem("charParams"))
    for (let param in params) {
        char[param] = params[param]
        // console.log(`${param}:${params[param]}`);
    }
    console.log(params)
    debugger;

    SpecialBlockCreate(char),
        SkillsBuild(char),
        DerivedBuild(char),
        TraitsBuild(char)
    BuildAbilities(char)
    InsertAbilities(char)
    Ability_AveilabilityCheck(char)

    let restoredTraits = new Set(JSON.parse(localStorage.getItem("chosenTraits")))
    char.chosenTraits = restoredTraits

    let restoredPrizeSkills = new Set(JSON.parse(localStorage.getItem("PrizeSkills")))
    char.PrizeSkills = restoredPrizeSkills

    for (skill of restoredPrizeSkills.values()) {
        let elem = char.skillBlocks.get(skill)
        elem.block.classList.replace("unChecked", "Checked");
    }
    for (trait of restoredTraits) {
        let elem = char.TraitBlocks.get(trait)
        elem.block.classList.replace("unChecked", "Checked");
    }

    SpecialUpDownCheck(char)
    SkillsUpDownCheck(char)
    FNV(char)

    localStorage.removeItem("SPECIAL")
    // localStorage.removeItem("PrizeSkills")
    // localStorage.removeItem("Main_Abilities")
    // localStorage.removeItem("chosenTraits")
    // localStorage.removeItem("skillsByLevel")
    // localStorage.removeItem("charParams")
}

else {
    char = new FNVChar(SPECIAL, SPECIAL_Ru, FNV_Abilities, FNV_Abilities_Ru, skills, skills_Ru, Traits, Traits_Ru, Derived, Derived_Ru),
        SpecialBlockCreate(char),
        SkillsBuild(char),
        DerivedBuild(char),
        TraitsBuild(char)
    BuildAbilities(char)
    InsertAbilities(char)
    Ability_AveilabilityCheck(char)
    FNV(char)
}

const DEF_SPECIAL_VALUE = 5
const MAX_SPECIAL_VALUE = 10
const MIN_SPECIAL_VALUE = 1
function SpecialUpDownCheck (char) {
    for (key in char.SPECIAL) {
        if (char.level > 1) {
            char.SpecialBlocks.downs.get(key).disabled = true;
            char.SpecialBlocks.ups.get(key).disabled = true;
        }
        else {
            if (char.SPECIAL[key].value == 1) {
                char.SpecialBlocks.downs.get(key).disabled = true;
            }
            else {
                char.SpecialBlocks.downs.get(key).disabled = false;
            }
            if (char.SPECIAL[key].value == 10 || char.Special_BonusPoints == 0) {
                char.SpecialBlocks.ups.get(key).disabled = true;
            }
            else {
                char.SpecialBlocks.ups.get(key).disabled = false;
            }
        }
    }
}
function SkillsUpDownCheck (char) {

    for (let item of char.skillBlocks.values()) {
        // debugger
        if (char.skillsByLevel[char.level - 1]['spent'] == char.skillsByLevel[char.level - 1]['points']) {
            item.up.disabled = true;
        }
        else {
            item.up.disabled = false;
        }
    }
    for (let item of char.skillBlocks.values()) {
        item.down.disabled = (!char.skillsByLevel[char.level - 1][item.name] > 0)
    }
}
// alert(JSON.stringify(char.SPECIAL, function replacer (key, value) {
//     return (key == 'value' || key == '' || typeof (value) === 'object') ? value : undefined;
// }));