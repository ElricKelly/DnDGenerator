fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('headerContainer').innerHTML = data;
  })
  .catch(error => {
    console.error('Error fetching header:', error);
  });