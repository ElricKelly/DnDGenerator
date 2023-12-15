const npcData = {
    name: "",
    gender: "",
    culture: "",
    titles: [],
    nicknames: [],
    class: "",
    subclass: "",
    race: "",
    visualTraits: [],
    personalityTraits: [],
    background: "",
    physicalFlaws: [],
    existentialFlaws: []
  };

  function populateForm() {
    document.getElementById('nameInput').value = npcData.name;
    document.getElementById('genderSelect').value = npcData.gender;
    document.getElementById('cultureSelect').value = npcData.culture;
    document.getElementById('titleSelect').value = npcData.title;
    document.getElementById('nicknameSelect').value = npcData.nickname;
    document.getElementById('classSelect').value = npcData.class;
    document.getElementById('subclassSelect').value = npcData.subclass;
    document.getElementById('raceSelect').value = npcData.race;
    document.getElementById('visualTraitsSelect').value = npcData.visualTraits;
    document.getElementById('personalityTraitsSelect').value = npcData.personalityTraits;
    document.getElementById('backgroundSelect').value = npcData.background;
    document.getElementById('physicalFlawsSelect').value = npcData.physicalFlaws;
    document.getElementById('existentialFlawsSelect').value = npcData.existentialFlaws;
  }

function generateNPC() {
    const selectedRace = document.getElementById('raceSelect').value;
    const selectedClass = document.getElementById('classSelect').value;
  
    const npc = {
      race: selectedRace,
      class: selectedClass,
      profession: npcOptions.professions[Math.floor(Math.random() * npcOptions.professions.length)],
      personality: npcOptions.personalities[Math.floor(Math.random() * npcOptions.personalities.length)]
    };
}

document.getElementById('generateButton').addEventListener('click', generateNPC);