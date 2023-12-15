function redirectToRandomPage() {
    const randomNumber = Math.floor(Math.random() * 5) + 1; // Generates random number between 1 and 5
  
    // Redirect to a page based on the random number
    switch (randomNumber) {
      case 1:
        window.location.href = 'creatures/creatures.html';
        break;
      case 2:
        window.location.href = 'environment/environment.html';
        break;
      case 3:
        window.location.href = 'magic/magic.html';
        break;
      case 4:
        window.location.href = 'npcs/npcs.html';
        break;
      case 5:
        window.location.href = 'puzzles/puzzles.html';
        break;
      default:
        console.error('Invalid random number generated');
    }
  }
  
  // Event listener for button click to trigger redirection
  document.getElementById('redirectButton').addEventListener('click', redirectToRandomPage);