"use strict";
class FNVChar {
  constructor(Special, Special_Lan, Abilities, Abilities_Lan, Skills, Skills_Lan, Traits, Traits_Lan, Derived, Derived_Lan) {
    // document.body.style.backgroundImage = "url('Backgrounds/New Vegas.webp')";


    //filling character paraameters with merged parameter core and text of neaded language
    this.SPECIAL = {}
    for (let sp in Special) {
      this.SPECIAL[sp] = Object.assign({}, ...[Special[sp], Special_Lan[sp]]);
    }
    this.skills = {}
    for (let sk in Skills) {
      this.skills[sk] = Object.assign({}, ...[Skills[sk], Skills_Lan[sk]]);
    }

    this.Main_Abilities = {}
    for (let ab in Abilities) {
      this.Main_Abilities[ab] = Object.assign({}, ...[Abilities[ab], Abilities_Lan[ab]]);
    }
    this.traits = {}
    for (let key in Traits) {
      this.traits[key] = Object.assign({}, ...[Traits[key], Traits_Lan[key]]);
    }

    this.derived = {}
    for (let key in Derived) {
      this.derived[key] = Object.assign({}, ...[Derived[key], Derived_Lan[key]]);
    }

    this.skillsByLevel = new Array(50);
    for (let item = 0; item < this.skillsByLevel.length; item++) {
      this.skillsByLevel[item] = {
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

  WishedLevelUpAbilitiesAmount = 0
  WishedSpecialAbilitiesAmount = 0
  WishedImplantAbilitiesAmount = 0
  MaxWishedAbilitiesAmount = 25

  implants_added = 0
  Special_BonusPoints = 5
  prizeSkillsAveilible = 3
  traits_Aveilible = 2
  skillbook_bonus = 3
  skillPoints_perUp = 1
  skillPoints_perDown = 1
  rest_point = 0

  level = 1
  max_level = 50
  level_reached = 1
  baseSpecial = 1
  maxSpecialValue = 10//при взятті пупса при значенні 10 параметр не стане 11, але якщо понизити тимчасово показник, його дія стане помітною  
  maxSkillValue = 100
  prizeSkillBonus = 15

  skill_pointsBonus = 0
  levelsForPerk = 2
  LevelPerksCount() {
    return ((this.levelsForPerk * this.levelsForPerkChange) +
      (this.level - this.levelsForPerkChange) * this.levelsForPerkNew);
  }
  levelsForPerkChange = 0
  IsPerkLevel() {
    if (this.levelsForPerkChange == 0) {
      return (this.level % this.levelsForPerk) == 0;
    }
    else {//the rest of levels after chaging frequency of geting new ability, before getting one + levels
      // after chaging frequency of geting new ability ||(in case chaging frequency happened not with new level ability)
      return ((this.levelsForPerk * this.levelsForPerkChange) % this.levelsForPerk +
        (this.level - this.levelsForPerkChange)) % this.levelsForPerkNew == 0;
    }
  }

  //Check quality of work
  Abilitie_IsAvailible(perk, key) {
    let Check = (perk, key) => {
      if (perk.RequirementsCheck?.(this) == false || !this.IsPerkLevel() && perk.type == 'levelup' || (this.IsPerkLevel() && perk.type == 'levelup' &&
        (perk.level > this.level || (this.PerksbyLevel.has(this.level) ? this.PerksbyLevel.get(this.level)['levelup']?.size > 0 : false)))
      ) {
        return false
      }
      else {
        return true
      }
    }

    if (!this.PerksbyLevel.has(this.level) || !this.PerksbyLevel.get(this.level)['uplevel'] ||
      (this.PerksbyLevel.has(this.level) ? this.PerksbyLevel.get(this.level)[perk.type].has(key) : false)//if no perks were added this level or there is no levelup perks in list of added this level or IF this perk were added this level
    ) {
      Check(perk, key);
    }
    else {
      av_block.classList.add('unAvailible');
    }
  }
  Abilitie_IsRemovale(perk, key) {
    if (!(this.PerksbyLevel.has(this.level) ? this.PerksbyLevel.get(this.level)[perk.type]?.has(key) : false)) {
      return false
    }
    else {
      return true
    }
  }

  SpecialBlocks = new Map();
  skillBlocks = new Map();
  skillBookBlocks = new Map();
  TraitBlocks = new Map();

  derivedBlocks = new Map();

  neededSkillsCount() {
    let need_sp = (Object.keys(this.skills)).length * this.maxSkillValue;

    for (let skill in this.skills) {
      need_sp -= this.skillsByLevel[this.level - 1][skill]
    }
    return need_sp;
  }
  SkillPointsCount() {
    return (((this.SPECIAL['Intelligence'].value) / 2) + 10 + this.skill_pointsBonus);
  }
  SkillPointsCountMax() {
    return Math.floor(this.inup_level * (10 + (this.SPECIAL['Intelligence'].value - 1) / 2) +
      (10 + (this.SPECIAL['Intelligence'].value) / 2) * (this.max_level - 1 - this.inup_level) + this.rest_point);
  }

  Abilities_Availible = new Map();
  Abilities_Added = new Map();

  PerksbyLevel = new Map();
  DesiredAbilities = new Map();

  ChosenPrizeSkills = new Set();
  chosenTraits = new Set();


  //CHARACTER DEVELOPING METHODS
  Choose_PrizeSkill(name) {
    let prizeBonus = this.prizeSkillBonus;
    elem = this.skillBlocks.get(name).block;

    if (this.level == 1) {
      if (!this.ChosenPrizeSkills.has(name) && (100 - this.skills[name].value(this)) >= prizeBonus) {
        if (this.prizeSkillsAveilible > 0) {
          this.prizeSkillsAveilible -= 1;
          this.skills[name].bonus += prizeBonus;
          this.skillsByLevel[this.level - 1][name] += prizeBonus;
          this.ChosenPrizeSkills.add(name);
        }
      }
      else {
        if (this.skills[name].bonus - prizeBonus >= 0) {
          this.prizeSkillsAveilible += 1;
          this.skills[name].bonus -= prizeBonus;
          this.skillsByLevel[this.level - 1][name] -= prizeBonus;
          this.ChosenPrizeSkills.delete(name);
        }
      }
    }
    update_ChoosenPrizeSkills(this);//To remove!
  }

};

let char = {
  key: 'value',
}
