//SPECIAL points up and down
// Specials_up = document.querySelectorAll('#SPECIAL .up')
// for (let sp of Specials_up.entries()) {
//     let name = sp[1].name;
//     sp[1].addEventListener("click", () => (Special_up(char, name), FNV(char)))
// }
// Specials_down = document.querySelectorAll('#SPECIAL .down')
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


let CharacterForm


//create
const fnvCreatorChoice = document.querySelector(".FNV")
fnvCreatorChoice.addEventListener("click", () => (
    char = new FNVChar(SPECIAL, SPECIAL_Ru, FNV_Abilities, FNV_Abilities_Ru, skills, skills_Ru, Traits, Traits_Ru, Derived, Derived_Ru),
    CharacterForm = new CharacterCreationForm(char),
    SpecialBlockCreate(char),
    SkillsBuild(char),
    DerivedBuild(char),
    TraitsBuild(char),
    console.time('Abilitie test'),
    CharacterForm.BuildAbilities(),
    InsertAbilities(char),
    CharacterForm.Abilities_AveilabilityCheck(),
    console.timeEnd('Abilitie test'),
    FNV(char)
));




