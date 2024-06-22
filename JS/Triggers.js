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

    while (char.Special_BonusPoints > 0) {
        Special_up(char, 'Agility');
    }
    Choose_prize(char, 'Barter', document.querySelector('.main#Barter'))
    Choose_prize(char, 'M_W', document.querySelector('.main#M_W'))
    Choose_prize(char, 'E_W', document.querySelector('.main#E_W'))

    LevelUp(char);
    FNV(char)

    // JSON.stringify(Array.from(char.PrizeSkills))
}
// prep()
//arr = [];
let skill = 'Barter';
//to finish
function toMaxLevel () {
    while (char.level < char.max_level) {
        let keys = char.Main_Abilities.keys()
        let abilities = new Array(25)
        let amount = 0
        for (let set of keys <= char.level && amount >= 24) {
            if (char.Main_Abilities[set].type == 'levelup' && char.Main_Abilities[set].RequirementsCheck?.(char) == undefined) {
                abilities[amount] = char.Main_Abilities[set];
                amount += 1;
            }
        }
        amount = 0

        while (char.skillsByLevel[char.level - 1]['spent'] < Math.floor(char.SkillPointsCount(char))) {
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
            Ability_Add(char, abilities[amount])
            amount += 1
        }
        LevelUp(char);
    }
}

// FNV(char)

//toMaxLevel()

