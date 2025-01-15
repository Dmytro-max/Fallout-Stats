Desc = document.querySelector("#Description");
// let Traits = document.querySelectorAll('#Traits>.Stats>div')
const Special = document.querySelector("#SPECIAL");
const SpecialPointsLabel = document.querySelector("#SPECIAL>h3");
const SpecialContainer = document.querySelector("#SPECIAL>.Stats");
const Skills = document.querySelector("#Skills");
const SkillsContainer = document.querySelector("#Skills>.Stats");
const TraitsContainer = document.querySelector("#Traits>.Stats");
const DerivedBlock = document.querySelector("#Derived");

let Special_Values = document.querySelectorAll("#SPECIAL .value");
let Skill_Values = document.querySelectorAll("a.Value");
let Skills_up = document.querySelectorAll(".full>.up");
let Skills_down = document.querySelectorAll(".full>.down");
let SpecialPoints_Label = document.querySelector("#SPECIAL>h3");

let Desired_LevelUpPerks = document.querySelector("#DesiredLevelUpPerks");
let LevelForAllDesired = document.querySelector("#LevelForAllDesired");
let Desired_SpecialPerks = document.querySelector("#DesiredSpecialPerks");
let Desired_ImplantPerks = document.querySelector("#DesiredImplantPerks");

let AbilitiesBlock = document.querySelector("#Abilities");
let Level_Availible = document.querySelector(".Choose_list");
let Level_Added = document.querySelector(".added");

let Availible = document.querySelector("#Special_Abilities .Choose_list");
let Added = document.querySelector("#Special_Abilities .added");

let ImplantsAvailible = document.querySelector(
  "#Implants_Abilities .Choose_list"
);
let ImplantsAdded = document.querySelector("#Implants_Abilities .added");

const _skillUpStep = 5;
