FormPreparetoUse();
let Special_ups = Special.querySelectorAll(".up");
let Special_downs = Special.querySelectorAll(".down");

let SkillBlocks = document.querySelectorAll(".Skill");
let TraitBlocks = document.querySelectorAll(".trait");

function FormPreparetoUse() {
  fnvCreatorChoice.dispatchEvent(new Event("click"));
}

const Specials_Quantity = 7;
function firstToSecondLevel() {
  let clickE = new Event("click");

  while (char.Special_BonusPoints > 0) {
    let randomSPECIAL = Special_ups[getRandomInt(Specials_Quantity)];
    randomSPECIAL.dispatchEvent(clickE);
  }
  //   let BonusPoints = 5;
  //   for (let i = 0; i < BonusPoints; i++) {
  //     char.SpecialBlocks.ups.get("Strength").dispatchEvent(clickE);
  //   }
  //   char.Special_BonusPoints > 0
  //     ? () => alert("SPECIAL points left to distribute")
  //     : null;
  //   char.SPECIAL["Strength"].value != 10
  //     ? () => alert("Strength should be 10")
  //     : null;

  skillsNames = Object.keys(char.skills);

  for (
    let name_index = 0;
    name_index < skillsNames.length && char.prizeSkillsAveilible > 0;
    name_index++
  ) {
    let skill = skillsNames[name_index];
    char.skillBlocks.get(skill).block.dispatchEvent(clickE);
  }

  for (let trait = 1; char.traits_Aveilible > 0; trait += 2) {
    TraitBlocks[trait].dispatchEvent(clickE);
  }

  CharLevelup.dispatchEvent(clickE);
}

// firstToSecondLevel();

function firstToSecondLevelTest() {
  let clickE = new Event("click");

  //   while (char.Special_BonusPoints > 0) {
  //     let randomSPECIAL = Special_ups[getRandomInt(Specials_Quantity)];
  //     randomSPECIAL.dispatchEvent(clickE);
  //   }
  let BonusPoints = 5;
  for (let i = 0; i < BonusPoints; i++) {
    char.SpecialBlocks.ups.get("Strength").dispatchEvent(clickE);
  }
  if (char.Special_BonusPoints > 0) {
    alert("SPECIAL points left to distribute");
  }
  if (char.SPECIAL["Strength"].value != 10) {
    alert("Strength should be 10");
  }

  skillsNames = Object.keys(char.skills);
  Prizes = 3;
  for (let name_index = 0; name_index < Prizes; name_index++) {
    let skill = skillsNames[name_index];
    char.skillBlocks.get(skill).block.dispatchEvent(clickE);
  }

  for (let name_index = 0; name_index < Prizes; name_index++) {
    let skill = skillsNames[name_index];
    if (!char.skillBlocks.get(skill).block.classList.contains("Checked")) {
      alert(skill + "should be chosen as Prize");
    }
  }

  for (let trait = 1; char.traits_Aveilible > 0; trait += 2) {
    TraitBlocks[trait].dispatchEvent(clickE);
  }

  CharLevelup.dispatchEvent(clickE);
}

firstToSecondLevelTest();
// toMaxLevel();
CharacterForm.UpdateInterface(char);
