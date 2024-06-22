FNV_Abilities = {
  'Friend of the Night': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Perception.value >= 6 && char.skills['Sneak'].value(char) >= 30);
    },
    type: 'levelup',
  },
  'Intense Training': {
    level: 2,
    level_taken: null,
    rangs: 10,
    rang: 0,
    requirements_text: '',
    Increased: [],
    points: 1,
    spent: 0,
    SPECIAL: {
      "Strength": 5,
      "Perception": 5,
      "Endurance": 5,
      "Charisma": 5,
      "Intelligence": 5,
      "Agility": 10,
      "Luck": 5,
    },
    SpecialWindow: {},
    Add(char) {
      let raised = this.Increased[this.rang]
      char.SPECIAL[raised].value = this.SPECIAL[raised]
      this.points = this.spent;
      this.spent = 0;
    },
    Remove() {
      let raised = this.Increased[this.rang - 1]
      char.SPECIAL[raised].value -= 1
      this.Increased.pop();
    },
    UnWrap(char) {
      for (key in char.SPECIAL) {
        this.SPECIAL[key] = char.SPECIAL[key].value;
        this.SpecialWindow['values'].get(key).textContent = this.SPECIAL[key]
        if (this.SPECIAL[key] == 10) {
          this.SpecialWindow['ups'].get(key).disabled = true;
        }
        else {
          this.SpecialWindow['ups'].get(key).disabled = false;
        }

        if (this.SPECIAL[key] > char.baseSpecial) {
          this.SpecialWindow['downs'].get(key).disabled = false;
        }
        else {
          this.SpecialWindow['downs'].get(key).disabled = true;
        }
      }
      this.SpecialWindow['article'].textContent = `SPECIAL ${this.points}`;
    },
    description() {
      return this.Description;
    },
    *RangsAdded() {
      let rangs = '';
      for (let i = 0; i < this.rang; i++) {
        yield this.Increased[i];
      }
    },
    type: 'levelup',
  },
  'Light Touch': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Agility.value >= 6 && char.skills.Repair.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Junk Rounds': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Luck.value >= 6 && char.skills.Repair.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Hunter': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 30);
    },
    type: 'levelup',
  },
  'Swift Learner': {
    level: 2,
    level_taken: null,
    rangs: 3,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 4);
    },
    type: 'levelup',
  },
  'Old World Gourmet': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 6 && char.skills.Survival.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Heave, Ho!': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Strength.value >= 5 && char.skills.Explosives.value(char) >= 30);
    },
    type: 'levelup',
  },
  'In Shining Armor': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Repair.value(char) >= 20 && char.skills.Science.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Retention': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 5);
    },
    type: 'levelup',
  },
  'Black Widow/ Lady Killer': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    type: 'levelup',
  },
  'Cherchez La Femme/ Confirmed Bachelor': {
    level: 2,
    level_taken: null,
    rangs: 1,
    rang: 0,
    type: 'levelup',
  },
  'Run \'n Gun': {
    level: 4,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.E_W.value(char) >= 45 && char.skills.Guns.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Rad Child': {
    level: 4,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Cannibal': {
    level: 4,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Educated': {
    level: 4,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 4);
    },
    Add(char) {
      char.skill_pointsBonus += 2;
    },
    Remove() {
      char.skill_pointsBonus -= 2;
    },
    type: 'levelup',
  },
  'Comprehension': {
    level: 4,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 4);
    },
    Add(char) {
      char.skillbook_bonus = 4;
      char.skillsByLevel[char.level - 1]['skillbook_bonus'] = 4;
    },
    Remove() {
      char.skillbook_bonus = 3;
      char.skillsByLevel[char.level - 1]['skillbook_bonus'] = 3;
    },
    type: 'levelup',
  },
  'Travel Light': {
    level: 4,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Entomologist': {
    level: 4,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 6 && char.skills.Survival.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Ferocious Loyalty': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Charisma.value >= 6);
    },
    type: 'levelup',
  },
  'Mad Bomber': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Repair.value(char) >= 45 && char.skills.Explosives.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Shotgun Surgeon': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Guns.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Gunslinger': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Fortune Finder': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Luck.value >= 5);
    },
    type: 'levelup',
  },
  'Bloody Mess': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'The Professional': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Sneak.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Vigilant Recycler': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Science.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Hand Loader': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Repair.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Lead Belly': {
    level: 6,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 5 || char.skills.Survival.value(char) >= 40);
    },
    type: 'levelup',
  },
  'Toughness': {
    level: 6,
    level_taken: null,
    rangs: 2,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 5);
    },
    Add(char) {
      char.derived['dt'].base += 3;
    },
    Remove() {
      char.derived['dt'].base -= 3;
    },
    type: 'levelup',
  },
  'Demolition Expert': {
    level: 6,
    level_taken: null,
    rangs: 3,
    rang: 0,
    RequirementsCheck(char) {
      return ((char.skills.Explosives.value(char) >= 50));
    },
    type: 'levelup',
  },
  'Pack Rat': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 5 && char.skills.Barter.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Quick Draw': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Agility.value >= 5);
    },
    type: 'levelup',
  },
  'Home on the Range': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Sneering Imperialist': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Stonewall': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Strength.value >= 6 && char.SPECIAL.Endurance.value >= 6);
    },
    type: 'levelup',
  },
  'Cowboy': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Guns.value(char) >= 45 && char.skills.M_W.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Commando': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Strong Back': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Strength.value >= 5 && char.SPECIAL.Endurance.value >= 5);
    },
    Add(char) {
      char.derived['mw'].base += 50;
    },
    Remove() {
      char.derived['mw'].base -= 50;
    },
    type: 'levelup',
  },
  'Tribal Wisdom': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 70);
    },
    Add(char) {
      char.derived['pr'].base += 25;
    },
    Remove() {
      char.derived['pr'].base -= 25;
    },
    type: 'levelup',
  },
  'Grunt': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Guns.value(char) >= 45 && char.skills.Explosives.value(char) >= 20);
    },
    type: 'levelup',
  },
  'Living Anatomy': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Medicine.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Rad Resistance': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 5 && char.skills.Survival.value(char) >= 40);
    },
    Add(char) {
      char.derived['rr'].base += 25;
    },
    Remove() {
      char.derived['rr'].base -= 25;
    },
    type: 'levelup',
  },
  'Terrifying Presence': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Speech.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Super Slam!': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Strength.value >= 6 && char.skills.M_W.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Scrounger': {
    level: 8,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Luck.value >= 5);
    },
    type: 'levelup',
  },
  'Fight the Power': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Nerd Rage': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 5 && char.skills.Science.value(char) >= 50);
    },
    type: 'levelup',
  },
  'And Stay Back': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Guns.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Animal Friend': {
    level: 10,
    level_taken: null,
    rangs: 2,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Charisma.value >= 6 && char.skills.Survival.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Here and Now': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Math Wrath': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Science.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Miss Fortune': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Luck.value >= 6);
    },
    type: 'levelup',
  },
  'Night Person': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Mister Sandman': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Sneak.value(char) >= 60);
    },
    type: 'levelup',
  },
  'Plasma Spaz': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.E_W.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Mysterious Stranger': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Luck.value >= 6);
    },
    type: 'levelup',
  },
  'Finesse': {
    level: 10,
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
    Add(char) {
      char.derived['cs'].base += 5;
    },
    Remove() {
      char.derived['cs'].base -= 5;
    },
  },
  'Alertness': {
    level: 12,
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Perception.value >= 9);
    },
    type: 'levelup',
  },
  'Silent Running': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Agility.value >= 6 && char.skills.Sneak.value(char) >= 50);
    },
    type: 'levelup',
  },
  'Long Haul': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 6 && char.skills.Barter.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Splash Damage': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Explosives.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Hobbler': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Perception.value >= 7);
    },
    type: 'levelup',
  },
  'Hit the Deck!': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Explosives.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Unstoppable Force': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Strength.value >= 7 && char.skills.M_W.value(char) >= 90);
    },
    type: 'levelup',
  },
  'Ghastly Scavenger': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Cannibal'].rang > 0);
    },
    type: 'levelup',
  },
  'Pyromaniac': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Explosives.value(char) >= 60);
    },
    type: 'levelup',
  },
  'Piercing Strike': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Unarmed.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Robotics Expert': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Science.value(char) >= 50);
    },
    type: 'levelup',
  },
  'Sniper': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Perception.value >= 6);
    },
    type: 'levelup',
  },
  'Heavyweight': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 7);
    },
    type: 'levelup',
  },
  'Fast Metabolism': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Life Giver': {
    level: '12',
    level_taken: null,
    rangs: 1,
    rang: 0,
    Add(char) {
      char.derived['hp'].base += 25;
    },
    Remove() {
      char.derived['hp'].base -= 25;
    },
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 6);
    },
    type: 'levelup',
  },
  'Adamantium Skeleton': {
    level: '14',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Purifier': {
    level: '14',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Light Step': {
    level: '14',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Agility.value >= 6);
    },
    type: 'levelup',
  },
  'Jury Rigging': {
    level: '14',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Repair.value(char) >= 90);
    },
    type: 'levelup',
  },
  'Chemist': {
    level: '14',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Medicine.value(char) >= 60);
    },
    type: 'levelup',
  },
  'Center of Mass': {
    level: '14',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Guns.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Action Boy/Action Girl': {
    level: '16',
    level_taken: null,
    rangs: 2,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Agility.value >= 6);
    },
    Add(char) {
      char.derived['ap'].base += 15;
    },
    Remove() {
      char.derived['ap'].base -= 15;
    },
    type: 'levelup',
  },
  'Better Criticals': {
    level: '16',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Luck.value >= 6);
    },
    type: 'levelup',
  },
  'Weapon Handling': {
    level: '16',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Strength.value < 10);
    },
    type: 'levelup',
  },
  'Tag!': {
    level: '16',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    Skills: {},
    Add(char) {
      // char.prize_skillsNum += 1;
    },
    Remove() {
      char.prize_skillsNum -= 1;
      char.PrizeSkills.pop();
    },
    Increased: '',
    points: 1,
    SkillWindow: {},
    Add(char) {
      char.skills[this.Increased].bonus += 15;
      char.skillBlocks.get(this.Increased)['block'].classList.replace("unChecked", "Checked");
    },
    Remove() {
      char.skills[this.Increased].bonus -= 15;
      char.skillBlocks.get(this.Increased)['block'].classList.replace("Checked", "unChecked");
      this.points = 1;
    },
    UnWrap(char) {
      for (key in char.skills) {
        this.SkillWindow['values'].get(key).textContent = char.skills[key].value(char);
      }
      for (skill of char.PrizeSkills) {
        this.SkillWindow['blocks'].get(skill).classList.replace("unChecked", "Checked");
        this.SkillWindow['blocks'].get(skill).disabled = true;
      }
      this.SkillWindow['article'].textContent = `Skills ${this.points}`;
    },
    description() {
      return this.Description;
    },
    type: 'levelup',
  },
  'Meltdown': {
    level: '16',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.E_W.value(char) >= 90);
    },
    type: 'levelup',
  },
  'Chem Resistant': {
    level: '16',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Medicine.value(char) >= 60);
    },
    type: 'levelup',
  },
  'Infiltrator': {
    level: '18',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Perception.value >= 7 && char.skills.Lockpick.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Walker Instinct': {
    level: '18',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 50);
    },
    type: 'levelup',
  },
  'Concentrated Fire': {
    level: '18',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.E_W.value(char) >= 60 && char.skills.Guns.value(char) >= 60);
    },
    type: 'levelup',
  },
  'Paralyzing Palm': {
    level: '18',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Unarmed.value(char) >= 45);
    },
    type: 'levelup',
  },
  'Computer Whiz': {
    level: '18',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 7 && char.skills.Science.value(char) >= 70);
    },
    type: 'levelup',
  },
  'Atomic!': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 6);
    },
    type: 'levelup',
  },
  'Explorer': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Ninja': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.M_W.value(char) >= 80 && char.skills.Sneak.value(char) >= 80);
    },
    type: 'levelup',
  },
  'Eye for Eye': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Them\'s Good Eatin': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 55);
    },
    type: 'levelup',
  },
  'Mile in Their Shoes': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 25);
    },
    type: 'levelup',
  },
  'Grim Reaper\'s Sprint': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Solar Powered': {
    level: '20',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 7);
    },
    type: 'levelup',
  },
  'Spray and Pray': {
    level: '22',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Laser Commander': {
    level: '22',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.E_W.value(char) >= 90);
    },
    type: 'levelup',
  },
  'Voracious Reader': {
    level: '22',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 7);
    },
    type: 'levelup',
  },
  'Irradiated Beauty': {
    level: '22',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 8);
    },
    type: 'levelup',
  },
  'Nuka Chemist': {
    level: '22',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 90);
    },
    type: 'levelup',
  },
  'Slayer': {
    level: '24',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Agility.value >= 7 && char.skills.Unarmed.value(char) >= 90);
    },
    type: 'levelup',
  },
  'Lessons Learned': {
    level: '26',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Intelligence.value >= 6);
    },
    type: 'levelup',
  },
  'Nerves of Steel': {
    level: '26',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Agility.value >= 7);
    },
    type: 'levelup',
  },
  'Tunnel Runner': {
    level: '26',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Agility.value >= 8);
    },
    type: 'levelup',
  },
  'Roughin\' It': {
    level: '28',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.skills.Survival.value(char) >= 100);
    },
    type: 'levelup',
  },
  'Rad Absorption': {
    level: '28',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 7);
    },
    type: 'levelup',
  },
  'Burden to Bear': {
    level: '30',
    level_taken: null,
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Strength.value >= 6 && char.SPECIAL.Endurance.value >= 6);
    },
    Add(char) {
      char.derived['mw'].base += 50;
    },
    Remove() {
      char.derived['mw'].base -= 50;
    },
    type: 'levelup',
  },
  'Implant GRX': {
    level: '30',
    level_taken: null,
    rangs: 2,
    rang: 0,
    RequirementsCheck(char) {
      return (char.SPECIAL.Endurance.value >= 8);
    },
    type: 'levelup',
  },
  'Broad Daylight': {
    level: '36',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Certified Tech': {
    level: '40',
    level_taken: null,
    rangs: 1,
    rang: 0,
    requirements_text: '',
    type: 'levelup',
  },
  'Just Lucky I\'m Alive': {
    level: '50',
    level_taken: null,
    rangs: 1,
    rang: 0,
    // RequirementsCheck(char) {
    //   return (char.Main_Abilities['Неужели ещё жив'].rang == 0);
    // },
    type: 'levelup',
  },
  'Thought You Died': {
    level: '50',
    level_taken: null,
    rangs: 1,
    rang: 0,
    // RequirementsCheck(char) {
    //   return (char.Main_Abilities['Выжить — это счастье'].rang == 0);
    // },
    type: 'levelup',
  },
  'Ain\'t Like That Now': {
    level: '50',
    level_taken: null,
    rangs: 1,
    rang: 0,
    // RequirementsCheck(char) {
    //   return (char.Main_Abilities['Выжить — это счастье'].rang == 0);
    // },
    type: 'levelup',
  },

  'Strength Implant': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
    RequirementsCheck(char) {
      return char.SPECIAL['Strength'].value < 10;
    },
    Add(char) {
      char.SPECIAL['Strength'].value += 1;
    },
    Remove() {
      char.SPECIAL['Strength'].value -= 1;
    },
    level_taken: null,
  },
  'Perception Implant': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
    RequirementsCheck(char) {
      return char.SPECIAL['Perception'].value < 10;
    },
    Add(char) {
      char.SPECIAL['Perception'].value += 1;
    },
    Remove() {
      char.SPECIAL['Perception'].value -= 1;
    },
    level_taken: null,
  },
  'Endurance Implant': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
    RequirementsCheck(char) {
      return char.SPECIAL['Endurance'].value < 10;
    },
    Add(char) {
      char.SPECIAL['Endurance'].value += 1;
    },
    Remove() {
      char.SPECIAL['Endurance'].value -= 1;
    },
    level_taken: null,
  },
  'Charisma Implant': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
    RequirementsCheck(char) {
      return char.SPECIAL['Charisma'].value < 10;
    },
    Add(char) {
      char.SPECIAL['Charisma'].value += 1;
    },
    Remove() {
      char.SPECIAL['Charisma'].value -= 1;
    },
    level_taken: null,
  },
  'Intelligence Implant': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
    RequirementsCheck(char) {
      return char.SPECIAL['Intelligence'].value < 10;
    },
    Add(char,...rest) {
      char.SPECIAL['Intelligence'].value += 1;
      console.info('level:'+char.level)
      console.info(rest)
    },
    Remove() {
      char.SPECIAL['Intelligence'].value -= 1;
    },
    level_taken: null,
  },
  'Agility Implant': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
    RequirementsCheck(char) {
      return char.SPECIAL['Agility'].value < 10;
    },
    Add(char) {
      char.SPECIAL['Agility'].value += 1;
    },
    Remove() {
      char.SPECIAL['Agility'].value -= 1;
    },
  },
  'Luck Implant': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
    RequirementsCheck(char) {
      return char.SPECIAL['Luck'].value < 10;
    },
    Add(char) {
      char.SPECIAL['Luck'].value += 1;
    },
    Remove() {
      char.SPECIAL['Luck'].value -= 1;
    },
  },
  'Monocyte Breeder': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
  },
  'Sub-Dermal Armor': {
    rangs: 1,
    rang: 0,
    type: 'implant',
    level_taken: null,
  },

  'Coin Operator': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Ghost Hunter': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Sierra Madre Martini': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Elijah\'s Last Words': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Elijah\'s Ramblings'].rang == 0);
    },
    type: 'special',
    level_taken: null,
  },
  'Elijah\'s Ramblings': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Elijah\'s Last Words'].rang == 0);
    },
    type: 'special',
    level_taken: null,
  },
  'Brainless': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Big Brained'].rang == 0);
    },
    Add(char) {
      char.derived['dr'].mod += 5;
    },
    Remove() {
      char.derived['dr'].mod -= 5;
    },
    type: 'special',
    level_taken: null,
  },
  'Heartless': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Cardiac Arrest'].rang == 0);
    },
    Add(char) {
      char.derived['pr'].base += 100;
    },
    Remove() {
      char.derived['pr'].base -= 100;
    },
    type: 'special',
    level_taken: null,
  },
  'Spineless': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Reinforced Spine'].rang == 0);
    },
    Add(char) {
      char.derived['dr'].base += 1;
    },
    Remove() {
      char.derived['dr'].base -= 1;
    },
    type: 'special',
    level_taken: null,
  },
  'Big Brained': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Brainless'].rang == 0);
    },
    Add(char) {
      char.derived['dr'].mod += 10;
    },
    Remove() {
      char.derived['dr'].mod -= 10;
    },
    type: 'special',
    level_taken: null,
  },
  'Cardiac Arrest': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Heartless'].rang == 0);
    },
    Add(char) {
      char.derived['pr'].base += 50;
    },
    Remove() {
      char.derived['pr'].base -= 50;
    },
    type: 'special',
    level_taken: null,
  },
  'Reinforced Spine': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Spineless'].rang == 0);
    },
    Add(char) {
      char.derived['dr'].base += 2;
    },
    Remove() {
      char.derived['dr'].base -= 2;
    },
    type: 'special',
    level_taken: null,
  },
  'DNAgent': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'DNAvenger': {
    rangs: 3,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Implant C-13': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Implant M-5': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Implant Y-3': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Implant Y-7': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'The Bear-Slayer': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
    Increased: [],
    points: 1,
    spent: 0,
    SPECIAL: {
      "Strength": 5,
      "Perception": 5,
      "Endurance": 5,
      "Charisma": 5,
      "Intelligence": 5,
      "Agility": 10,
      "Luck": 5,
    },
    SpecialWindow: {},
    Add(char) {
      let raised = this.Increased[this.rang]
      char.SPECIAL[raised].value = this.SPECIAL[raised]
      this.points = this.spent;
      this.spent = 0;
    },
    Remove() {
      let raised = this.Increased[this.rang - 1]
      char.SPECIAL[raised].value -= 1
      this.Increased.pop();
    },
    UnWrap(char) {
      for (key in char.SPECIAL) {
        this.SPECIAL[key] = char.SPECIAL[key].value;
        this.SpecialWindow['values'].get(key).textContent = this.SPECIAL[key]
        if (this.SPECIAL[key] == 10) {
          this.SpecialWindow['ups'].get(key).disabled = true;
        }
        else {
          this.SpecialWindow['ups'].get(key).disabled = false;
        }

        if (this.SPECIAL[key] > char.baseSpecial) {
          this.SpecialWindow['downs'].get(key).disabled = false;
        }
        else {
          this.SpecialWindow['downs'].get(key).disabled = true;
        }
      }
      this.SpecialWindow['article'].textContent = `SPECIAL ${this.points}`;
    },
  },
  'Scourge of the East': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
    Increased: [],
    points: 1,
    spent: 0,
    SPECIAL: {
      "Strength": 5,
      "Perception": 5,
      "Endurance": 5,
      "Charisma": 5,
      "Intelligence": 5,
      "Agility": 10,
      "Luck": 5,
    },
    SpecialWindow: {},
    Add(char) {
      let raised = this.Increased[this.rang]
      char.SPECIAL[raised].value = this.SPECIAL[raised]
      this.points = this.spent;
      this.spent = 0;
    },
    Remove() {
      let raised = this.Increased[this.rang - 1]
      char.SPECIAL[raised].value -= 1
      this.Increased.pop();
    },
    UnWrap(char) {
      for (key in char.SPECIAL) {
        this.SPECIAL[key] = char.SPECIAL[key].value;
        this.SpecialWindow['values'].get(key).textContent = this.SPECIAL[key]
        if (this.SPECIAL[key] == 10) {
          this.SpecialWindow['ups'].get(key).disabled = true;
        }
        else {
          this.SpecialWindow['ups'].get(key).disabled = false;
        }

        if (this.SPECIAL[key] > char.baseSpecial) {
          this.SpecialWindow['downs'].get(key).disabled = false;
        }
        else {
          this.SpecialWindow['downs'].get(key).disabled = true;
        }
      }
      this.SpecialWindow['article'].textContent = `SPECIAL ${this.points}`;
    },
  },
  'Dead Man\'s Burden': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Divide Survivor'].rang == 0 && char.Main_Abilities['The Bear-Slayer'].rang == 0 && char.Main_Abilities['Scourge of the East'].rang == 0);
    },
    type: 'special',
    level_taken: null,
    Increased: [],
    points: 1,
    spent: 0,
    SPECIAL: {
      "Strength": 5,
      "Perception": 5,
      "Endurance": 5,
      "Charisma": 5,
      "Intelligence": 5,
      "Agility": 10,
      "Luck": 5,
    },
    SpecialWindow: {},
    Add(char) {
      let raised = this.Increased[this.rang]
      char.SPECIAL[raised].value = this.SPECIAL[raised]
      this.points = this.spent;
      this.spent = 0;
    },
    Remove() {
      let raised = this.Increased[this.rang - 1]
      char.SPECIAL[raised].value -= 1
      this.Increased.pop();
    },
    UnWrap(char) {
      for (key in char.SPECIAL) {
        this.SPECIAL[key] = char.SPECIAL[key].value;
        this.SpecialWindow['values'].get(key).textContent = this.SPECIAL[key]
        if (this.SPECIAL[key] == 10) {
          this.SpecialWindow['ups'].get(key).disabled = true;
        }
        else {
          this.SpecialWindow['ups'].get(key).disabled = false;
        }

        if (this.SPECIAL[key] > char.baseSpecial) {
          this.SpecialWindow['downs'].get(key).disabled = false;
        }
        else {
          this.SpecialWindow['downs'].get(key).disabled = true;
        }
      }
      this.SpecialWindow['article'].textContent = `SPECIAL ${this.points}`;
    },
  },
  'Divide Survivor': {
    rangs: 1,
    rang: 0,
    RequirementsCheck(char) {
      return (char.Main_Abilities['Dead Man\'s Burden'].rang == 0 && char.Main_Abilities['The Bear-Slayer'].rang == 0 && char.Main_Abilities['Scourge of the East'].rang == 0);
    },
    type: 'special',
    level_taken: null,
    Increased: [],
    points: 1,
    spent: 0,
    SPECIAL: {
      "Strength": 5,
      "Perception": 5,
      "Endurance": 5,
      "Charisma": 5,
      "Intelligence": 5,
      "Agility": 10,
      "Luck": 5,
    },
    SpecialWindow: {},
    Add(char) {
      let raised = this.Increased[this.rang]
      char.SPECIAL[raised].value = this.SPECIAL[raised]
      this.points = this.spent;
      this.spent = 0;
    },
    Remove() {
      let raised = this.Increased[this.rang - 1]
      char.SPECIAL[raised].value -= 1
      this.Increased.pop();
    },
    UnWrap(char) {
      for (key in char.SPECIAL) {
        this.SPECIAL[key] = char.SPECIAL[key].value;
        this.SpecialWindow['values'].get(key).textContent = this.SPECIAL[key]
        if (this.SPECIAL[key] == 10) {
          this.SpecialWindow['ups'].get(key).disabled = true;
        }
        else {
          this.SpecialWindow['ups'].get(key).disabled = false;
        }

        if (this.SPECIAL[key] > char.baseSpecial) {
          this.SpecialWindow['downs'].get(key).disabled = false;
        }
        else {
          this.SpecialWindow['downs'].get(key).disabled = true;
        }
      }
      this.SpecialWindow['article'].textContent = `SPECIAL ${this.points}`;
    },
  },
  'Lonesome Road': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Marked': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Legion Assault': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Ranger Takedown': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
    rangs: 1,
  },
  'Khan Trick': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
  'Scribe Counter': {
    rangs: 1,
    rang: 0,
    type: 'special',
    level_taken: null,
  },
}





