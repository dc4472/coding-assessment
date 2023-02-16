const loadbills=()=>{

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3008/medical-bill", false);
    xhttp.send();

    const medbill = JSON.parse(xhttp.responseText);

   // document.getElementById('medical-bills').innerHTML = document.getElementById('medical-bills').innerHTML;

    for (let medbill of medbills) {

        document.getElementById('medical-bills').innerHTML = document.getElementById('medical-bills').innerHTML;

    }

        




}
loadbills();

//https://stackabuse.com/building-a-rest-api-with-node-and-express/
//Here is the source for most of my code. I used the templates from DavidLandup