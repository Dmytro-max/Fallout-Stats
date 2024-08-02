//SPECIAL points up and down
Specials_up = document.querySelectorAll('#SPECIAL .up')
// for (let sp of Specials_up.entries()) {
//     let name = sp[1].name;
//     sp[1].addEventListener("click", () => (Special_up(char, name), FNV(char)))
// }
Specials_down = document.querySelectorAll('#SPECIAL .down')
// for (let sp of Specials_down.entries()) {
//     let name = sp[1].name;
//     sp[1].addEventListener("click", () => (Special_down(char, name), FNV(char)))
// }
let skillPoints_AddInput = document.querySelector("#skillPoints_PerUp")
let skillPoints_RemoveInput = document.querySelector("#skillPoints_PerDown")
document.querySelector("#propSubmit").addEventListener('click', () => (char.skillPoints_perUp = skillPoints_AddInput.valueAsNumber))
document.querySelector("#propSubmit").addEventListener('click', () => (char.skillPoints_perDown = skillPoints_RemoveInput.valueAsNumber))


// let levelSelect = document.querySelector('#ImplantlevelChoose')
let CharlevelChoose = document.querySelector('#CharlevelChoose')

CharlevelChoose.addEventListener('change', () => (LevelJump(char), FNV(char)))

let CharLevelup = document.querySelector('#CharLevelup.next')
let CharLeveldown = document.querySelector('#CharLeveldown.previous')

CharLevelup.addEventListener('click', () => (LevelUp(char), FNV(char)))
CharLeveldown.addEventListener('click', () => (LevelDown(char), FNV(char)))


//create
const fnv = document.querySelector(".FNV")
fnv.addEventListener("click", () => (
    char = new FNVChar(SPECIAL, SPECIAL_Ru, FNV_Abilities, FNV_Abilities_Ru, skills, skills_Ru, Traits, Traits_Ru, Derived, Derived_Ru),
    SpecialBlockCreate(char),
    SkillsBuild(char),
    DerivedBuild(char),
    TraitsBuild(char),
    console.time('Abilitie test'),
    BuildAbilities(char),
    InsertAbilities(char),
    Ability_AveilabilityCheck(char),
    console.timeEnd('Abilitie test'),
    FNV(char)
));



let skillsNames
function prep () {
    char = new FNVChar(SPECIAL, SPECIAL_Ru, FNV_Abilities, FNV_Abilities_Ru, skills, skills_Ru, Traits, Traits_Ru, Derived, Derived_Ru)
    SpecialBlockCreate(char)
    SkillsBuild(char)
    DerivedBuild(char)
    TraitsBuild(char)
    console.time('Abilitie test');
    BuildAbilities(char);
    InsertAbilities(char)
    Ability_AveilabilityCheck(char);
    console.timeEnd('Abilitie test');

    skillsNames = Object.keys(char.skills)

    while (char.Special_BonusPoints > 0) {
        Special_up(char, 'Agility');
    }

    for (let name_index = 0; name_index < skillsNames.length && char.prizeSkillsAveilible > 0; name_index++) {
        let skill = skillsNames[name_index];
        Choose_prize(char, skill, char.skillBlocks.get(skill).block);
    }

    LevelUp(char);
    FNV(char)


    // JSON.stringify(Array.from(char.PrizeSkills))
}
// prep()
let skill = 'Barter';
//to finish character
function toMaxLevel () {
    prep()
    if (char.level == 1) {
        return;
        // prep();
        
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
    // .sort((abilitie_a, abilitie_b) => { 
    //     if (abilitie_a.level == abilitie_b.level){
    //         return ((abilitie_a, abilitie_b) => 
    //             abilitie_a.RequirementsCheck?.(char) == (undefined || true) ? -1 : 1);
    //     }
    //     // if (abilitie_a.level < abilitie_b.level){
    //     //     return -1;
    //     // }
    //     // else if (abilitie_a.level > abilitie_b.level){
    //     //     return 1;
    //     // }
    // });

    let abilityGen = NextLevelAbility()
    let skillGen = NextSkill()
    let skill = skillGen.next().value;


    while (char.level < char.max_level) {
        debugger
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

toMaxLevel()

// FNV(char)

