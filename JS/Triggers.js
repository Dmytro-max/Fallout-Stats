let skillPoints_AddInput = document.querySelector("#skillPoints_PerUp");
let skillPoints_RemoveInput = document.querySelector("#skillPoints_PerDown");
document
  .querySelector("#propSubmit")
  .addEventListener(
    "click",
    () => (char.skillPoints_perUp = skillPoints_AddInput.valueAsNumber)
  );
document
  .querySelector("#propSubmit")
  .addEventListener(
    "click",
    () => (char.skillPoints_perDown = skillPoints_RemoveInput.valueAsNumber)
  );

// let levelSelect = document.querySelector('#ImplantlevelChoose')
let CharacterlevelSelector = document.querySelector("#CharlevelChoose");

CharacterlevelSelector.addEventListener(
  "change",
  () => (LevelJump(char), CharacterForm.UpdateInterface(char))
);

let CharLevelup = document.querySelector("#CharLevelup.next");
let CharLeveldown = document.querySelector("#CharLeveldown.previous");

CharLevelup.addEventListener(
  "click",
  () => (LevelUp(char), CharacterForm.UpdateInterface(char))
);
CharLeveldown.addEventListener(
  "click",
  () => (LevelDown(char), CharacterForm.UpdateInterface(char))
);

let CharacterForm;

//create
const fnvCreatorChoice = document.querySelector("#FNV");
fnvCreatorChoice.addEventListener(
  "click",
  () => (
    (char = new FNVChar(
      SPECIAL,
      SPECIAL_Ru,
      FNV_Abilities,
      FNV_Abilities_Ru,
      skills,
      skills_Ru,
      Traits,
      Traits_Ru,
      Derived,
      Derived_Ru
    )),
    (CharacterForm = new CharacterCreationForm(char)),
    CharacterForm.SpecialBlockCreate(char),
    CharacterForm.SkillsBuild(char),
    CharacterForm.DerivedBuild(char),
    CharacterForm.TraitsBuild(char),
    console.time("Abilitie test"),
    CharacterForm.BuildAbilities(),
    CharacterForm.InsertAbilities(char),
    CharacterForm.UpdateInterface(char),
    // CharacterForm.Abilities_AveilabilityCheck(),
    console.timeEnd("Abilitie test"),
    check()
  )
);

let check = () => {
  console.log("Skillpoints rest: " + char.rest_skillPoints);
  // console.log("Skillpoints rest: " + char["rest_skillPoints"]);
  // console.log("char object: " + char);
  // console.log("char : ");
  // for (let key in char) {
  //   console.log(key + " : " + char[key]);
  // }
};