FNV_Abilities_En = {
  "Black Widow/ Lady Killer": {
    name: "Black Widow/ Lady Killer",
    requirements_text: "Female PC/Male PC",
    Description: "+10% damage to the opposite sex and unique dialogue options with certain characters.",
  },
  "Cherchez La Femme/ Confirmed Bachelor": {
    name: "Cherchez La Femme/ Confirmed Bachelor",
    requirements_text: "Female PC/ Male PC",
    Description: "+10% damage to the same sex and unique dialogue options with certain characters.",
  },
  "Friend of the Night": {
    name: "Friend of the Night",
    requirements_text: "PE 6, Sneak 30",
    Description: "Your eyes adapt quickly to low-light conditions.",
  },
  "Heave, Ho!": {
    name: "Heave, Ho!",
    requirements_text: "ST 5, Explosives 30",
    Description: "+50% thrown weapon velocity and range.",
  },
  "Hunter": {
    name: "Hunter",
    requirements_text: "Survival 30",
    Description: "In combat, you do 75% more critical damage against animals and mutated animals.",
  },
  "In Shining Armor": {
    name: "In Shining Armor",
    requirements_text: "Repair 20, Science 70",
    Description: "It is supposed to grant +5 DT against energy weapons while wearing metal armor, with a further +2 DT while wearing reflective eyewear or helmets.",
  },
  "Intense Training": {
    name: "Intense Training",
    requirements_text: "",
    Description: "You can put a single point into any of your SPECIAL attributes.",
  },
  "Junk Rounds": {
    name: "Junk Rounds",
    requirements_text: "LU 6, Repair 45",
    Description: "You can craft ammunition using scrap metal and tin cans.",
  },
  "Light Touch": {
    name: "Light Touch",
    requirements_text: "AG 6, Repair 45",
    Description: "While wearing light armor you gain +5% critical hit chance and your enemies suffer a -25% critical hit chance.",
  },
  "Old World Gourmet": {
    name: "Old World Gourmet",
    requirements_text: "EN 6, Survival 45",
    Description: "+25% addiction resistance. +50% health bonus from snack foods. Scotch, vodka and wine now give you health in addition to their normal effects.",
  },
  "Rapid Reload": {
    name: "Rapid Reload",
    requirements_text: "AG 5, Guns 30",
    Description: "All of your weapon reloads are 25% faster than normal.",
  },
  "Retention": {
    name: "Retention",
    requirements_text: "IN 5",
    Description: "Skill magazines last for 3 real-time minutes.",
  },
  "Swift Learner": {
    name: "Swift Learner",
    requirements_text: "IN 4",
    Description: "You gain an additional 10% whenever experience points are earned.",
  },
  "Cannibal": {
    name: "Cannibal",
    requirements_text: "",
    Description: "When you're in Sneak mode, you gain the option to eat a human corpse to regain hit points, but lose Karma.",
  },
  "Comprehension": {
    name: "Comprehension",
    requirements_text: "IN 4",
    Description: "You gain one additional skill point for reading books and double the skill points for reading magazines.",
  },
  "Educated": {
    name: "Educated",
    requirements_text: "IN 4",
    Description: "You gain two more skill points every time you advance in level.",
  },
  "Entomologist": {
    name: "Entomologist",
    requirements_text: "IN 4, Survival 45",
    Description: "You do an additional 50% damage every time you attack a mutated insect.",
  },
  "Rad Child": {
    name: "Rad Child",
    requirements_text: "Survival 70",
    Description: "Regenerate 2 HP per second per 200 rads accumulated.",
  },
  "Run 'n Gun": {
    name: "Run 'n Gun",
    requirements_text: "Guns 45 or Energy Weapons 45",
    Description: "Halved spread with one-handed ranged weapons while walking or running.",
  },
  "Travel Light": {
    name: "Travel Light",
    requirements_text: "Survival 45",
    Description: "While wearing light armor or no armor, you run 10% faster.",
  },
  "Bloody Mess": {
    name: "Bloody Mess",
    requirements_text: "",
    Description: "+5% overall damage; more violent death animations.",
  },
  "Demolition Expert": {
    name: "Demolition Expert",
    requirements_text: "Explosives 50",
    Description: "+20% damage with explosives.",
  },
  "Ferocious Loyalty": {
    name: "Ferocious Loyalty",
    requirements_text: "CH 6",
    Description: "When you drop below 50% HP, companions gain +50 DR.",
  },
  "Fortune Finder": {
    name: "Fortune Finder",
    requirements_text: "LU 5",
    Description: "Considerably more bottle caps will be found in stockpiles.",
  },
  "Gunslinger": {
    name: "Gunslinger",
    requirements_text: "",
    Description: "+25% accuracy in V.A.T.S. with one-handed weapons.",
  },
  "Hand Loader": {
    name: "Hand Loader",
    requirements_text: "Repair 70",
    Description: "When using Guns, you are twice as likely to recover cases and hulls. You also have all hand load recipes unlocked at any reloading benches.",
  },
  "Mad Bomber": {
    name: "Mad Bomber",
    requirements_text: "Repair 45, Explosives 45",
    Description: "Your intimate knowledge of gadgets and explosives have combined to make you... the Mad Bomber! At Workbenches, you have special Explosives recipes unlocked for use.",
  },
  "Lead Belly": {
    name: "Lead Belly",
    requirements_text: "EN 5",
    Description: "-50% radiation taken from food and water sources.",
  },
  "Shotgun Surgeon": {
    name: "Shotgun Surgeon",
    requirements_text: "Guns 45",
    Description: "When using shotguns, regardless of ammunition used, you ignore an additional 10 points of a target's Damage Threshold.",
  },
  "The Professional": {
    name: "The Professional",
    requirements_text: "Sneak 70",
    Description: "Your Sneak Attack Criticals with revolvers, pistols, and submachine guns (guns and energy weapons) all inflict an additional 20% damage.",
  },
  "Toughness": {
    name: "Toughness",
    requirements_text: "EN 5",
    Description: "+3 DT permanently.",
  },
  "Vigilant Recycler": {
    name: "Vigilant Recycler",
    requirements_text: "Science 70",
    Description: "When using Energy Weapons, you are twice as likely to recover drained ammunition. You also have more efficient recycling recipes available at workbenches.",
  },
  "Commando": {
    name: "Commando",
    requirements_text: "",
    Description: "+25% accuracy in V.A.T.S. with two-handed weapons.",
  },
  "Cowboy": {
    name: "Cowboy",
    requirements_text: "Guns 45, Melee 45",
    Description: "+25% damage done by dynamite, hatchets, knives, revolvers, and lever-action guns.",
  },
  "Grunt": {
    name: "Grunt",
    requirements_text: "Guns 45, Explosives 20",
    Description: "25% more damage with 9mm pistols and SMGs, .45 pistols and SMGs, service rifles, assault and Marksman carbines, light machine guns, frag grenades, grenade rifles and launchers and combat knives.",
  },
  "Home on the Range": {
    name: "Home on the Range",
    requirements_text: "Survival 70",
    Description: "Whenever you interact with a campfire, you have the option of sleeping, with all the benefits that sleep brings.",
  },
  "Living Anatomy": {
    name: "Living Anatomy",
    requirements_text: "Medicine 70",
    Description: "Shows health and Damage Threshold of any target. +5% bonus to damage against humans and non-feral ghouls.",
  },
  "Pack Rat": {
    name: "Pack Rat",
    requirements_text: "IN 5, Barter 70",
    Description: "Items with a weight of two pounds or less now weigh half as much.",
  },
  "Quick Draw": {
    name: "Quick Draw",
    requirements_text: "AG 5",
    Description: "Makes weapon equipping and holstering 50% faster.",
  },
  "Rad Resistance": {
    name: "Rad Resistance",
    requirements_text: "EN 5, Survival 40",
    Description: "+25% radiation resistance permanently.",
  },
  "Scrounger": {
    name: "Scrounger",
    requirements_text: "LU 5",
    Description: "Considerably more ammunition in stockpiles.",
  },
  "Sneering Imperialist": {
    name: "Sneering Imperialist",
    requirements_text: "",
    Description: "+15% Damage and +25% accuracy in V.A.T.S. to various tribal and raider characters.",
  },
  "Stonewall": {
    name: "Stonewall",
    requirements_text: "ST 6, EN 6",
    Description: "+5 DT against melee and unarmed attacks and cannot be knocked down during combat.",
  },
  "Strong Back": {
    name: "Strong Back",
    requirements_text: "ST 5, EN 5",
    Description: "+50 Carry Weight.",
  },
  "Super Slam!": {
    name: "Super Slam!",
    requirements_text: "ST 6, Melee Weapons 45",
    Description: "All melee (except thrown) and unarmed attacks have a chance of knocking your target down. 15% for Unarmed or one-handed melee, 30% for two-handed melee.",
  },
  "Terrifying Presence": {
    name: "Terrifying Presence",
    requirements_text: "Speech 70",
    Description: "Can intimidate foes through dialogue; closing dialogue results in the foe fleeing for 5 seconds.",
  },
  "Tribal Wisdom": {
    name: "Tribal Wisdom",
    requirements_text: "Survival 70",
    Description: "-50% limb damage from animals, mutated animals, and mutated insects, +25% to Poison Resistance, ability to eat mutated insects in sneak mode.",
  },
  "And Stay Back": {
    name: "And Stay Back",
    requirements_text: "Guns 70",
    Description: "Shotguns have a 10% chance, per pellet, of knocking an enemy back.",
  },
  "Animal Friend": {
    name: "Animal Friend",
    requirements_text: "CH 6, Survival 45",
    Description: "With the first rank, hostile animals become neutral. With the second rank, they assist in combat, but not against other animals.",
  },
  "Fight the Power!": {
    name: "Fight the Power!",
    requirements_text: "",
    Description: "+2 Damage Threshold and +5% Critical Chance against anyone wearing NCR, Legion or Brotherhood of Steel armor.",
  },
  "Finesse": {
    name: "Finesse",
    requirements_text: "",
    Description: "+5% Critical Chance.",
  },
  "Here and Now": {
    name: "Here and Now",
    requirements_text: "",
    Description: "You instantly level up again.",
  },
  "Math Wrath": {
    name: "Math Wrath",
    requirements_text: "Science 70",
    Description: "Reduces all AP costs by 10%.",
  },
  "Miss Fortune": {
    name: "Miss Fortune",
    requirements_text: "LU 6",
    Description: "10% chance that Miss Fortune will incapacitate a target in V.A.T.S.",
  },
  "Mister Sandman": {
    name: "Mister Sandman",
    requirements_text: "Sneak 60",
    Description: "Can instantly kill a sleeping non-player character and earn bonus XP when doing so.",
  },
  "Mysterious Stranger": {
    name: "Mysterious Stranger",
    requirements_text: "LU 6",
    Description: "10% chance that the Mysterious Stranger will finish off a target in V.A.T.S.",
  },
  "Nerd Rage!": {
    name: "Nerd Rage!",
    requirements_text: "IN 5, Science 50",
    Description: "+15 DT and Strength increased to 10 whenever health is 20% or lower.",
  },
  "Night Person": {
    name: "Night Person",
    requirements_text: "",
    Description: "+2 Intelligence and +2 Perception between 6:00 P.M. and 6:00 A.M.",
  },
  "Plasma Spaz": {
    name: "Plasma Spaz",
    requirements_text: "Energy Weapons 70",
    Description: "AP costs for all plasma weapons are reduced by 20%.",
  },
  "Alertness": {
    name: "Alertness",
    requirements_text: "PE between 6 and 9",
    Description: "+2 Perception when crouched and still.",
  },
  "Fast Metabolism": {
    name: "Fast Metabolism",
    requirements_text: "",
    Description: "+20% Hit Points restored with stimpaks.",
  },
  "Ghastly Scavenger": {
    name: "Ghastly Scavenger",
    requirements_text: "Cannibal perk",
    Description: "When you're in Sneak mode, you gain the option to eat a super mutant or feral ghoul corpse to regain hit points, but lose Karma.",
  },
  "Heavyweight": {
    name: "Heavyweight",
    requirements_text: "ST 7",
    Description: "Weapons with a weight of more than 10 are cut in half. This does not affect weapons modded to under 10 wg.",
  },
  "Hit the Deck": {
    name: "Hit the Deck",
    requirements_text: "Explosives 70",
    Description: "+25 DT against explosives.",
  },
  "Hobbler": {
    name: "Hobbler",
    requirements_text: "PE 7",
    Description: "Your chance to hit an opponent's legs in V.A.T.S. is increased by 25%.",
  },
  "Life Giver": {
    name: "Life Giver",
    requirements_text: "EN 6",
    Description: "+30 hit points.",
  },
  "Long Haul": {
    name: "Long Haul",
    requirements_text: "EN 6, Barter 70",
    Description: "Being over-encumbered no longer prevents you from using fast travel.",
  },
  "Piercing Strike": {
    name: "Piercing Strike",
    requirements_text: "Unarmed 70",
    Description: "All your unarmed and melee attacks negate 15 points of DT.",
  },
  "Pyromaniac": {
    name: "Pyromaniac",
    requirements_text: "Explosives 60",
    Description: "+50% damage with fire-based weapons.",
  },
  "Robotics Expert": {
    name: "Robotics Expert",
    requirements_text: "Science 50",
    Description: "+25% damage to robots; can shut down robots by sneaking up on them and deactivating.",
  },
  "Silent Running": {
    name: "Silent Running",
    requirements_text: "AG 6, Sneak 50",
    Description: "Running no longer factors into a successful sneak attempt.",
  },
  "Sniper": {
    name: "Sniper",
    requirements_text: "PE 6, AG 6",
    Description: "25% more likely to hit the target's head in V.A.T.S.",
  },
  "Splash Damage": {
    name: "Splash Damage",
    requirements_text: "Explosives 70",
    Description: "Explosives have a 25% larger area of effect.",
  },
  "Unstoppable Force": {
    name: "Unstoppable Force",
    requirements_text: "ST 7, Melee Weapons 90",
    Description: "x4 normal damage through enemy Blocks with melee and unarmed attacks.",
  },
  "Adamantium Skeleton": {
    name: "Adamantium Skeleton",
    requirements_text: "",
    Description: "Damage taken by limbs reduced by 50%.",
  },
  "Center of Mass": {
    name: "Center of Mass",
    requirements_text: "Guns 70",
    Description: "In V.A.T.S., you do an additional 15% damage when targeting the torso.",
  },
  "Chemist": {
    name: "Chemist",
    requirements_text: "Medicine 60",
    Description: "Chems and (in Hardcore) stimpaks last twice as long.",
  },
  "Jury Rigging": {
    name: "Jury Rigging",
    requirements_text: "Repair 90",
    Description: "Repair any item using a roughly similar item.",
  },
  "Light Step": {
    name: "Light Step",
    requirements_text: "PE 6, AG 6",
    Description: "Floor traps or mines will not be set off.",
  },
  "Purifier": {
    name: "Purifier",
    requirements_text: "",
    Description: "You do 50% extra damage with melee and Unarmed weapons against centaurs, night stalkers, spore plants, spore carriers, deathclaws and super mutants.",
  },
  "Action Boy/Action Girl": {
    name: "Action Boy/Action Girl",
    requirements_text: "AG 6",
    Description: "+15 Action Points.",
  },
  "Better Criticals": {
    name: "Better Criticals",
    requirements_text: "PE 6, LU 6",
    Description: "+50% damage with critical hits.",
  },
  "Chem Resistant": {
    name: "Chem Resistant",
    requirements_text: "Medicine 60",
    Description: "Half as likely to get addicted.",
  },
  "Meltdown": {
    name: "Meltdown",
    requirements_text: "Energy Weapons 90",
    Description: "Foes killed by your Energy Weapons emit a corona of harmful energy.",
  },
  "Tag!": {
    name: "Tag!",
    requirements_text: "",
    Description: "Fourth \"tag\" skill: +15 points to that skill.",
  },
  "Weapon Handling": {
    name: "Weapon Handling",
    requirements_text: "ST < 10",
    Description: "Weapon Strength requirements are now 2 points lower than normal for you.",
  },
  "Computer Whiz": {
    name: "Computer Whiz",
    requirements_text: "IN 7, Science 70",
    Description: "Can make one extra attempt to hack a locked-down terminal.",
  },
  "Concentrated Fire": {
    name: "Concentrated Fire",
    requirements_text: "Energy Weapons 60, Guns 60",
    Description: "+5% accuracy in V.A.T.S. with every subsequent attack on a given body part queued.",
  },
  "Infiltrator": {
    name: "Infiltrator",
    requirements_text: "PE 7, Lockpick 70",
    Description: "Can make one more attempt to pick a broken lock.",
  },
  "Paralyzing Palm": {
    name: "Paralyzing Palm",
    requirements_text: "Unarmed 70",
    Description: "Can paralyze an enemy for 30 seconds with a V.A.T.S. unarmed attack.",
  },
  "Walker Instinct": {
    name: "Walker Instinct",
    requirements_text: "Survival 50",
    Description: "+1 Perception and Agility when outside.",
  },
  "Atomic!": {
    name: "Atomic!",
    requirements_text: "EN 6",
    Description: "In irradiated areas, +25% move and attack speed, +2 DT, +2 ST. With excess rad level, AP regen scales from 1.1 times to 1.5 times normal.",
  },
  "Explorer": {
    name: "Explorer",
    requirements_text: "",
    Description: "All locations are marked on your map.",
  },
  "Eye for Eye": {
    name: "Eye for Eye",
    requirements_text: "",
    Description: "For each crippled limb you have, you do an additional 10% damage.",
  },
  "Grim Reaper's Sprint": {
    name: "Grim Reaper's Sprint",
    requirements_text: "",
    Description: "A kill in V.A.T.S. restores 20 AP immediately.",
  },
  "Mile in Their Shoes": {
    name: "Mile in Their Shoes",
    requirements_text: "Survival 25",
    Description: "You have come to understand night stalkers. Consuming night stalker squeezin's now grants bonuses to Perception (+1 PER), Poison Resistance (+5), and Stealth (+5 Sneak) in addition to the normal benefits.",
  },
  "Ninja": {
    name: "Ninja",
    requirements_text: "Melee Weapons 80, Sneak 80",
    Description: "Multiplies Critical Chance by x1.15 with melee and unarmed weapons (despite the Description stating it's a flat +15% bonus), and grants +25% damage with melee/unarmed sneak attack criticals.",
  },
  "Solar Powered": {
    name: "Solar Powered",
    requirements_text: "EN 7",
    Description: "+2 Strength and +1 HP per second while outside, from 6:00 A.M. to 6:00 P.M.",
  },
  "Them's Good Eatin'": {
    name: "Them's Good Eatin'",
    requirements_text: "Survival 55",
    Description: "Any living creature you kill has a 50% chance to have the potent healing items thin red paste or blood sausage when looted.",
  },
  "Irradiated Beauty": {
    name: "Irradiated Beauty",
    requirements_text: "EN 8",
    Description: "Sleep removes all Rads (Hardcore: only -100 Rads).",
  },
  "Laser Commander": {
    name: "Laser Commander",
    requirements_text: "Energy Weapons 90",
    Description: "You do an extra 15% damage and have a 10% extra chance to critically hit with any laser weapon.",
  },
  "Nuka Chemist": {
    name: "Nuka Chemist",
    requirements_text: "Science 90",
    Description: "Unlocks special Nuka-Cola recipes at the workbench.",
  },
  "Spray and Pray": {
    name: "Spray and Pray",
    requirements_text: "",
    Description: "Your attacks do 75% less damage to companions.",
  },
  "Voracious Reader": {
    name: "Voracious Reader",
    requirements_text: "IN 7",
    Description: "Damaged books become blank magazines; can copy existing magazines into blank magazines.",
  },
  "Slayer": {
    name: "Slayer",
    requirements_text: "AG 7, Unarmed 90",
    Description: "The speed of all your melee and unarmed attacks is increased by 30%.",
  },
  "Lessons Learned": {
    name: "Lessons Learned",
    requirements_text: "IN 6",
    Description: "+1% XP gain per player level.",
  },
  "Nerves of Steel": {
    name: "Nerves of Steel",
    requirements_text: "AG 7",
    Description: "20% faster AP regeneration.",
  },
  "Tunnel Runner": {
    name: "Tunnel Runner",
    requirements_text: "AG 8",
    Description: "+25% sneaking speed when wearing light or no armor.",
  },
  "Rad Absorption": {
    name: "Rad Absorption",
    requirements_text: "EN 7",
    Description: "-1 Rad every 20 seconds.",
  },
  "Roughin' It": {
    name: "Roughin' It",
    requirements_text: "Survival 100",
    Description: "Sleeping outside gives Well Rested benefit.",
  },
  "Burden to Bear": {
    name: "Burden to Bear",
    requirements_text: "ST 6, EN 6",
    Description: "+50 carry weight.",
  },
  "Implant GRX": {
    name: "Implant GRX",
    requirements_text: "EN 8",
    Description: "You gain a non-addictive subdermal turbo (chem) injector. This perk may be taken twice, with the second rank increasing the effect from 2 to 3 seconds and the uses per day from 5 to 10 (activated in the Pip-Boy inventory).",
  },
  "Broad Daylight": {
    name: "Broad Daylight",
    requirements_text: "",
    Description: "No Sneak penalty for using Pip-Boy light.",
  },
  "Certified Tech": {
    name: "Certified Tech",
    requirements_text: "",
    Description: "+25% critical hit chance against robots, 85% chance of finding an extra crafting component on destroyed robots.",
  },
  "Ain't Like That Now": {
    name: "Ain't Like That Now",
    requirements_text: "Karma less than -250",
    Description: "Karma reset to 0, +25% AP regeneration rate, +20% attack speed, immunity to critical hits.",
  },
  "Just Lucky I'm Alive": {
    name: "Just Lucky I'm Alive",
    requirements_text: "Karma between -250 and 250",
    Description: "+4 Luck for 3 minutes upon finishing a battle with less than 25% health; immunity to critical hits, +50% critical damage.",
  },
  "Thought You Died": {
    name: "Thought You Died",
    requirements_text: "Karma at least 250",
    Description: "Your storied past has fallen from memory because everyone thought you died. Your Karma is reset, you inflict +10% damage, and for every 100 points of Karma, you gain 10 Health. You are also immune to critical hits. This perk requires you to have good Karma.",
  },

  'Strength Implant': {
    name: '"Hypertrophy Accelerator" Strength Implant',
    requirements_text: 'Buy from Doctor Usanagi for 4000 caps.',
    Description: '+1 Strength',
  },
  'Perception Implant': {
    name: '"Optics Enhancer" Perception Implant',
    requirements_text: 'Buy from Doctor Usanagi for 4000 caps.',
    Description: '+1 Perception',
  },
  'Endurance Implant': {
    name: '"Nociception Regulator" Endurance Implant',
    requirements_text: 'Buy from Doctor Usanagi for 4000 caps.',
    Description: '+1 Endurance',
  },
  'Charisma Implant': {
    name: '"Empathy Synthesizer" Charisma Implant',
    requirements_text: 'Buy from Doctor Usanagi for 4000 caps.',
    Description: '+1 Charisma',
  },
  'Intelligence Implant': {
    name: '"Logic Co-Processor" Intelligence Implant',
    requirements_text: 'Buy from Doctor Usanagi for 4000 caps.',
    Description: '+1 Intelligence',
  },
  'Agility Implant': {
    name: '"Reflex Booster" Agility Implant',
    requirements_text: 'Buy from Doctor Usanagi for 4000 caps.',
    Description: '+1 Agility',
  },
  '"Luck Implant': {
    name: '"Probability Calculator" Luck Implant',
    requirements_text: 'Buy from Doctor Usanagi for 4000 caps.',
    Description: '+1 Luck',
  },
  'Sub-Dermal Armor': {
    name: '"NEMEAN" Sub-Dermal Armor',
    requirements_text: 'Buy from Doctor Usanagi for 8000 caps.',
    Description: '+4 Damage Threshold',
  },
  'Monocyte Breeder': {
    name: '"PHOENIX" Monocyte Breeder',
    requirements_text: 'Buy from Doctor Usanagi for 12000 caps.',
    Description: 'Regenerate 1 health per 10 seconds',
  },

  'Coin Operator': {
    name: 'Coin Operator',
    requirements_text: 'Dialogue with Christine',
    Description: 'Adds recipe. 1 fission battery + 2 scrap metal = 50 Sierra Madre chips',
  },
  'Ghost Hunter': {
    name: 'Ghost Hunter',
    requirements_text: 'Dialogue with Dog',
    Description: 'Ghost people are more likely to die outright without needing to be dismembered or disintegrated.',
  },
  'Sierra Madre Martini': {
    name: 'Sierra Madre Martini',
    requirements_text: 'Dialogue with Dean Domino',
    Description: 'Adds recipe to create Sierra Madre martinis with 2 junk food, 1 tin can, and 1 jar of Cloud residue.',
  },
  'Elijah\'s Last Words': {
    name: 'Elijah\'s Last Words',
    requirements_text: 'Give Veronica holomessage from Elijah.',
    Description: 'Boosts Veronica\'s melee attack speed 150% & gives her a 25% chance for melee attacks to knock down enemies.',
  },
  'Elijah\'s Ramblings': {
    name: 'Elijah\'s Ramblings',
    requirements_text: 'Keep holomessage from Elijah after Veronica unlocks it.',
    Description: 'Boosts melee critical damage by +50% (the Description incorrectly states the bonus is 150%)',
  },
  'Brainless': {
    name: 'Brainless',
    requirements_text: 'Initial dialogue with Doctor Klein in the think tank (optional to keep after completion of OWB if you keep your artificial brain)',
    Description: 'Head can no longer be crippled, +25% resistance to chem addiction, +5% DT (min +1)',
  },
  'Heartless': {
    name: 'Heartless',
    requirements_text: 'Initial dialogue with Doctor Klein in the think tank (optional to keep after completion of OWB if you keep your artificial heart)',
    Description: 'Poison immunity, -50% chance to get critical hits from robots, and lesser bonus healing with certain items.',
  },
  'Spineless': {
    name: 'Spineless',
    requirements_text: 'Initial dialogue with Doctor Klein in the think tank (optional to keep after completion of OWB if you keep your artificial spine)',
    Description: 'Strength +1, DT +1, torso can no longer be crippled.',
  },
  'Big Brained': {
    name: 'Big Brained',
    requirements_text: 'Sink Auto-Doc after Old World Blues is finished (optional to get if you take your organic brain back)',
    Description: 'The perk is not implemented properly and does not function. It\'s supposed to grant the following bonuses: Head can no longer be crippled, +10% resistance to chem addiction, +10% DT (min +1).',
  },
  'Cardiac Arrest': {
    name: 'Cardiac Arrest',
    requirements_text: 'Sink Auto-Doc after Old World Blues is finished (optional to get if you take your organic heart back)',
    Description: '+50% to poison resistance, -25% chance to get critical hits from robots, and bonus healing with certain items.',
  },
  'Reinforced Spine': {
    name: 'Reinforced Spine',
    requirements_text: 'Sink Auto-Doc after Old World Blues is finished (optional to get if you take your organic spine back)',
    Description: 'Strength +2, Damage Threshold +2',
  },
  'DNAgent': {
    name: 'DNAgent',
    requirements_text: 'Completion of X-8 Data Retrieval Test',
    Description: 'All damage done to night stalkers is increased by 10%.',
  },
  'DNAvenger': {
    name: 'DNAvenger',
    requirements_text: 'Kill two cazadores for rank 1, three more for rank 2, and another five for rank 3 of this perk. All kills must be made in the Big MT; cazadores outside the Big MT do not count.',
    Description: 'All the damage done to cazadores is increased cumulatively by 10% by rank.',
  },
  'Implant C-13': {
    name: 'Implant C-13',
    requirements_text: 'Surgery purchased through dialogue with the Sink Auto-Doc in The Sink for 8,000 caps.',
    Description: 'Plus 10% damage to cazadores',
  },
  'Implant M-5': {
    name: 'Implant M-5',
    requirements_text: 'Surgery purchased through dialogue with the Sink Auto-Doc in The Sink for 10,000 caps.',
    Description: 'Your crouched movement speed is increased by 20%.',
  },
  'Implant Y-3': {
    name: 'Implant Y-3',
    requirements_text: 'Surgery purchased through dialogue with the Sink Auto-Doc in The Sink for 12,000 caps.',
    Description: 'Removes any radiation taken from drinking an irradiated water source.',
  },
  'Implant Y-7': {
    name: 'Implant Y-7',
    requirements_text: 'Surgery purchased through dialogue with the Sink Auto-Doc in The Sink for 20,000 caps.',
    Description: '+5 health and +2 restored action points through the consumption of food.',
  },
  'The Bear-Slayer': {
    name: 'The Bear-Slayer',
    requirements_text: 'Launch nuclear missiles at NCR.',
    Description: '+1 SPECIAL point, Caesar\'s Legion Fame, NCR Infamy',
  },
  'Dead Man\'s Burden': {
    name: 'Dead Man\'s Burden',
    requirements_text: 'Launch nuclear missiles at both Caesar\'s Legion and NCR.',
    Description: '+1 SPECIAL point, Boomers and Powder Gangers Fame, Caesar\'s Legion and NCR Infamy',
  },
  'Divide Survivor': {
    name: 'Divide Survivor',
    requirements_text: 'Stop the missile launch.',
    Description: '+1 SPECIAL point, Brotherhood of Steel and Followers of the Apocalypse Fame',
  },
  'Lonesome Road': {
    name: 'Lonesome Road',
    requirements_text: 'Leave ED-E behind in Ulysses\' Temple.',
    Description: '+10% damage and +10% V.A.T.S. hit chance when you have no companions.',
  },
  'Marked': {
    name: 'Marked',
    requirements_text: 'Kill three named Marked Men.',
    Description: '+10% damage and +10% DT against Marked Men',
  },
  'Scourge of the East': {
    name: 'Scourge of the East',
    requirements_text: 'Launch nuclear missiles at Caesar\'s Legion.',
    Description: '+1 SPECIAL point, NCR Fame, Caesar\'s Legion Infamy',
  },
  'Khan Trick': {
    name: 'Khan Trick',
    requirements_text: 'Perform all Great Khan drug runs.',
    Description: 'Temporarily stun opponents by throwing dust or dirt at their eyes (requires dirt or sand ground)',
  },
  'Legion Assault': {
    name: 'Legion Assault',
    requirements_text: 'Talk to Lucius with 50 Unarmed.',
    Description: 'Knock back opponents',
  },
  'Ranger Takedown': {
    name: 'Ranger Takedown',
    requirements_text: 'Talk to Ranger Andy with 30 Speech or complete the unmarked quest, Andy and Charlie.',
    Description: 'Knock down opponents',
  },
  'Scribe Counter': {
    name: 'Scribe Counter',
    requirements_text: 'Put Formal wear or White Glove Society attire into Veronica Santangelo\'s inventory.',
    Description: 'Quick counter-attack after Block',
  },
}

