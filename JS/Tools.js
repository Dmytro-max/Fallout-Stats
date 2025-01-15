const MAX_ITERATIONS = 831;
//to finish character
function toMaxLevel() {
  let Iteration = 0;

  debugger;
  if (char.level == 1) {
    return;
  }

  //Clearing list of abilities to be added from those that contain custom window with aditional actions like Intense Training
  LevelAbilities = Object.keys(char.Main_Abilities)
    .filter(
      (key) =>
        char.Main_Abilities[key].type == "levelup" &&
        char.Main_Abilities[key]?.Increased == undefined
    )
    // .sort((abilitie_a, abilitie_b) => char.Main_Abilities[abilitie_a].RequirementsCheck?.(char) == (undefined || true) ? -1 : 1 )
    .sort((a, b) => {
      let abilitie_a = char.Main_Abilities[a];
      let abilitie_b = char.Main_Abilities[b];
      if (
        abilitie_a.RequirementsCheck?.(char) == (undefined || true) &&
        abilitie_b.RequirementsCheck?.(char) == (undefined || true)
      ) {
        abilitie_a.level >= abilitie_b.level ? -1 : 1;
      } else if (
        abilitie_a.RequirementsCheck?.(char) == (undefined || true) &&
        abilitie_b.RequirementsCheck?.(char) != (undefined || true)
      ) {
        return -1;
      } else if (
        abilitie_a.RequirementsCheck?.(char) != (undefined || true) &&
        abilitie_b.RequirementsCheck?.(char) == (undefined || true)
      ) {
        return 1;
      }
    });

  let clickE = new Event("click");

  let abilityGen = NextLevelAbility();
  let skillGen = NextSkill();
  let skill = skillGen.next().value;
  let skillUp_Button = char.skillBlocks.get(skill).up;

  while (char.level < char.max_level) {
    debugger;
    if (char.IsPerkLevel()) {
      Ability_Add(char, abilityGen.next().value);
    }

    while (
      char.skillsByLevel[char.level - 1]["spent"] <
      char.skillsByLevel[char.level - 1]["points"]
    ) {
      if (char.skills[skill].value(char) == char.maxSkillValue) {
        skill = skillGen.next().value;
        skillUp_Button = char.skillBlocks.get(skill).up;
      }
      skillUp_Button.dispatchEvent(clickE);

      // Skill_up(skill, char);

      Iteration++;
      if (Iteration > MAX_ITERATIONS) {
        console.error("Max Iteration reached");
        return;
      }
    }
    CharLevelup.dispatchEvent(clickE);
    // LevelUp(char);
  }
  function* NextSkill() {
    for (let skill of skillsNames) {
      yield skill;
    }
  }

  function* NextLevelAbility() {
    for (let ability of LevelAbilities) {
      yield ability;
    }
  }
}

let skillsNames;
function FormPreparationtoUse() {
  fnvCreatorChoice.dispatchEvent(new Event("click"));

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
  CharacterForm.UpdateInterface(char);

  // JSON.stringify(Array.from(char.PrizeSkills))
}

// FormPreparationtoUse()
// toMaxLevel();

// FNV(char)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
