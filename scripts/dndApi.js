// Function to fetch monsters based on type
async function fetchMonsters(type) {
    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/monsters?&type=${type}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching monsters:', error);
      return [];
    }
  }

  // Function to format the monster name for API call
function formatMonsterName(name) {
    return name.toLowerCase().replace(/ /g, '-');
  }
  
  // Function to fetch a specific monster by name
  async function fetchMonsterByName(name) {
    try {
      const formattedName = formatMonsterName(name);
      const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${formattedName}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching monster details:', error);
      return null;
    }
  }
  
  // Event listener for button click to fetch and display dragons
  document.getElementById('fetchMonstersButton').addEventListener('click', displayDragons);