FNV_Abilities_Ru = {
  "Friend of the Night": {
    name: "Друг ночи",
    requirements_text: "ВСП 6, Скрытность 30",
    Description: "Постоянный эффект видения при малом свете ночью",
  },
  "Intense Training": {
    name: "Интенсивная тренировка",
    requirements_text: "",
    Description: "+1 к любому параметру S.P.E.C.I.A.L. на каждый ранг",
  },
  "Light Touch": {
    name: "Лёгкое касание",
    requirements_text: "ЛОВ 6, Ремонт: 45",
    Description: "+5 % к шансу критического попадания -25 % к шансу получения критического урона (при ношении легкой брони)",
  },
  "Junk Rounds": {
    name: "Ломовые патроны",
    requirements_text: "УДЧ 6 Ремонт: 45",
    Description: "Можно создавать патроны, имея лишь металлолом, жестяные банки и нужные гильзы",
  },
  "Hunter": {
    name: "Охотник",
    requirements_text: "Выживание 30",
    Description: "+75 % к критическому урону по животным и мутировавшим животным",
  },
  "Swift Learner": {
    name: "Прилежный ученик",
    requirements_text: "ИНТ 4",
    Description: "+10 % к получаемому опыту на каждый ранг",
  },
  "Old World Gourmet": {
    name: "Радости Старого мира",
    requirements_text: "ВНС 6, Выживание: 45",
    Description: "−25 % к шансу развития зависимости, +50 % к здоровью, получаемому при поедании еды, скотч-виски, водка и вино дополнительно восстанавливают здоровье",
  },
  "Heave, Ho!": {
    name: "Размах",
    requirements_text: "СИЛ 5, Взрывчатка 30",
    Description: "+50 % к дальности полёта и скорости броска метательных и пусковых снарядов",
  },
  "In Shining Armor": {
    name: "Сияющие доспехи",
    requirements_text: "Ремонт: 20 Наука: 70",
    Description: "+5 ПУ при использовании металлической брони, +2 ПУ при использовании отражающих очков (из-за бага не работает, подробности в статье)",
  },
  "Retention": {
    name: "Хорошая память",
    requirements_text: "ИНТ 5",
    Description: "x3 время действия эффекта от журналов",
  },
  "Black Widow/ Lady Killer": {
    name: "Чёрная вдова/Женоубийца",
    requirements_text: "Персонаж мужского/женского пола пола",
    Description: "+10 % к наносимому урону по противнику противоположного пола, дополнительные реплики в разговоре с представителем противоположного пола",
  },
  "Cherchez La Femme/ Confirmed Bachelor": {
    name: "Шерше ля фам/Убеждённый холостяк",
    requirements_text: "Персонаж мужского/женского пола пола",
    Description: "+10 % к наносимому урону по противнику противоположного пола, дополнительные реплики в разговоре с представителем противоположного пола",
  },
  "Run 'n Gun": {
    name: "Беги-стреляй",
    requirements_text: "Оружие 45 или Энергетическое оружие 45",
    Description: "При использовании одноручного огнестрельного или энергетического оружия во время бега в 2 раза снижается штраф на точность стрельбы",
  },
  "Rad Child": {
    name: "Дитя радиации",
    requirements_text: "Выживание 70",
    Description: "Получение лучевой болезни приводит к регенерации здоровья",
  },
  "Cannibal": {
    name: "Каннибал",
    requirements_text: "",
    Description: "Можно съесть труп человека в режиме скрытности, что повышает здоровье, но понижает карму, если вас заметят это будет считаться преступлением",
  },
  "Educated": {
    name: "Образованный",
    requirements_text: "ИНТ 4",
    Description: "+2 к получаемым очкам навыков при получении нового уровня",
  },
  "Comprehension": {
    name: "Понимание",
    requirements_text: "ИНТ 4",
    Description: "x2 эффект при прочтении журналов, +1 к эффекту от прочтения книг",
  },
  "Travel Light": {
    name: "Путешествие налегке",
    requirements_text: "Выживание 45",
    Description: "+10 % к скорости бега при использовании лёгкой брони или без брони",
  },
  "Entomologist": {
    name: "Энтомолог",
    requirements_text: "ИНТ 4, Выживание 45",
    Description: "+50 % к наносимому урону по мутировавшим насекомым",
  },
  "Ferocious Loyalty": {
    name: "Беззаветная преданность",
    requirements_text: "ХАР 6",
    Description: "+50 % к СУ спутников при уровне здоровья 50 % или меньше",
  },
  "Mad Bomber": {
    name: "Бешеный террорист",
    requirements_text: "Ремонт 45, Взрывчатка 45",
    Description: "Знание техники и любовь к взрывчатке сделали вас… «Бешеным террористом»! Теперь вам доступны особые рецепты производства взрывчатки на верстаках.",
  },
  "Shotgun Surgeon": {
    name: "Два ствола",
    requirements_text: "Оружие 45",
    Description: "+10 к бронепробиваемости при использовании дробовиков",
  },
  "Gunslinger": {
    name: "Дуэлист",
    requirements_text: "",
    Description: "+25 % повышение точности в V.A.T.S. при использовании одноручного оружия",
  },
  "Fortune Finder": {
    name: "Кладоискатель",
    requirements_text: "УДЧ 5",
    Description: "В тайниках можно будет находить больше крышек",
  },
  "Bloody Mess": {
    name: "Кровавая баня",
    requirements_text: "",
    Description: "+5 % к наносимому урону, более кровавая анимация смерти",
  },
  "The Professional": {
    name: "Профессионал",
    requirements_text: "Скрытность 70",
    Description: "+20 % к критическому урону скрытной атаки при использовании обычных или энергетических пистолетов, револьверов и пистолетов-пулемётов",
  },
  "Vigilant Recycler": {
    name: "Рачительный хозяин",
    requirements_text: "Наука 70",
    Description: "Повышение шанса получения истощённой батареи, снижение требований к ресурсам для рециклинга, возможность создания оптимизированных зарядов",
  },
  "Hand Loader": {
    name: "Ручное снаряжение",
    requirements_text: "Ремонт 70",
    Description: "Повышение шанса получения гильз, дополнительные рецепты для изготовления патронов",
  },
  "Lead Belly": {
    name: "Свинцовое брюхо",
    requirements_text: "Выживание 40 или ВНС 5",
    Description: "-50 % к получаемой радиации при употреблении заражённой воды или пищи",
  },
  "Toughness": {
    name: "Стойкость",
    requirements_text: "ВНС 5",
    Description: "+3 к ПУ на каждый ранг",
  },
  "Demolition Expert": {
    name: "Эксперт-сапёр",
    requirements_text: "Взрывчатка 50",
    Description: "+20 % к наносимому урону взрывчаткой на каждый ранг",
  },
  "Pack Rat": {
    name: "Барахольщик",
    requirements_text: "ИНТ 5, Бартер 70",
    Description: "Предметы массой 2 фунта или меньше весят вдвое меньше",
  },
  "Quick Draw": {
    name: "Быстрая реакция",
    requirements_text: "ЛОВ 5",
    Description: "+50 % к скорости взятия оружия на изготовку",
  },
  "Home on the Range": {
    name: "И стол, и дом",
    requirements_text: "Выживание 70",
    Description: "Возможность поспать при взаимодействии с костром",
  },
  "Sneering Imperialist": {
    name: "Империалист",
    requirements_text: "",
    Description: "+15 % урона и +25 % к точности в режиме V.A.T.S. по дикарям и рейдерам",
  },
  "Stonewall": {
    name: "Каменная стена",
    requirements_text: "СИЛ 6, ВНС 6",
    Description: "+5 к ПУ против холодного оружия или оружия рукопашного боя, невозможно сбить с ног",
  },
  "Cowboy": {
    name: "Ковбой",
    requirements_text: "Оружие 45, Холодное оружие 45",
    Description: "+25 % к наносимому урону при использовании револьверов, оружия с рычажным механизмом затвора, динамита, ножей и топоров.",
  },
  "Commando": {
    name: "Коммандо",
    requirements_text: "",
    Description: "+25 % повышение точности в V.A.T.S. при использовании двуручного оружия",
  },
  "Strong Back": {
    name: "Крепкий хребет",
    requirements_text: "СИЛ 5, ВНС 5",
    Description: "+50 фунтов к максимальной нагрузке",
  },
  "Tribal Wisdom": {
    name: "Мудрость племён",
    requirements_text: "Выживание 70",
    Description: "−50 % урона конечностям от животных, мутировавших животных и мутировавших насекомых. +25 % сопротивления яду. Возможность есть мутировавших насекомых в режиме скрытности.",
  },
  "Grunt": {
    name: "Пехотинец",
    requirements_text: "Оружие 45, Взрывчатка 20",
    Description: "+25 % к наносимому урону при использовании 9-мм пистолетов и ПП, пистолетов и ПП кал. 45, боевых винтовок, карабинов и карабинов стрелка, лёгких пулемётов, гранат, гранатомётов и боевых ножей.",
  },
  "Living Anatomy": {
    name: "Практическая анатомия",
    requirements_text: "Медицина 70",
    Description: "Дополнительная информация о противнике (числовое значение ОЗ и ПУ), +5 % к наносимому урону по людям и гулям, кроме диких",
  },
  "Rad Resistance": {
    name: "Рад-сопротивление",
    requirements_text: "ВНС 5, Выживание 40",
    Description: "+25 % к сопротивлению радиации",
  },
  "Terrifying Presence": {
    name: "Страшный человек",
    requirements_text: "Красноречие 70",
    Description: "Дополнительные реплики… Или лучше их назвать угрозами?",
  },
  "Super Slam!": {
    name: "Суперудар",
    requirements_text: "СИЛ 6, Холодное оружие 45",
    Description: "Шанс повалить противника на землю при использовании холодного оружия или оружия рукопашного боя, что парализует его на 5 секунд",
  },
  "Scrounger": {
    name: "Халявщик",
    requirements_text: "УДЧ 5",
    Description: "В тайниках можно будет находить больше боеприпасов",
  },
  "Fight the Power": {
    name: "Анархист",
    requirements_text: "",
    Description: "Вы достаточно натерпелись от этих так называемых «авторитетов», обижающих бедных людей вокруг! Вы получаете +2 к порогу урона и +5 % к шансу критического удара против любого, кто носит броню НКР, Легиона или Братства Стали.",
  },
  "Nerd Rage": {
    name: "Бешенство ботаника",
    requirements_text: "ИНТ 5, Наука 50",
    Description: "+15 к порогу урона и СИЛ=10 при уровне здоровья меньше 20 %",
  },
  "And Stay Back": {
    name: "Держись подальше",
    requirements_text: "Оружие: 70",
    Description: "+10 % к шансу сбить противника с ног с помощью дробовика (на каждую картечину)",
  },
  "Animal Friend": {
    name: "Друг животных",
    requirements_text: "ХАР 6, Выживание 45",
    Description: "Первый ранг: животные не нападают. Второй ранг: животные помогают в бою (но не против других животных)",
  },
  "Here and Now": {
    name: "Здесь и сейчас",
    requirements_text: "",
    Description: "Немедленный переход на следующий уровень",
  },
  "Math Wrath": {
    name: "Матлогика",
    requirements_text: "Наука 70",
    Description: "-10 % к расходу ОД",
  },
  "Miss Fortune": {
    name: "Мисс Удача",
    requirements_text: "УДЧ 6",
    Description: "Мисс Удача иногда оказывает поддержку в режиме V.A.T.S.",
  },
  "Night Person": {
    name: "Ночное существо",
    requirements_text: "",
    Description: "+2 ИНТ и ВСП (не больше 10) с 18:00 до 06:00",
  },
  "Mister Sandman": {
    name: "Песочный человек",
    requirements_text: "Скрытность 60",
    Description: "Возможность убить спящего человека или гуля одним ударом, за это даются дополнительные очки опыта",
  },
  "Plasma Spaz": {
    name: "Плазменный привет",
    requirements_text: "Энергетическое оружие 70",
    Description: "-20 % к расходу ОД при использовании плазменного оружия",
  },
  "Mysterious Stranger": {
    name: "Таинственный незнакомец",
    requirements_text: "УДЧ 6",
    Description: "Таинственный незнакомец иногда оказывает поддержку в режиме V.A.T.S.",
  },
  "Finesse": {
    name: "Точность",
    requirements_text: "",
    Description: "+5 % к шансу критического урона",
  },
  "Alertness": {
    name: "Бдительность",
    requirements_text: "ВСП между 6 и 9",
    Description: "+2 ВСП в режиме неподвижной скрытности",
  },
  "Silent Running": {
    name: "Бесшумный бег",
    requirements_text: "ЛОВ 6, Скрытность 50",
    Description: "Бег не влияет на скрытность",
  },
  "Long Haul": {
    name: "Дальние странствия",
    requirements_text: "ВНС 6, Бартер 70",
    Description: "Можно пользоваться быстрым перемещением при перегруженности",
  },
  "Splash Damage": {
    name: "Зона поражения",
    requirements_text: "Взрывчатка 70",
    Description: "+25 % к радиусу поражения взрывчаткой",
  },
  "Hobbler": {
    name: "Капканщик",
    requirements_text: "ВСП 7",
    Description: "+25 % к шансу попадания в ноги в режиме V.A.T.S.",
  },
  "Hit the Deck!": {
    name: "Ложись!",
    requirements_text: "Взрывчатка 70",
    Description: "+25 ПУ при попадании в зону поражения взрывчатки",
  },
  "Unstoppable Force": {
    name: "Неодолимая сила",
    requirements_text: "СИЛ 7, Холодное оружие 90",
    Description: "x4 урон при использовании холодного оружия или оружия рукопашного боя против блоков противника",
  },
  "Ghastly Scavenger": {
    name: "Падальщик",
    requirements_text: "способность Каннибал",
    Description: "Можно съесть труп дикого гуля или супермутанта в режиме скрытности, что повышает здоровье, но понижает карму",
  },
  "Pyromaniac": {
    name: "Пироман",
    requirements_text: "Взрывчатка 60",
    Description: "+50 % к наносимому урону при использовании огнемётов",
  },
  "Piercing Strike": {
    name: "Проникающий удар",
    requirements_text: "Без оружия 70",
    Description: "+15 к бронепробиваемости при использовании холодного оружия или оружия рукопашного боя",
  },
  "Robotics Expert": {
    name: "Робототехник",
    requirements_text: "Наука 50",
    Description: "+25 % к наносимому урону по роботам, также можно отключать роботов в режиме скрытности",
  },
  "Sniper": {
    name: "Снайпер",
    requirements_text: "ВСП 6, ЛОВ 6",
    Description: "+25 % к шансу попадания в голову в режиме V.A.T.S.",
  },
  "Heavyweight": {
    name: "Тяжеловес",
    requirements_text: "СИЛ 7",
    Description: "Оружие, весящее более 10 фунтов, весит вдвое меньше (не влияет на оружие, весящее меньше 10 фунтов посредством модификации)",
  },
  "Fast Metabolism": {
    name: "Ускоренный метаболизм",
    requirements_text: "",
    Description: "+20 % здоровья при использовании стимуляторов",
  },
  "Life Giver": {
    name: "Фонтан жизни",
    requirements_text: "ВНС 6",
    Description: "+30 к постоянному запасу ОЗ",
  },
  "Adamantium Skeleton": {
    name: "Алмазный скелет",
    requirements_text: "",
    Description: "-50 % к получаемому конечностями урону",
  },
  "Purifier": {
    name: "Борец за чистоту",
    requirements_text: "",
    Description: "+50 % к наносимому урону по кентаврам, ночным охотникам, споровым растениям, когтям смерти, супермутантам и диким гулям, при использовании холодного оружия или оружия рукопашного боя.",
  },
  "Light Step": {
    name: "Лёгкий шаг",
    requirements_text: "ВСП 6, ЛОВ 6",
    Description: "Мины и ловушки, направленные против игрока, не срабатывают",
  },
  "Jury Rigging": {
    name: "Очумелые ручки",
    requirements_text: "Ремонт 90",
    Description: "Оружие или броню можно починить с помощью похожего образца",
  },
  "Chemist": {
    name: "Химик",
    requirements_text: "Медицина 60",
    Description: "x2 время действия химикатов",
  },
  "Center of Mass": {
    name: "Центр тяжести",
    requirements_text: "Оружие 70",
    Description: "+15 % к наносимому урону при стрельбе в торс в режиме V.A.T.S.",
  },
  "Action Boy/Action Girl": {
    name: "Живчик",
    requirements_text: "ЛОВ 6",
    Description: " + 15 к постоянному запасу ОД на каждый ранг",
  },
  "Better Criticals": {
    name: "Критический урон",
    requirements_text: "ВСП 6, УДЧ 6",
    Description: "+50 % к наносимому урону при критическом попадании",
  },
  "Weapon Handling": {
    name: "Обращение с оружием",
    requirements_text: "СИЛ < 10",
    Description: "-2 к требованию к оружию по силе",
  },
  "Tag!": {
    name: "Приз!",
    requirements_text: "",
    Description: "Возможность выбора четвёртого призового навыка, повышающего его на 15 очков",
  },
  "Meltdown": {
    name: "Распад",
    requirements_text: "Энергетическое оружие 90",
    Description: "От противника, убитого энергетическим оружием, вырывается мощная взрывная волна",
  },
  "Chem Resistant": {
    name: "Сопротивляемость химии",
    requirements_text: "Медицина 60",
    Description: "-50 % к шансу развития зависимости от химикатов",
  },
  "Infiltrator": {
    name: "Домушник",
    requirements_text: "ВСП 7, Взлом 70",
    Description: "Возможность повторно вскрыть сломанный замок",
  },
  "Walker Instinct": {
    name: "Интуиция странника",
    requirements_text: "Выживание 50",
    Description: "+1 к Восприятию и Ловкости при нахождении вне помещений",
  },
  "Concentrated Fire": {
    name: "Массированный огонь",
    requirements_text: "Энергетическое оружие 60, Оружие 60",
    Description: "+5 % к шансу попадания по конкретным частям тела в V.A.T.S. после каждого выстрела по этой части",
  },
  "Paralyzing Palm": {
    name: "Парализующая ладонь",
    requirements_text: "Без оружия 70",
    Description: "Возможность нанести особый удар в V.A.T.S., будучи безоружным, парализующий противника на 30 секунд",
  },
  "Computer Whiz": {
    name: "Хакер",
    requirements_text: "ИНТ 7, Наука 70",
    Description: "Возможность повторно взломать заблокированный компьютер",
  },
  "Atomic!": {
    name: "Атомный!",
    requirements_text: "ВНС 6",
    Description: "+25 % скорости передвижения и атаки в зараженной радиацией местности, +2 ПУ, +2 СИЛ. С увеличением радиационного отравления скорость восстановления ОД возрастает с 1,1 до 1,5 раз быстрее обычного.",
  },
  "Explorer": {
    name: "Исследователь",
    requirements_text: "",
    Description: "На карте отображаются все локации в игре",
  },
  "Ninja": {
    name: "Ниндзя",
    requirements_text: "Холодное оружие 80, Скрытность 80",
    Description: "+15 % к вероятности критического удара и +25 % к наносимому урону при скрытной атаке при использовании холодного оружия или оружия рукопашного боя",
  },
  "Eye for Eye": {
    name: "Око за око",
    requirements_text: "",
    Description: "+10 % к наносимому урону за каждую повреждённую конечность",
  },
  "Them's Good Eatin": {
    name: "Прекрасное блюдо",
    requirements_text: "Выживание 55",
    Description: "Появляется 50 % шанс, что на любом убитом вами живом существе окажутся мощные лечебные предметы — жидкая красная паста или кровянка.",
  },
  "Mile in Their Shoes": {
    name: "Серпентокинолог",
    requirements_text: "Выживание 25",
    Description: "Вы начали понимать ночных охотников. Потребление выжимки из ночных охотников дает +1 к восприятию, +5 к сопротивлению ядам и +5 к скрытности в дополнение к обычным эффектам.",
  },
  "Grim Reaper's Sprint": {
    name: "Смерть на взлёте",
    requirements_text: "",
    Description: "+20 к ОД при убийстве противника в V.A.T.S. после выхода из режима",
  },
  "Solar Powered": {
    name: "Солнечная батарейка",
    requirements_text: "ВНС 7",
    Description: "+2 СИЛ и регенерация здоровья вне помещений днём",
  },
  "Spray and Pray": {
    name: "Дружеские подколки",
    requirements_text: "",
    Description: "-75 % к наносимому урону по спутникам",
  },
  "Laser Commander": {
    name: "Лазеров начальник",
    requirements_text: "Энергетическое оружие 90",
    Description: "+15 % к наносимому урону и +10 % к шансу критического попадания при использовании лазерного оружия",
  },
  "Voracious Reader": {
    name: "Ненасытный читатель",
    requirements_text: "ИНТ 7",
    Description: "Повреждённые книги становятся чистыми журналами, на них можно переписывать журналы, имеющиеся у игрока, либо преобразовывать в довоенные книги.",
  },
  "Irradiated Beauty": {
    name: "Облучённая красота",
    requirements_text: "ВНС 8",
    Description: "Сон удаляет всю радиацию в обычном режиме; в режиме хардкор: только— 100 рад",
  },
  "Nuka Chemist": {
    name: "Ядер-химик",
    requirements_text: "Наука 90",
    Description: "Дополнительные рецепты для изготовления ядер-колы",
  },
  "Slayer": {
    name: "Быстрый удар",
    requirements_text: "ЛОВ 7, Без оружия 90",
    Description: "+30 % к скорости атаки при использовании холодного оружия или оружия рукопашного боя",
  },
  "Lessons Learned": {
    name: "Выученные уроки",
    requirements_text: "ИНТ 6",
    Description: "+1 % ОО за каждый уровень",
  },
  "Nerves of Steel": {
    name: "Стальные нервы",
    requirements_text: "ЛОВ 7",
    Description: "+20 % к скорости восстановления ОД",
  },
  "Tunnel Runner": {
    name: "Туннелепроходчик",
    requirements_text: "ЛОВ 8",
    Description: "+25 % скорость в режиме скрытности при надетой лёгкой броне или без брони",
  },
  "Roughin' It": {
    name: "Небо над головой",
    requirements_text: "Выживание 100",
    Description: "Сон вне помещений даёт эффект «Заряд бодрости»",
  },
  "Rad Absorption": {
    name: "Рад-поглощение",
    requirements_text: "ВНС 7",
    Description: "Самовыведение радиации (-1 РАД каждые 20 секунд).",
  },
  "Burden to Bear": {
    name: "Груз на плечах",
    requirements_text: "СИЛ 6, ВНС 6",
    Description: "+50 переносимый вес",
  },
  "Implant GRX": {
    name: "Имплантат GRX",
    requirements_text: "ВНС 8",
    Description: "Вы получили инъектор для подкожного введения турбо (без привыкания). Эта способность может быть взята дважды, второй ранг увеличивает длительность с 2 до 3 секунд, а количество использований — с 5 до 10 раз за день. Активируется в инвентаре Пип-Боя.",
  },
  "Broad Daylight": {
    name: "Белый день",
    requirements_text: "",
    Description: "Нет штрафа к скрытности при включенном свете Пип-боя",
  },
  "Certified Tech": {
    name: "Сертифицированный техник",
    requirements_text: "",
    Description: "+25 % шанс критического попадания по роботам, 85 % шанс нахождения дополнительных вещей на уничтоженных роботах",
  },
  "Just Lucky I'm Alive": {
    name: "Выжить — это счастье",
    requirements_text: "Карма между −250 и 250",
    Description: "+4 УДЧ на 3 минуты по завершении сражения с ОЗ меньше 25 %; иммунитет к критическим попаданиям; + 50 % критический урон",
  },
  "Thought You Died": {
    name: "Неужели ещё жив",
    requirements_text: "Карма больше 250",
    Description: "+10 ОЗ за каждые 100 единиц кармы; карма сбрасывается на 0, +10 % повреждений; иммунитет к критическим попаданиям",
  },
  "Ain't Like That Now": {
    name: "Перерождение ",
    requirements_text: "Карма меньше −250",
    Description: "Карма сбрасывается на 0, +25 % регенерация ОД, +20 % скорость атаки, иммунитет к критическим попаданиям",
  },
  "Strength Implant": {
    name: "Имплантат силы",
    requirements_text: "Купить у доктора Усанаги за 4000 крышек",
    Description: "Ваша мускулатура была усовершенствована с помощью гипертрофикатора, и сила возросла на 1.",
  },
  "Perception Implant": {
    name: "Имплантат восприятия",
    requirements_text: "Купить у доктора Усанаги за 4000 крышек",
    Description: "Ваши глазные нервы были усовершенствованы с помощью оптического оптимизатора, и восприятие возросло на 1.",
  },
  "Endurance Implant": {
    name: "Имплантат выносливости",
    requirements_text: "Купить у доктора Усанаги за 4000 крышек",
    Description: "Ваша нервная система была усовершенствована с помощью ноцицептивного регулятора, и выносливость возросла на 1.",
  },
  "Charisma Implant": {
    name: "Имплантат харизмы",
    requirements_text: "Купить у доктора Усанаги за 4000 крышек",
    Description: "Ваш префронтальный кортикальный слой был улучшен с помощью эмпатического синтезатора, и харизма возросла на 1.",
  },
  "Intelligence Implant": {
    name: "Имплантат интеллекта",
    requirements_text: "Купить у доктора Усанаги за 4000 крышек",
    Description: "Ваш церебральный кортикальный слой был улучшен с помощью логического сопроцессора, и интеллект возрос на 1.",
  },
  "Agility Implant": {
    name: "Имплантат ловкости",
    requirements_text: "Купить у доктора Усанаги за 4000 крышек",
    Description: "Ваша центральная нервная система была усовершенствована с помощью ускорителя рефлексов, и ловкость возросла на 1.",
  },
  "Luck Implant": {
    name: "Имплантат удачи",
    requirements_text: "Купить у доктора Усанаги за 4000 крышек",
    Description: "Лобная доля вашего головного мозга была усовершенствована с помощью вероятностного калькулятора, и удача возросла на 1.",
  },
  "Monocyte Breeder": {
    name: "Моноцитарный мультипликатор",
    requirements_text: "Купить у доктора Усанаги за 12000 крышек",
    Description: "Ваша способность к регенерации была улучшена путём имплантации моноцитарного мультипликатора «Феникс», что позволяет вам медленно восстанавливать потерянные очки здоровья.",
  },
  "Sub-Dermal Armor": {
    name: "Субдермальная броня",
    requirements_text: "Купить у доктора Усанаги за 8000 крышек",
    Description: "Ваша кожа была укреплена Немейской субдермальной бронёй, увеличив суммарный порог урона на 4.",
  },
  "Coin Operator": {
    name: "Жетон в кармане",
    requirements_text: "Диалог с Кристин",
    Description: "Добавляет рецепт: 1 ядерная батарея + 2 штуки металлолома = 50 фишек «Сьерра-Мадре».",
  },
  "Ghost Hunter": {
    name: "Охотник на призраков",
    requirements_text: "Диалог с Догом",
    Description: "Призрачные люди чаще будут умирать без отрыва конечностей или дезинтеграции.",
  },
  "Sierra Madre Martini": {
    name: "Мартини «Сьерра-Мадре»",
    requirements_text: "Диалог с Дином Домино",
    Description: "Добавляет рецепт: 2 упаковки чипсов + 1 жестяная банка + 1 банка токсичных осадков = Мартини «Сьерра-Мадре».",
  },
  "Elijah's Last Words": {
    name: "Последние слова Элайджи",
    requirements_text: "Отдать Веронике голосообщение от Элайджи",
    Description: "Увеличивает скорость рукопашной атаки Вероники на 150 % и даёт ей 25 % шанс на опрокидывание противника.",
  },
  "Elijah's Ramblings": {
    name: "Техника Элайджи",
    requirements_text: "Оставить у себя голосообщение Элайджи после того, как Вероника откроет его",
    Description: "Увеличивает урон от критических ударов при атаке оружием ближнего боя на 50 %.",
  },
  "Brainless": {
    name: "Безмозглый",
    requirements_text: "Первоначальный диалог с доктором Клейном в Мозговом Центре.",
    Description: "Голову больше нельзя повредить; + 25 % сопротивления привыканию к наркотикам; + 5 % (+1) ПУ, если ваш ПУ< 10.",
  },
  "Heartless": {
    name: "Бессердечный",
    requirements_text: "Первоначальный диалог с доктором Клейном в Мозговом Центре.",
    Description: "Невосприимчивость к ядам; лечение + 25 %; у роботов в два раза снижен шанс на критическое попадание.",
  },
  "Spineless": {
    name: "Беспозвоночный",
    requirements_text: "Первоначальный диалог с доктором Клейном в Мозговом Центре.",
    Description: "Сила +1; ПУ + 1; торс больше нельзя повредить.",
  },
  "Big Brained": {
    name: "Большой ум",
    requirements_text: "Возможно получить у Автодока Умного Дома после завершения квеста «Блюз Старого Мира».",
    Description: "Голову больше нельзя повредить; + 10 % сопротивления привыканию к наркотикам; +10 % (+1) ПУ, если ваш ПУ < 10.",
  },
  "Cardiac Arrest": {
    name: "Остановка сердца",
    requirements_text: "Возможно получить у Автодока Умного Дома после завершения квеста «Блюз Старого Мира».",
    Description: "+50 % сопротивления ядам; лечение + 50 %; у роботов на четверть снижен шанс на критическое попадание.",
  },
  "Reinforced Spine": {
    name: "Усиленный хребет",
    requirements_text: "Возможно получить у Автодока Умного Дома после завершения квеста «Блюз Старого Мира».",
    Description: "Сила +2, ПУ +2.",
  },
  "DNAgent": {
    name: "ДНКойот",
    requirements_text: "Завершение теста на возвращение данных X-8.",
    Description: "Урон ночным охотникам увеличивается на 10 %.",
  },
  "DNAvenger": {
    name: "ДНКасадор",
    requirements_text: "Убить двух Касадоров для 1 ранга, ещё трёх для 2 ранга и ещё пятерых для 3 ранга. Все убийства должны быть совершены в Большой Горе.",
    Description: "Урон касадорам увеличивается на 10 % за каждый ранг.",
  },
  "Implant C-13": {
    name: "Имплантат C-13",
    requirements_text: "Возможно получить у Автодока за 8000 крышек.",
    Description: "Дополнительные 10 % урона касадорам.",
  },
  "Implant M-5": {
    name: "Имплантат M-5",
    requirements_text: "Возможно получить у Автодока за 10000 крышек.",
    Description: "Скорость при передвижении в режиме скрытности увеличена на 20 %.",
  },
  "Implant Y-3": {
    name: "Имплантат Y-3",
    requirements_text: "Возможно получить у Автодока за 12000 крышек.",
    Description: "Убирает радиацию при питье воды из зараженного источника.",
  },
  "Implant Y-7": {
    name: "Имплантат Y-7",
    requirements_text: "Возможно получить у Автодока за 20000 крышек.",
    Description: "+5 ОЗ и +2 восстановления ОД при потреблении еды.",
  },
  "The Bear-Slayer": {
    name: "Гроза медведей",
    requirements_text: "Запустить ядерные ракеты по НКР.",
    Description: "+1 очко S.P.E.C.I.A.L., положительная репутация у Легиона Цезаря, отрицательная — у НКР.",
  },
  "Scourge of the East": {
    name: "Бич Востока",
    requirements_text: "Запустить ядерные ракеты по Легиону Цезаря.",
    Description: "+1 очко S.P.E.C.I.A.L., положительная репутация у НКР, отрицательная — у Легиона Цезаря.",
  },
  "Dead Man's Burden": {
    name: "Удел мертвеца",
    requirements_text: "Запустить ядерные ракеты по Легиону Цезаря и НКР.",
    Description: "+1 очко S.P.E.C.I.A.L., положительная репутация у Бомбистов и Подрывников, отрицательная — у Легиона Цезаря и НКР.",
  },
  "Divide Survivor": {
    name: "Выживший в Разломе",
    requirements_text: "Остановить запуск ракет.",
    Description: "+1 очко S.P.E.C.I.A.L., положительная репутация у Братства Стали и Последователей Апокалипсиса.",
  },
  "Lonesome Road": {
    name: "Одинокая дорога",
    requirements_text: "Оставить ЭД-Э в Храме Улисса.",
    Description: "+10 % урон и +10 % шанс попадания в режиме V.A.T.S., когда игрок без напарников.",
  },
  "Marked": {
    name: "Меченый",
    requirements_text: "Убить троих именованных Меченых.",
    Description: "+10 % урон и +10 % ПУ против Меченых.",
  },
  "Legion Assault": {
    name: "Атака легионера",
    requirements_text: "Поговорить с Луцием; Без оружия:50; нейтрал в Легионе",
    Description: "Уникальная атака без оружия. Лучшие воины Цезаря, легендарные преторианцы, применяют против врагов знаменитую атаку легионера. Чтобы атаковать таким образом, разгоняйтесь и выполняйте силовую атаку.",
  },
  "Ranger Takedown": {
    name: "Бросок рейнджера",
    requirements_text: "Поговорить с рейнджером Энди",
    Description: "Уникальная атака без оружия. Будучи захвачены врасплох без оружия, рейнджеры Новой Калифорнийской Республики полагаются на свой бросок, чтобы быстро нейтрализовать врагов. Чтобы применить «бросок рейнджера», выполните силовую атаку, двигаясь назад.",
  },
  "Khan Trick": {
    name: "Ханское наследие",
    requirements_text: "Выполнить квест «Медовый месяц в Аба-Даба»",
    Description: "	Уникальная атака без оружия. Изучив грязные трюки Великих ханов, вы можете швырнуть пыль в лицо врагу и временно ослепить его. Чтобы сделать это, выполните силовую атаку, двигаясь налево или направо.",
  },
  "Scribe Counter": {
    name: "Приём писца",
    requirements_text: "Передать Веронике костюм — наряд общества «Белая перчатка»",
    Description: "Уникальная атака без оружия. Обычно Братство не уделяет внимание обучению писцов владению высокотехнологичными образцами огнестрельного и энергетического оружия. Им приходится учиться мастерскому использованию отточенных приемов защитного и контратакующего типа, таких, как «Приём писца». Атакуйте противника сразу после успешной блокировки удара в ближнем бою.",
  },
}