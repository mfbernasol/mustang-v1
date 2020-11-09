document.getElementById('load_console').addEventListener('click',displayIndex);
document.getElementById('load_index').addEventListener('click',display);

function display(){
  fetch('https://mustang-index.azurewebsites.net/index.json')
  .then(response => response.json())
  .then(function(data){
    data = JSON.stringify(data);
    document.getElementById('indexID').innerHTML = data;
  });
}

function displayIndex() {
  fetch('https://mustang-index.azurewebsites.net/index.json')
    // Handle success
    .then(response => response.json())
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
}