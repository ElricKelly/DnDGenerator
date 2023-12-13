async function generateRandom() {
    const randomType = document.getElementById('randomType').value;
    const raceFilter = document.getElementById('raceFilter').value;
    const itemFilter = document.getElementById('itemFilter').value;
  
    let apiUrl = '';
    let output = '';
  
    if (randomType === 'character') {
      apiUrl = `https://api.open5e.com/characters/?race=${raceFilter}`;
      output = await fetchData(apiUrl);
    } else if (randomType === 'loot') {
      apiUrl = `https://api.open5e.com/magicitems/?type=${itemFilter}`;
      output = await fetchData(apiUrl);
    }
  
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = output;
  }
  
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Handle the retrieved data as per your application needs
      let result = '';
  
      if (data.results && data.results.length > 0) {
        data.results.forEach((item) => {
          result += `<p>${JSON.stringify(item)}</p>`;
        });
      } else {
        result = '<p>No results found.</p>';
      }
  
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return '<p>Failed to fetch data.</p>';
    }
  }