function populateBackgrounds(){
    // Fetch JSON data
fetch('background/backgroundData.json')
.then(response => response.json())
.then(data => {
  // Get reference to the select element
  const selectElement = document.getElementById('backgroundSelect');

  // Loop through the data and create options
  data.forEach(option => {
    const optionElem = document.createElement('option');
    optionElem.value = option; // Set the value (can be the same as the option text)
    optionElem.textContent = option; // Set the text displayed to the user
    selectElement.appendChild(optionElem); // Append the option to the select element
  });
})
.catch(error => {
  console.error('Error fetching or parsing data:', error);
});
}

function populateClass(){
    // Fetch JSON data
fetch('class/classData.json')
.then(response => response.json())
.then(data => {
  // Get reference to the select element
  const selectElement = document.getElementById('classSelect');

  // Loop through the data and create options
  data.forEach(option => {
    const optionElem = document.createElement('option');
    optionElem.value = option.class; // Set the value (can be the same as the option text)
    optionElem.textContent = option.class; // Set the text displayed to the user
    selectElement.appendChild(optionElem); // Append the option to the select element
  });
})
.catch(error => {
  console.error('Error fetching or parsing data:', error);
});
}

function populateSubclass() {
    fetch('class/classData.json')
      .then(response => response.json())
      .then(data => {
        const selectElement = document.getElementById('subclassSelect');
        const selectedClass = document.getElementById('classSelect').value;
  
        // Clear previous options in subclassSelect
         selectElement.innerHTML = '';

        if (selectedClass && selectedClass !== 'random') {
          const selectedClassData = data.find(item => item.class === selectedClass);
          if (selectedClassData) {
            selectedClassData.subclasses.forEach(subclass => {
              const optionElem = document.createElement('option');
              optionElem.value = subclass;
              optionElem.textContent = subclass;
              selectElement.appendChild(optionElem);
            });
          }
        }
        else{
            const optionElem = document.createElement('option');
              optionElem.value = "random"
              optionElem.textContent =  "Random"
              selectElement.appendChild(optionElem);
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing data:', error);
      });
  }

  function populateCulture(){
    // Fetch JSON data
fetch('names/cultureData.json')
.then(response => response.json())
.then(data => {
  // Get reference to the select element
  const selectElement = document.getElementById('cultureSelect');

  // Loop through the data and create options
  data.forEach(option => {
    const optionElem = document.createElement('option');
    optionElem.value = option; // Set the value (can be the same as the option text)
    optionElem.textContent = option; // Set the text displayed to the user
    selectElement.appendChild(optionElem); // Append the option to the select element
  });
})
.catch(error => {
  console.error('Error fetching or parsing data:', error);
});
}

function populateRace(){
    // Fetch JSON data
fetch('race/raceData.json')
.then(response => response.json())
.then(data => {
  // Get reference to the select element
  const selectElement = document.getElementById('raceSelect');

  // Loop through the data and create options
  data.forEach(option => {
    const optionElem = document.createElement('option');
    optionElem.value = option; // Set the value (can be the same as the option text)
    optionElem.textContent = option; // Set the text displayed to the user
    selectElement.appendChild(optionElem); // Append the option to the select element
  });
})
.catch(error => {
  console.error('Error fetching or parsing data:', error);
});
}

document.addEventListener('DOMContentLoaded', populateBackgrounds);
document.addEventListener('DOMContentLoaded', populateClass);
document.addEventListener('DOMContentLoaded', populateCulture);
document.addEventListener('DOMContentLoaded', populateRace);
document.getElementById('classSelect').addEventListener('change', event => {
    populateSubclass()
})