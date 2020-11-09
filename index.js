document.getElementById('load_console').addEventListener('click',displayIndex);

function displayIndex() {
  fetch('https://mustang-index.azurewebsites.net/index.json')
    // Handle success
    .then(response => response.json())
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
}