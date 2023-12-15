function redirectToRandomPage() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generates random number between 1 and 5
  
    // Redirect to a page based on the random number
    switch (randomNumber) {
      case 1:
        window.location.href = 'armor/armor.html';
        break;
      case 2:
        window.location.href = 'coin/coin.html';
        break;
      case 3:
        window.location.href = 'consumables/consumables.html';
        break;
      case 4:
        window.location.href = 'info/info.html';
        break;
      case 5:
        window.location.href = 'supplies/supplies.html';
        break;
        case 6:
        window.location.href = 'weapons/weapons.html';
        break;
      default:
        console.error('Invalid random number generated');
    }
  }
  
  // Event listener for button click to trigger redirection
  document.getElementById('redirectButton').addEventListener('click', redirectToRandomPage);