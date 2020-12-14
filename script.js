// Write your JavaScript code here!
// get the element we want to listen to
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
   window.onload = function () {

   
      let submitButton = document.querySelector('button[id=submit]')
      submitButton.addEventListener('click', function (event) {
         event.preventDefault();
          let pilotName = document.querySelector("input[name=pilotName]"); 
          let copilotName = document.querySelector("input[name=copilotName]");
          let fuelLevel = document.querySelector("input[name=fuelLevel]");
          let cargoMass = document.querySelector("input[name=cargoMass]");
         
          if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
              alert("All fields are required.");
              
          } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) || Number(pilotName.value) || Number(copilotName.value)) {
            alert("Input invalid.");
          }
           
          let launchStatus = document.getElementById('launchStatus')
          let faultyItems = document.getElementById('faultyItems')
          let fuelStatus = document.getElementById('fuelStatus')
          let cargoStatus = document.getElementById('cargoStatus')
          let pilotStatus = document.getElementById('pilotStatus')
         let copilotStatus = document.getElementById('copilotStatus')
         
          

          if (fuelLevel.value < 10000 ) {
            fuelStatus.innerText = "There is not enough fuel for the journey."
            launchStatus.innerText = "Shuttle not ready for launch."
            launchStatus.style.visibility = 'visible'
            launchStatus.style.color = 'red'
            faultyItems.style.visibility = 'visible'
            pilotStatus.innerText = `${pilotName.value} Ready`
            copilotStatus.innerText = `${copilotName.value} Ready`
            
        } else if (cargoMass.value > 10000 ) {
            cargoStatus.innerText = "There is too much mass for the shuttle to take off."
            faultyItems.style.visibility = 'visible'
            launchStatus.style.visibility = 'visible'
            launchStatus.style.color = 'red'
            launchStatus.innerText = "Shuttle not ready for launch."
            pilotStatus.innerText = `${pilotName.value} Ready`
            copilotStatus.innerText = `${copilotName.value} Ready`
        } else if (cargoMass.value < 10000 || fuelLevel.value > 10000){
            launchStatus.style.visibility = 'visible'
            launchStatus.style.color = 'green'
            launchStatus.innerText = 'Shuttle ready for launch!'
            faultyItems.style.visibility = 'visible'
            fuelStatus.innerText = 'Fuel level high enough for launch'
            cargoStatus.innerText = 'Cargo mass low enough to take off.'
            pilotStatus.innerText = `${pilotName.value} Ready`
            copilotStatus.innerText = `${copilotName.value} Ready`
        }
       fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
          return response.json().then(function (json) {
             let missionTarget = document.getElementById("missionTarget");
             let index = 0;
                missionTarget.innerHTML += `
                <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[index].name}</li>
                     <li>Diameter: ${json[index].diameter}</li>
                     <li>Star: ${json[index].star}</li>
                     <li>Distance from Earth: ${json[index].distance}</li>
                     <li>Number of Moons: ${json[index].moons}</li>
                  </ol>
                  <img src=${json[index].image}></img>
                `
             
          })
       })
      });
   }
      //build a listener on the element
      
   // fire an action when the event is triggered

