FormPreparetoUse()
let Special_ups = Special.querySelectorAll('.up')
let Special_downs = Special.querySelectorAll('.down')

let SkillBlocks = document.querySelectorAll('.Skill')
let TraitBlocks = document.querySelectorAll('.trait')


function FormPreparetoUse () {
    fnvCreatorChoice.dispatchEvent(new Event('click'))
}

const SpecialsQuality = 7
function firstToSecondLevel() {
    let clickE = new Event("click")

    skillsNames = Object.keys(char.skills)
    
    while (char.Special_BonusPoints > 0) {
        
        let randomSPECIAL = Special_ups[getRandomInt(SpecialsQuality)]

        randomSPECIAL.dispatchEvent(clickE)
    }

    for (let name_index = 0; name_index < skillsNames.length && char.prizeSkillsAveilible > 0; name_index++) {
        
        let skill = skillsNames[name_index];
        
        char.skillBlocks.get(skill).block.dispatchEvent(clickE);
    }
    for (let trait = 1; char.traits_Aveilible > 0; trait+=2) {
        TraitBlocks[trait].dispatchEvent(clickE);
    }

    CharLevelup.dispatchEvent(clickE);
}

// firstToSecondLevel()
