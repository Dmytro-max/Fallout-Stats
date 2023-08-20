"use strict";
class FNVChar {
  constructor(Special, Special_Lan, Abilities, Abilities_Lan, Skills, Skills_Lan, Traits, Traits_Lan, Derived, Derived_Lan) {
    // document.body.style.backgroundImage = "url('Backgrounds/New Vegas.webp')";

    this.PrizeSkills = new Set();
    this.skillsByLevel = new Array(50);

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

  implants_added = 0
  Special_BonusPoints = 5
  prize_skillsNum = 3
  trait_n = 2
  total_b = 0
  skillbook_bonus = 3
  rest_point = 0

  level = 1
  max_level = 50
  level_reached = 1
  baseSpecial = 1

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

  SpecialBlocks = new Map();
  skillBlocks = new Map();
  skillBookBlocks = new Map();

  derivedBlocks = new Map();

  skillscount() {
    this.need_sp = 1300
    // for(i=0;i<this.skills;i++){
    //   this.need_sp-=this.skills_b[i]+this.skills[i].value
    // }
    for (let skill in this.skills) {
      this.need_sp -= this.skills[skill].value(this);
    }
  }
  SkillPointsCount() {
    return (((char.SPECIAL['Intelligence'].value) / 2) + 10 + this.skill_pointsBonus);
  }
  // SkillPointsCountMax(char){
  //     return Math.floor(char.inup_level * (10 + (char.SPECIAL['Intelligence'].value - 1) / 2) + 
  //     (10 + (char.SPECIAL['Intelligence'].value) / 2) * (char.max_level - 1 - char.inup_level) + char.rest_point);
  //   }

  Abilities_Availible = new Map();
  Abilities_Added = new Map();

  PerksbyLevel = new Map();
};
let char
