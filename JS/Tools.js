
function firstToSecondLevel() {

}
//to finish character
function toMaxLevel () {
    if (char.level == 1) {
        return;        
    }

    while (char.Special_BonusPoints > 0) {
        Special_up(char, 'Agility');
    }

    //Clearing list of abilities to be added from those that contain custom window with aditional actions like Intense Training
    LevelAbilities = Object.keys(char.Main_Abilities)
    .filter(key => char.Main_Abilities[key].type == 'levelup' && char.Main_Abilities[key]?.Increased == undefined)
    // .sort((abilitie_a, abilitie_b) => char.Main_Abilities[abilitie_a].RequirementsCheck?.(char) == (undefined || true) ? -1 : 1 )
    .sort((a, b) => {
        let abilitie_a = char.Main_Abilities[a];
        let abilitie_b = char.Main_Abilities[b];
        if (abilitie_a.RequirementsCheck?.(char) == (undefined || true) && 
                abilitie_b.RequirementsCheck?.(char) == (undefined || true)) {
            abilitie_a.level >= abilitie_b.level ? -1 : 1;              
        } 
        else if (abilitie_a.RequirementsCheck?.(char) == (undefined || true) && 
                    abilitie_b.RequirementsCheck?.(char) != (undefined || true)){
                return -1;
                }
        else if (abilitie_a.RequirementsCheck?.(char) != (undefined || true) && 
                    abilitie_b.RequirementsCheck?.(char) == (undefined || true)){
                return 1;
                }
    })

    let abilityGen = NextLevelAbility()
    let skillGen = NextSkill()
    let skill = skillGen.next().value;


    while (char.level < char.max_level) {
        FNV(char)
        if (char.IsPerkLevel()) {
            Ability_Add(char, abilityGen.next().value)
        }

        while (char.skillsByLevel[char.level - 1]['spent'] < char.skillsByLevel[char.level - 1]['points']) {
            if (char.skills[skill].value(char) == char.maxSkillValue) {
                skill = skillGen.next().value;
            }
            Skill_up(skill, char);
        }

        LevelUp(char);
    }
    function* NextSkill () {
        for (let skill of skillsNames) {
            yield skill;
        }
    }

    function* NextLevelAbility () {
        for (let ability of LevelAbilities) {
            yield ability;
        }
    }

}

let skillsNames
function FormPreparationtoUse () {
    fnvCreatorChoice.dispatchEvent(new Event('click'))

    // char = new FNVChar(SPECIAL, SPECIAL_Ru, FNV_Abilities, FNV_Abilities_Ru, skills, skills_Ru, Traits, Traits_Ru, Derived, Derived_Ru)
    // SpecialBlockCreate(char)
    // SkillsBuild(char)
    // DerivedBuild(char)
    // TraitsBuild(char)
    // console.time('Abilitie test');
    // BuildAbilities(char);
    // InsertAbilities(char)
    // Ability_AveilabilityCheck(char);
    // console.timeEnd('Abilitie test');
    // skillsNames = Object.keys(char.skills)

    // while (char.Special_BonusPoints > 0) {
    //     Special_up(char, 'Agility');
    // }

    // for (let name_index = 0; name_index < skillsNames.length && char.prizeSkillsAveilible > 0; name_index++) {
    //     let skill = skillsNames[name_index];
    //     char.Choose_PrizeSkill(char, skill, char.skillBlocks.get(skill).block);
    // }
    // update_ChoosenPrizeSkills(char)

    // LevelUp(char);
    FNV(char)

    // JSON.stringify(Array.from(char.PrizeSkills))
}


// FormPreparationtoUse()
// toMaxLevel()

// FNV(char)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }