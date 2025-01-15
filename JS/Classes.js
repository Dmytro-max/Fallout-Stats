"use strict";
class FNVChar {
  constructor(
    Special,
    Special_Lan,
    Abilities,
    Abilities_Lan,
    Skills,
    Skills_Lan,
    Traits,
    Traits_Lan,
    Derived,
    Derived_Lan
  ) {
    // document.body.style.backgroundImage = "url('Backgrounds/New Vegas.webp')";

    //filling character paraameters with merged parameter core and text of neaded language
    this.SPECIAL = {};
    for (let sp in Special) {
      this.SPECIAL[sp] = Object.assign({}, ...[Special[sp], Special_Lan[sp]]);
    }
    this.skills = {};
    for (let sk in Skills) {
      this.skills[sk] = Object.assign({}, ...[Skills[sk], Skills_Lan[sk]]);
    }
    this.traits = {};
    for (let key in Traits) {
      this.traits[key] = Object.assign({}, ...[Traits[key], Traits_Lan[key]]);
    }

    this.derived = {};
    for (let key in Derived) {
      this.derived[key] = Object.assign(
        {},
        ...[Derived[key], Derived_Lan[key]]
      );
    }

    this.Main_Abilities = {};
    for (let ab in Abilities) {
      this.Main_Abilities[ab] = Object.assign(
        {},
        ...[Abilities[ab], Abilities_Lan[ab]]
      );
    }

    this.skillsByLevel = new Array(50);
    for (let level = 0; level < this.skillsByLevel.length; level++) {
      this.skillsByLevel[level] = {
        spent: 0,
        points: 0,
        Barter: 0,
        E_W: 0,
        Explosives: 0,
        Guns: 0,
        Lockpick: 0,
        Medicine: 0,
        M_W: 0,
        Repair: 0,
        Science: 0,
        Sneak: 0,
        Speech: 0,
        Survival: 0,
        Unarmed: 0,
        skillbook_bonus: 3,
      };
    }
  }

  WishedLevelUpAbilitiesAmount = 0;
  WishedSpecialAbilitiesAmount = 0;
  WishedImplantAbilitiesAmount = 0;
  MaxWishedAbilitiesAmount = 25;

  implants_added = 0;
  Special_BonusPoints = 5;
  prizeSkillsAveilible = 3;
  traits_Aveilible = 2;
  skillbook_bonus = 3;
  skillPoints_perUp = 1;
  skillPoints_perDown = 1;
  rest_skillPoints = 0;

  level = 1;
  max_level = 50;
  level_reached = 1;
  baseSpecial = 1;
  maxSpecialValue = 10; //при взятті пупса при значенні 10 параметр не стане 11, але якщо понизити тимчасово показник, його дія стане помітною
  maxSkillValue = 100;
  prizeSkillBonus = 15;

  skill_pointsBonus = 0;
  levelsForPerk = 2;
  //in Fallout 2 there is a trait that changes number of levels after which you get a new ability,
  // and since there is also ability "Mutation" which allows you to change one of chosen traits to another,
  // number of levels after which you get a new ability can be changed dirong the game
  LevelPerksCount() {
    return (
      this.levelsForPerk * this.levelsForPerkChange_level +
      (this.level - this.levelsForPerkChange_level) * this.levelsForPerkNew
    );
  }
  levelsForPerkChange_level = 0;
  IsPerkLevel() {
    if (this.levelsForPerkChange_level == 0) {
      return this.level % this.levelsForPerk == 0;
    } else {
      //the rest of levels after chaging frequency of geting new ability, before getting one + levels
      // after chaging frequency of geting new ability ||(in case chaging frequency happened not with new level ability)
      return (
        (((this.levelsForPerk * this.levelsForPerkChange_level) %
          this.levelsForPerk) +
          (this.level - this.levelsForPerkChange_level)) %
          this.levelsForPerkNew ==
        0
      );
    }
  }

  //Check quality of work
  Abilitie_IsAvailible(perk, key) {
    let first =
      // !this.PerksbyLevel.has(this.level) &&
      !this.PerksbyLevel.get(this.level)?.["levelup"].size &&
      perk.type == "levelup" &&
      perk.level <= this.level &&
      perk.RequirementsCheck?.(this) != false;
    let second =
      perk.type != "levelup" && perk.RequirementsCheck?.(this) != false;

    if (first || second) {
      return true;
    } else {
      return false;
    }
  }
  Abilitie_IsRemovable(perk, key) {
    return this.PerksbyLevel.has(this.level)
      ? this.PerksbyLevel.get(this.level)[perk.type]?.has(key)
      : false;
  }

  SpecialBlocks = new Map();
  skillBlocks = new Map();
  skillBookBlocks = new Map();
  TraitBlocks = new Map();

  derivedBlocks = new Map();

  neededSkillsCount() {
    // debugger;
    let need_sp = Object.keys(this.skills).length * this.maxSkillValue;

    for (let skill in this.skills) {
      need_sp -= this.skills[skill].bonus;
      // console.log("Skill: " + skill);
    }
    // console.log("Needed skill_points: " + need_sp);
    return need_sp;
  }
  baseSkillPoints_eachLevel = 10;
  SkillPointsCount() {
    return (
      this.SPECIAL["Intelligence"].value / 2 +
      this.baseSkillPoints_eachLevel +
      this.skill_pointsBonus
    );
  }
  // inup_level = 1
  // SkillPointsCountMax() {
  //   return Math.floor(this.inup_level * (this.baseSkillPoints_eachLevel + (this.SPECIAL['Intelligence'].value - 1) / 2) +
  //     (this.baseSkillPoints_eachLevel + (this.SPECIAL['Intelligence'].value) / 2) * (this.max_level - 1 - this.inup_level) + this.rest_skillPoints);
  // }

  PerksbyLevel = new Map();
  DesiredAbilities = new Map();

  ChosenPrizeSkills = new Set();
  chosenTraits = new Set();

  //CHARACTER DEVELOPING METHODS
  Choose_PrizeSkill(name) {
    let prizeBonus = this.prizeSkillBonus;
    // elem = this.skillBlocks.get(name).block;

    if (this.level == 1) {
      if (
        !this.ChosenPrizeSkills.has(name) &&
        this.maxSkillValue >= this.skills[name].value(this) + prizeBonus
      ) {
        if (this.prizeSkillsAveilible > 0) {
          this.prizeSkillsAveilible -= 1;
          this.skills[name].bonus += prizeBonus;
          this.skillsByLevel[this.level - 1][name] += prizeBonus;
          this.ChosenPrizeSkills.add(name);
        }
      } else {
        if (this.skills[name].bonus - prizeBonus >= 0) {
          this.prizeSkillsAveilible += 1;
          this.skills[name].bonus -= prizeBonus;
          this.skillsByLevel[this.level - 1][name] -= prizeBonus;
          this.ChosenPrizeSkills.delete(name);
        }
      }
    }
    update_ChoosenPrizeSkills(this); //To remove!
  }
}

let char = {
  key: "value",
};
