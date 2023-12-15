const headerContainer = document.querySelector('header');

const getCurrentDirectory = () => {
    const pathArray = window.location.pathname.split('/');
    console.log(pathArray)
    for(let i = 0; i > 3; i++){
        pathArray.pop();
    }
    return pathArray.join('/');
  };
  

fetch(`${getCurrentDirectory()}/header.html`)
    .then(response => response.text())
    .then(data => {
        headerContainer.innerHTML = data;
    });