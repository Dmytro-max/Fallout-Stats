class CharacterCreationForm {
  character;
  constructor(char) {
    this.character = char;
  }

  SpecialBlocks = new Map();
  skillBlocks = new Map();
  skillBookBlocks = new Map();
  TraitBlocks = new Map();

  Abilities_Availible = new Map();
  Abilities_Added = new Map();

  BuildAbilities() {
    let character = this.character;

    let av_block;
    let added_block;
    for (let perkName in character.Main_Abilities) {
      [av_block, added_block] = this.AbilitieBlockBuild(
        character.Main_Abilities[perkName],
        perkName
      );
      this.Abilities_Availible.set(perkName, av_block);
      this.Abilities_Added.set(perkName, added_block);
    }
    // console.log(this.Abilities_Availible)
  }

  AbilitieBlockBuild(perk, perkName) {
    let av_block = document.createElement("div");
    av_block.id = perkName;
    av_block.classList = "ability main";
    let added_block = av_block.cloneNode(true);
    added_block.style.display = "none";

    let name = perk.name;
    let rangs = perk.rangs;
    let rang = perk.rang;
    let requirements_text = perk.requirements_text ?? "";

    let Av_RangArtickle = document.createElement("h4");
    Av_RangArtickle.className = "rang";
    Av_RangArtickle.textContent = `${rang}/${rangs}`;
    let Ad_RangArtickle = Av_RangArtickle.cloneNode(true);

    //??
    let Av_level = document.createElement("h4");
    Av_level.className = "level";
    Av_level.textContent = `${perk.level}`;
    let Ad_level = Av_level.cloneNode(true);
    // Ad_level.textContent = `${(perk?.level_taken !=null ? perk?.level_taken + '|' : '', perk.level) }`

    av_block.innerHTML += `<h4 lang="ru">${name}</h4>`;
    av_block.append(perk.type == "levelup" ? Av_level : "");
    av_block.innerHTML += `<a lang="ru">${requirements_text}</a>`;
    av_block.append(Av_RangArtickle);

    added_block.innerHTML += `<h4 lang="ru">${name}</h4>`;
    added_block.append(Ad_level);
    added_block.innerHTML += `<a lang="ru">${requirements_text}</a>`;
    added_block.append(Ad_RangArtickle);

    let description_text = perk.Description;
    let Av_Additional = document.createElement("div");
    Av_Additional.innerHTML = `<p class="description">${description_text}</p>`;
    Av_Additional.className = "additional";

    let Rangs = document.createElement("p");
    Rangs.className = "rangs";
    Rangs.innerHTML = perk.RangsAdded?.() ? "<h3>Ранги:</h3>" : "";

    let Ad_Additional = document.createElement("div");
    Ad_Additional.innerHTML = `<p class="description">${description_text}</p>`;
    Ad_Additional.className = "additional";
    Ad_Additional.appendChild(Rangs);

    let idiv = document.createElement("div");
    idiv.className = "unChecked";

    let i = document.createElement("i");
    i.classList = "checkbox";
    idiv.prepend(i);

    av_block.prepend(idiv);

    function CheckboxActivate(div) {
      //?? Change Name | Try to minimize clauses
      if (div.classList.contains("unChecked")) {
        switch (perk.type) {
          case "levelup":
            char.WishedLevelUpAbilitiesAmount += 1;
            DesiredLevelUpPerks.textContent = `Желанные способности: ${char.WishedLevelUpAbilitiesAmount}`;
            LevelForAllDesired.textContent = `Уровень для получения: ${
              char.WishedLevelUpAbilitiesAmount *
              char.levelsForPerk *
              perk.rangs
            }`;

            if (
              char.WishedLevelUpAbilitiesAmount * char.levelsForPerk >
              char.max_level
            ) {
              LevelForAllDesired.style.color = "red";
            }

            //Adding desired abilities to
            // if (!char.DesiredAbilities.has(perk.level)) {
            //     char.DesiredAbilities.set(perk.level, {});
            // }
            // if (!char.DesiredAbilities.get(perk.level)[`${perk.type}`]) {
            //     char.DesiredAbilities.get(perk.level)[`${perk.type}`] = new Set();
            // }
            // char.DesiredAbilities.get(char.level)[`${perk.type}`].add(name)

            break;
          case "special":
            char.WishedSpecialAbilitiesAmount += 1;
            DesiredSpecialPerks.textContent = `Желанные способности: ${char.WishedSpecialAbilitiesAmount}`;
            break;
          case "implant":
            char.WishedImplantAbilitiesAmount += 1;
            DesiredImplantPerks.textContent = `Желанные способности: ${char.WishedImplantAbilitiesAmount}`;

            if (char.WishedLevelUpAbilitiesAmount > char.SPECIAL["Endurance"]) {
              LevelForAllDesired.style.color = "red";
            }
            break;
        }

        div.classList.replace("unChecked", "Checked");
        div.closest("div.ability").classList.add("desired");
      } else {
        switch (perk.type) {
          case "levelup":
            char.WishedLevelUpAbilitiesAmount -= 1;
            DesiredLevelUpPerks.textContent = `Желанные способности: ${char.WishedLevelUpAbilitiesAmount}`;
            LevelForAllDesired.textContent = `Уровень для получения: ${
              char.WishedLevelUpAbilitiesAmount *
              char.levelsForPerk *
              perk.rangs
            }`;

            if (
              char.WishedLevelUpAbilitiesAmount * char.levelsForPerk <=
              char.max_level
            ) {
              LevelForAllDesired.style.color = "--main-text-color"; //?? To look for more elegant way
            }
            break;
          case "special":
            char.WishedSpecialAbilitiesAmount -= 1;
            DesiredSpecialPerks.textContent = `Желанные способности: ${char.WishedSpecialAbilitiesAmount}`;
            break;
          case "implant":
            char.WishedImplantAbilitiesAmount -= 1;
            DesiredImplantPerks.textContent = `Желанные способности: ${char.WishedImplantAbilitiesAmount}`;

            if (
              char.WishedLevelUpAbilitiesAmount <= char.SPECIAL["Endurance"]
            ) {
              LevelForAllDesired.style.color = "--main-text-color";
            }
            break;
        }

        div.classList.replace("Checked", "unChecked");
        div.closest("div.ability").classList.remove("desired");
      }
    }
    idiv.addEventListener("click", () => CheckboxActivate(idiv));

    av_block.appendChild(Av_Additional);
    added_block.appendChild(Ad_Additional);

    av_block.addEventListener("click", () =>
      ElemDescription(Desc, char.Main_Abilities[av_block.id])
    );
    added_block.addEventListener("click", () =>
      ElemDescription(Desc, char.Main_Abilities[av_block.id])
    );
    //
    av_block.addEventListener("click", () => this.AbilitieTargeting(av_block));
    added_block.addEventListener("click", () =>
      this.AbilitieTargeting(added_block)
    );

    added_block.addEventListener(
      "dblclick",
      () => (Ability_Remove(char, av_block.id), this.UpdateInterface(char))
    );
    //if ability require some more specific actions from player(choosing parameter to increase)

    // console.log(perkName)

    if ("SpecialWindow" in perk) {
      this.SpecialWindowCreate(char, perk, av_block.id);
    } else if ("SkillWindow" in perk) {
      this.SkillsWindowCreate(char, perk, av_block.id);
    } else {
      av_block.addEventListener(
        "dblclick",
        () => (Ability_Add(char, av_block.id), this.UpdateInterface(char))
      );
    }
    //!!Unite?
    if ("SpecialWindow" in perk) {
      Av_Additional.appendChild(perk.SpecialWindow["window"]);
    } else if ("SkillWindow" in perk) {
      Av_Additional.appendChild(perk.SkillWindow["window"]);
    }

    return [av_block, added_block];
  }
  Abilities_AveilabilityCheck() {
    let char = this.character;

    for (let perkName in char.Main_Abilities) {
      let perk = char.Main_Abilities[perkName];
      let av_block = this.Abilities_Availible.get(perkName);
      let added_block = this.Abilities_Added.get(perkName);

      if (char.Abilitie_IsAvailible(perk, perkName)) {
        av_block.classList.remove("unAvailible");
      } else {
        av_block.classList.add("unAvailible");
      }

      if (char.Abilitie_IsRemovable(perk, perkName)) {
        added_block.classList.remove("unAvailible");
      } else {
        added_block.classList.add("unAvailible");
      }
    }
  }

  InsertAbilities() {
    //?? Purpose? Should be called once?
    char = this.character;
    for (let key in char.Main_Abilities) {
      let av_block = this.Abilities_Availible.get(key);
      let added_block = this.Abilities_Added.get(key);

      // Level_Availible.append(av_block);
      // Level_Added.append(added_block);
      switch (char.Main_Abilities[key].type) {
        case "levelup":
          Level_Availible.append(av_block);
          Level_Added.append(added_block);
          break;
        case "special":
          Availible.append(av_block);
          Added.append(added_block);
          break;
        case "implant":
          ImplantsAvailible.append(av_block);
          ImplantsAdded.append(added_block);
          break;
      }
    }
  }

  UpdateInterface(char) {
    // char = this.character;
    for (let key in char.SPECIAL) {
      char.SpecialBlocks["values"].get(key).textContent =
        char.SPECIAL[key].value;
    }
    SpecialPointsLabel.textContent = `SPECIAL ${char.Special_BonusPoints}`;
    // char.skillscount()
    char.total = Math.floor(
      char.inup_level * (10 + (char.SPECIAL["Intelligence"].value - 1) / 2) +
        (10 + char.SPECIAL["Intelligence"].value / 2) *
          (char.max_level - 1 - char.inup_level)
    );

    for (let skill in char.skills) {
      char.skillBlocks.get(skill).value.textContent =
        char.skills[skill].value(char);
    }
    let skillPoints_aveilible = char.skillsByLevel[char.level - 1]["points"];
    let skillPoints_spent = char.skillsByLevel[char.level - 1]["spent"];

    bonus.textContent = `Skills ${char.prizeSkillsAveilible}/3`;
    // max.textContent = `Skill points on the ${char.max_level}:` + (char.total);
    max.textContent = `Skill points aveilible ${
      Math.floor(skillPoints_aveilible) - skillPoints_spent
    }`;
    need.textContent = `Needed: ${char.neededSkillsCount()}`;
    // CharlevelChoose.textContent = `Уровень Героя ${char.level}`

    for (let key in char.derived) {
      char.derivedBlocks.get(key).textContent = char.derived[key].value(char);
    }

    // InsertAbilities(char);//?? Should be called only once?
    this.Abilities_AveilabilityCheck(char);
    SpecialUpDownCheck(char);
    SkillsUpDownCheck(char);
  }

  SkillsBuild(char) {
    //?? To review further
    //?? To change key to skillName
    let liSet = new Set();

    const SkillMainCreate = (skillObject, skill, skillName) => {
      let maindiv = document.createElement("div");
      maindiv.id = skillName;
      maindiv.classList = `skill main unChecked`;

      let i = document.createElement("i");
      i.classList = "checkbox";
      maindiv.appendChild(i);

      let img = document.createElement("img");
      img.src = `Icons/${skillName}.webp`;
      maindiv.appendChild(img);

      let value = document.createElement("a");
      value.id = skillName;
      value.className = "value";
      maindiv.appendChild(value);

      let name = document.createElement("a");
      name.textContent = skill.name;
      maindiv.appendChild(name);

      skillObject["block"] = maindiv;
      skillObject["value"] = value;

      return maindiv;
    };
    const SkillBooksFill = (key, char) => {
      let ul = document.createElement("ul");
      ul.classList = "books_side unactive";
      ul.id = key + "List";

      if ("Books" in char.skills[key]) {
        let li = document.createElement("li");
        let bookdiv = document.createElement("div");
        bookdiv.className = "unChecked";
        let i = document.createElement("i");
        i.classList = "books all";
        bookdiv.appendChild(i);

        let select = document.createElement("select");
        select.name = key;
        select.id = key + "Book_level";
        select.classList = "level_select all";
        char.skillBookBlocks.set(select.name, {
          //?? To move to Form class
          select: select,
          BookLevels: new Map(),
        });

        let location = document.createElement("h2");
        location.textContent = "Локация";
        let details = document.createElement("h2");
        details.textContent = "Детали";

        li.appendChild(bookdiv);
        li.appendChild(select);
        li.appendChild(location);
        li.appendChild(details);

        for (let i = 0; i < char.skills[key].Books.length; i++) {
          fillBooks(li, char.skills[key].Books[i], i, key);
        }
        ul.appendChild(li);

        //There a few instances of each skillBook can be found in the game, therefore number determines which book is chosen
        function fillBooks(li, book, number, skill) {
          let idiv = document.createElement("div");
          idiv.className = "unChecked";
          idiv.dataset.skill = skill;
          idiv.dataset.number = number;

          idiv.addEventListener("click", CheckboxActivate);

          function CheckboxActivate(event) {
            let div = event.target.closest("div");
            number = div.dataset.number;
            skill = div.dataset.skill;
            if (div.classList.contains("unChecked")) {
              char.skillsByLevel[char.level - 1][skill] += char.skillbook_bonus;
              char.skills[skill].bonus += char.skillbook_bonus;
              char.skills[skill].Books[number].level = char.level;

              char.skillBookBlocks
                .get(skill)
                ["BookLevels"].get(number).textContent = char.level;
              div.classList.replace("unChecked", "Checked");
            } else {
              let level = char.skills[skill].Books[number].level;
              char.skills[skill].Books[number].level = null;

              char.skillsByLevel[level - 1][skill] -= char.skillbook_bonus;
              char.skills[skill].bonus -= char.skillbook_bonus;
              char.skillBookBlocks
                .get(skill)
                ["BookLevels"].get(number).textContent = "";
              div.classList.replace("Checked", "unChecked");
            }
            this.UpdateInterface(char);
          }

          li.appendChild(idiv);

          let i = document.createElement("i");
          i.classList = "books checkbox";
          idiv.appendChild(i);

          let level = document.createElement("h2");
          level.className = "book_level";
          level.id = select.name + number; //?? To change select.name to skill
          char.skillBookBlocks
            .get(skill)
            ["BookLevels"].set(idiv.dataset.number, level); //??
          li.appendChild(level);

          let location = document.createElement("a");
          location.textContent = book.location;
          location.lang = "ru";
          li.appendChild(location);

          let details = document.createElement("a");
          details.textContent = book.details;
          details.lang = "ru";
          details.className = "details";
          li.appendChild(details);
        }
        liSet.add(li);
        return ul;
      }
    };
    const SkillFullCreate = (key, char) => {
      let fulldiv = document.createElement("div");
      fulldiv.className = "full";

      let skillObject = {
        name: key,
      };
      let skill = char.skills[key];
      let maindiv = SkillMainCreate(skillObject, skill, key);
      maindiv.addEventListener(
        "click",
        () => (
          char.Choose_PrizeSkill(maindiv.id),
          update_ChoosenPrizeSkills(char),
          this.UpdateInterface(char),
          ElemDescription(Desc, char.skills[maindiv.id])
        )
      );

      fulldiv.append(maindiv);

      let down = document.createElement("button");
      down.id = key;
      down.className = "down";
      down.textContent = "-";
      down.addEventListener(
        "click",
        () => (Skill_down(down.id, char), this.UpdateInterface(char))
      );
      down.disabled = true; //?? Maybe should be removed and then state should be updateted with method
      fulldiv.appendChild(down);

      let up = document.createElement("button");
      up.id = key;
      up.className = "up";
      up.addEventListener(
        "click",
        () => (Skill_up(up.id, char), this.UpdateInterface(char))
      );
      up.textContent = "+";
      up.disabled = true; //??
      fulldiv.appendChild(up);

      let ul = SkillBooksFill(key, char);
      fulldiv.appendChild(ul);

      skillObject["up"] = up;
      skillObject["down"] = down;
      char.skillBlocks.set(key, skillObject);

      SkillsContainer.append(fulldiv);
    };

    for (let key in char.skills) {
      SkillFullCreate(key, char);
    } //intendation for books

    SkillBooksPositioning(liSet);
    function SkillBooksPositioning(liSet) {
      const skillsHeadHeight = 3.12;
      const skillBlockHeight = 2.8;
      const rem = 16;

      const totalNumberOfSkills = Object.keys(char.skills).length;

      let number = 0;
      for (let elem of liSet) {
        let elemHeight = elem.offsetHeight / rem;
        //if elem height is lower than position
        if (elemHeight * 0.3 < skillsHeadHeight + skillBlockHeight * number) {
          elem.style.top = -(elemHeight * 0.3) + "rem";
        } else {
          elem.style.top = -3.12 + "rem";
        }
        //if elem height is higher than height of skillBlocks left
        if (
          elemHeight >
          skillBlockHeight * (totalNumberOfSkills - number - 1)
        ) {
          elem.style.top =
            -(elemHeight - skillBlockHeight * (totalNumberOfSkills - number)) +
            "rem";
        }
        number++;
      }
    }

    CharacterlevelSelector.insertAdjacentHTML(
      "beforeend",
      `<option value="${char.level}">${char.level}</option>`
    );
    for (let key in char.skills) {
      //??TO Consider moving along with player level selector to separate function
      char.skillBookBlocks
        .get(key)
        ["select"].insertAdjacentHTML(
          "beforeend",
          `<option value="${char.level}">${char.level}</option>`
        );
      char.skillBookBlocks.get(key)["select"].selectedIndex = char.level - 1;
    }
  }
  DerivedBuild(char) {
    for (let key in char.derived) {
      let div = document.createElement("div");
      div.id = key;
      let name = document.createElement("a");
      name.textContent = char.derived[key].abreviation;
      let value = document.createElement("a");
      value.className = "derived_value";
      value.id = key;

      char.derivedBlocks.set(key, value);
      div.appendChild(name);
      div.appendChild(value);
      DerivedBlock.appendChild(div);
      div.addEventListener("click", () =>
        ElemDescription(Desc, char.derived[div.id])
      );
    }
  }
  TraitsBuild(char) {
    for (let key in char.traits) {
      let traitDiv = document.createElement("div");
      traitDiv.id = key;
      traitDiv.classList = "trait main unChecked";

      let i = document.createElement("i");
      i.classList = "checkbox";
      traitDiv.appendChild(i);

      let img = document.createElement("img");
      img.src = `Icons/${key}.webp`;
      traitDiv.appendChild(img);

      let name = document.createElement("a");
      name.textContent = char.traits[key].name;
      traitDiv.appendChild(name);

      TraitsContainer.appendChild(traitDiv);

      traitDiv.addEventListener(
        "click",
        () => (
          Choose_trait(char, traitDiv, traitDiv.id),
          update_ChosenTraits(char),
          this.UpdateInterface(char),
          ElemDescription(Desc, char.traits[key])
        )
      );

      char.TraitBlocks.set(traitDiv.id, traitDiv);
    }
  }

  LastTarget;
  AbilitieTargeting(target) {
    if (target != this.LastTarget) {
      if (this.LastTarget != undefined) {
        this.LastTarget.classList.toggle("targeted");
      }
      target.classList.toggle("targeted");
      this.LastTarget = target;
      let name = target.id;
      char.Main_Abilities[name].UnWrap?.(char);
    }
  }

  //to finish
  SpecialBuild(char) {
    for (attribute in char.SPECIAL) {
      let SpecialObject = {};

      SpecialFullCreate(attribute, char, SpecialObject);
    }
    function SpecialFullCreate(attribute, char) {
      let fulldiv = document.createElement("div");
      fulldiv.className = "full";

      let img = document.createElement("img");
      img.src = `Icons/${attribute}.webp`;
      fulldiv.appendChild(img);

      let value = document.createElement("a");
      value.id = attribute;
      value.className = "value";
      fulldiv.appendChild(value);

      let name = document.createElement("a");
      name.textContent = skill.name;
      fulldiv.appendChild(name);

      SpecialObject["value"] = value;

      // let special = char.SPECIAL[attribute];
      fulldiv.addEventListener("click", () =>
        ElemDescription(Desc, char.skills[value.id])
      );

      let down = document.createElement("button");
      down.id = attribute;
      down.className = "down";
      down.textContent = "-";
      down.addEventListener(
        "click",
        () => (Special_down(down.id, char), this.UpdateInterface(char))
      );
      down.disabled = true;
      fulldiv.appendChild(down);

      let up = document.createElement("button");
      up.id = attribute;
      up.className = "up";
      up.addEventListener(
        "click",
        () => (Special_up(up.id, char), this.UpdateInterface(char))
      );
      up.textContent = "+";
      fulldiv.appendChild(up);

      SpecialObject["up"] = up;
      SpecialObject["down"] = down;
      char.skillBlocks.set(attribute, skillObject); //??

      SpecialContainer.append(fulldiv);
    }
  }
  SpecialBlockCreate(char) {
    let window = {
      //?? Consider changing format: Map(key: "Special attribute", value: {up: button, down: button, value: a})
      values: new Map(),
      downs: new Map(),
      ups: new Map(),
    };
    char.SpecialBlocks = window;

    let Stats = document.createElement("div");
    Stats.classList = "Stats Special";
    for (let attribute in char.SPECIAL) {
      let wrapdiv = document.createElement("div");
      let name = char.SPECIAL[attribute].name;

      let up = document.createElement("button");
      up.textContent = "+";
      up.name = attribute;
      up.className = "up";
      up.addEventListener("click", () => {
        Special_up(char, up.name);
        SpecialUpDownCheck(char);
        this.UpdateInterface(char);
      });

      let down = document.createElement("button");
      down.textContent = "-";
      down.name = attribute;
      down.className = "down";
      down.addEventListener("click", () => {
        Special_down(char, down.name);
        SpecialUpDownCheck(char);
        this.UpdateInterface(char);
      });

      let value = document.createElement("a");
      value.setAttribute("name", attribute);
      value.className = "value";

      wrapdiv.insertAdjacentHTML(
        "beforeend",
        `<img src="Icons/${attribute}_icon.webp">`
      );
      wrapdiv.append(value);
      wrapdiv.insertAdjacentHTML("beforeend", `<a>${name}</a>`);
      wrapdiv.append(down);
      wrapdiv.append(up);
      Stats.append(wrapdiv);
      window["ups"].set(attribute, up);
      window["downs"].set(attribute, down);
      window["values"].set(attribute, value);
    }

    Special.appendChild(Stats);
  }
  SpecialWindowCreate(char, elem, Perkname) {
    let SpecialWindow = {
      values: new Map(),
      downs: new Map(),
      ups: new Map(),
      article: true,
      window: null,
    };
    elem.SpecialWindow = SpecialWindow;
    let windowBlock = document.createElement("div");

    windowBlock.className = "window";
    SpecialWindow["window"] = windowBlock;

    let h3 = document.createElement("h3");
    SpecialWindow["article"] = h3;
    windowBlock.appendChild(h3);
    // let stored = document.createElement('h3');

    let Stats = document.createElement("div");
    Stats.classList = "Stats Special";
    for (let key in char.SPECIAL) {
      // let name =
      let wrapdiv = document.createElement("div");
      // console.log(char)
      let name = char.SPECIAL[key].name;

      let up = document.createElement("button");
      up.textContent = "+";
      up.name = key;
      up.className = "up";
      up.addEventListener("click", () => {
        let name = event.currentTarget.name;
        if (elem.points > 0) {
          elem.SPECIAL[name] += 1;
          elem.points -= 1;
          elem.spent += 1;

          elem.Increased[elem.rang] = name;
          SpecialWindow["reset"].disabled = false;
          if (elem.points == 0) {
            SpecialWindow["accept"].disabled = false;
            for (up of SpecialWindow["ups"].values()) {
              up.disabled = true;
            }
          }

          SpecialWindow["downs"].get(name).disabled = false;
          SpecialWindow["values"].get(name).textContent = elem.SPECIAL[name];

          SpecialWindow["article"].textContent = `SPECIAL ${elem["points"]}`;
        }
      });
      SpecialWindow["ups"].set(key, up);

      let down = document.createElement("button");
      down.textContent = "-";
      down.name = key;
      down.className = "down";
      down.addEventListener("click", () => {
        let name = down.name;
        if (elem.spent > 0) {
          elem.SPECIAL[name] -= 1;
          elem.points += 1;
          elem.spent -= 1;
          console.log("up");

          SpecialWindow["ups"].get(name).disabled = false;

          SpecialWindow["values"].get(name).textContent = elem.SPECIAL[name];
          SpecialWindow["article"].textContent = `SPECIAL ${elem["points"]}`;

          SpecialWindow["accept"].disabled = true;
          if (elem.spent == 0) {
            SpecialWindow["reset"].disabled = true;
            for (down of SpecialWindow["downs"].values()) {
              down.disabled = true;
            }
            for (up of SpecialWindow["ups"].values()) {
              up.disabled = false;
            }
          }
        }
      });
      SpecialWindow["downs"].set(key, down);
      down.disabled = true;

      let value = document.createElement("a");

      value.setAttribute("name", key);
      value.className = "value";
      SpecialWindow["values"].set(down.name, value);

      wrapdiv.insertAdjacentHTML(
        "beforeend",
        `<img src="Icons/${key}_icon.webp">`
      );
      wrapdiv.append(value);
      wrapdiv.insertAdjacentHTML("beforeend", `<a>${name}</a>`);
      wrapdiv.append(down);
      wrapdiv.append(up);
      Stats.append(wrapdiv);
    }

    windowBlock.appendChild(Stats);
    createControl();

    function createControl() {
      let control = document.createElement("div");
      control.className = "control";

      let reset = document.createElement("button");
      reset.id = "reset";
      reset.textContent = "Сброс";

      reset.addEventListener("click", () => {
        for (key in elem.SPECIAL) {
          elem.SPECIAL[key] = char.SPECIAL[key].value;
          elem.SpecialWindow["values"].get(key).textContent =
            char.SPECIAL[key].value;
          elem.points += elem.spent;
          elem.spent = 0;
          elem.SpecialWindow["article"].textContent = "SPECIAL " + elem.points;
          SpecialWindow["downs"].get(key).disabled = true;
          SpecialWindow["ups"].get(key).disabled = false;
        }
      });

      let accept = document.createElement("button");
      accept.id = "accept";
      accept.textContent = "Готово";
      accept.addEventListener("click", () => {
        let name = elem.Increased[elem.rang];
        for (key in elem.SPECIAL) {
          SpecialWindow["downs"].get(key).disabled = true;
        }
        reset.disabled = true;
        accept.disabled = true;

        Ability_Add(char, Perkname);
        this.UpdateInterface(char);
      });
      SpecialWindow["accept"] = accept;
      SpecialWindow["reset"] = reset;
      elem.SpecialWindow["accept"].disabled = true;
      elem.SpecialWindow["reset"].disabled = true;

      control.appendChild(reset);
      control.appendChild(accept);

      windowBlock.appendChild(control);
    }
  }
  SkillsWindowCreate(char, elem, Perkname) {
    let windowBlock = document.createElement("div");
    let SkillWindow = {
      values: new Map(),
      blocks: new Map(),
      article: null,
      window: windowBlock,
      reset: null,
      accept: null,
    };
    elem.SkillWindow = SkillWindow;

    windowBlock.className = "window";
    // windowBlock.id = '';
    SkillWindow["window"] = windowBlock;

    let h3 = document.createElement("h3");
    SkillWindow["article"] = h3;

    windowBlock.appendChild(h3);

    let Stats = document.createElement("div");
    Stats.classList = "Stats";
    Stats.appendChild(h3);
    windowBlock.appendChild(Stats);

    for (let key in char.skills) {
      let id = key;
      let wrapdiv = document.createElement("div");
      wrapdiv.classList = "main unChecked";
      wrapdiv.id = id;
      let i = document.createElement("i");
      i.className = "checkbox";

      let name = char.skills[key].name;

      let value = document.createElement("a");

      value.setAttribute("name", key);
      value.className = "value";

      wrapdiv.append(i);
      wrapdiv.insertAdjacentHTML("beforeend", `<img src="Icons/${key}.webp">`);
      wrapdiv.append(value);
      wrapdiv.insertAdjacentHTML("beforeend", `<a>${name}</a>`);
      Stats.append(wrapdiv);

      SkillWindow["values"].set(id, value);
      SkillWindow["blocks"].set(id, wrapdiv);
      wrapdiv.addEventListener("click", () => {
        if (wrapdiv.classList.contains("unChecked")) {
          // console.log((100 - char.skills[id].value(char)) < 15)
          if (100 - char.skills[id].value(char) > 15 && elem.points > 0) {
            value.textContent = char.skills[id].value(char) + 15;
            wrapdiv.classList.replace("unChecked", "Checked");
            elem.Increased = wrapdiv.id;
            elem.SkillWindow["accept"].disabled = false;
            elem.SkillWindow["reset"].disabled = false;
            elem.points -= 1;
            elem.SkillWindow["article"].textContent = "Skills " + elem.points;
          }
        } else if (wrapdiv.classList.contains("Checked")) {
          if (char.skills[id].bonus < 15) {
            value.textContent = char.skills[id].value(char) - 15;
            wrapdiv.classList.replace("Checked", "unChecked");
            elem.Increased = wrapdiv.id;
            elem.SkillWindow["accept"].disabled = true;
            elem.SkillWindow["reset"].disabled = true;
            elem.points += 1;
            elem.SkillWindow["article"].textContent = "Skills " + elem.points;
          }
        }
      });
    }

    windowBlock.appendChild(Stats);
    createControl();

    function createControl() {
      let control = document.createElement("div");
      control.className = "control";

      let reset = document.createElement("button");
      reset.id = "reset";
      reset.textContent = "Сброс";

      reset.addEventListener("click", () => {
        elem.SkillWindow["blocks"]
          .get(elem.Increased)
          .classList.replace("Checked", "unChecked");
        char.SkillWindow["values"].get(elem.Increased).textContent =
          char.skills.value(char);
        elem.points += 1;
        elem.SkillWindow["article"].textContent = "Skills " + elem.points;
      });

      let accept = document.createElement("button");
      accept.id = "accept";
      accept.textContent = "Готово";
      accept.addEventListener("click", () => {
        let name = elem.Increased;

        Ability_Add(char, Perkname);
        this.UpdateInterface(char);
      });
      SkillWindow["accept"] = accept;
      SkillWindow["reset"] = reset;
      elem.SkillWindow["accept"].disabled = true;
      elem.SkillWindow["reset"].disabled = true;

      control.appendChild(reset);
      control.appendChild(accept);

      windowBlock.appendChild(control);
    }
  }
}
//?? To Consider making properties of class
