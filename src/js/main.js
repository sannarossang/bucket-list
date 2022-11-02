//ett/mitt objekt som baseras på en class/mall som innehåller ett värde som vi inte vet än, det som ska hämtas (what)– TODO flytta till egen fil

class bucketList {
  constructor(what) {
    // construktor som tar emot ett värde/en variabel i form av what,
    this.propertyWhat = what; // tilldelar ett värde på property/egenskapen för vår bucketList, från variabeln what som i kod sedan blir värdet inom parantes i mina nya objekt
  }
}

//min slutförda lista, tom ska fyllas med slutförda tasks

let myCompletedBucketList = [];

//min grundlista

let myBucketList = [
  //en variabel som jag tilldelar en lista av classen bucketlist
  new bucketList("Accomplish a Swedish classic circuit"), //nytt objekt som baseras på mallen i mitt objekt "class" bucketList
  new bucketList("Climb Kebnekaise"),
  new bucketList("Get a diving certification"),
  new bucketList("Learn how to fly"),
];

//funktion för att addera bucket list items

//hela första raden nedan är min funktion som tar emot en funktionsvariabel(text) vi inte vet om än och skapar upp nya objekt med denna och adderar i min bucketList

function addBucketListItem(bucketList) {
  // inom parantes behållare av en text jag inte vet om.
  let bucketListBody = document.getElementById("myBucketList");
  let newBucketListLi = document.createElement("li");

  bucketListBody.appendChild(newBucketListLi); //lägg in barn till min UL-lista i form av LI-objekt

  newBucketListLi.innerHTML = myToggleButton();
}

function myToggleButton() {
  let toggleStyling = document.createElement("label");
  toggleStyling.classList.add("switch");
  let toggleInput = document.createElement("input");
  toggleInput.type = checkbox;
  let toggleSpan = document.createElement("span");
  toggleSpan.classList.add("slider round");

  toggleStyling.appendChild(toggleInput);
  toggleInput.appendChild(toggleSpan);

  return toggleStyling;
}

//fixa klickhändelse för min toggle – eller ändra till en checkbox
let toggle = document.getElementById("XXXX");
saveButton.addEventListener("click", userToggleInput);

function userToggleInput() {
  console.log("togglad");
}

//det ovan är det jag hårdkodar in i min li i form av en checkbox-toggle

//loop för att lägga ut mina lista

for (let i = 0; i < myBucketList.length; i++) {
  addBucketListItem(myBucketList[i]);
}

//klickhändelse för att lägga till något nytt i listan, lyssnar efter id som
//jag definerat i min HTML på den knappen
let saveButton = document.getElementById("userAddBucket");
saveButton.addEventListener("click", userAddingBucketTask);

//min funktion som gör att användarna kan lägga till egna buckets/to dos, lyssnar efter clicket "userAddingBucketList"
//i min userAddingBucketTask har jag bett den lyssna efter användarens inskrivning och lag in funktionen "addBucketListItem"
//för att användarens inskrivna värde ska tilldelas på objektet bucketList property properyyWhat, skapar jag ett nytt objekt genom syntax:en new
//och firstInput.value används som värde till konstruktorn

function userAddingBucketTask() {
  let firstInput = document.getElementById("firstUserText");

  if (firstInput.value === "") {
    console.log("denied entrance..");
  } else {
    addBucketListItem(new bucketList(firstInput.value));
  }
}
//  addBucketListItem(new bucketList(firstInput.value)); är samma som den hårdkodade raden
//  new bucketList("Learn how to fly") men nu låter vi användaren skriva och vi styr bara att det som skrivs blir en textsträng, inte ett objekt
//vilket det hade blivit utan .value

//slutförda
//var taskCompleted = function () {
//var listItem = this.parentNode;
//completedTasksHolder.appendChild(listItem);
//bindTaskEvents(listItem, taskIncomplete);
//};

//rubriker i HTML via js

document.getElementById("myHeading");
let headingTag = document.getElementById("myHeading");
headingTag.innerHTML = "The Ultimate Bucket List";
headingTag.className = "blue";

document.getElementById("mySecondHeading");
let secondHeadingTag = document.getElementById("mySecondHeading");
secondHeadingTag.innerHTML = "What's yours? Add along!";
secondHeadingTag.className = "blue";

document.getElementById("myThirdHeading");
let thirdHeadingTag = document.getElementById("myThirdHeading");
thirdHeadingTag.innerHTML = "Completed! Woop woop!";

//Knappar

//let taskInput = document.getElementById("new-task"); //Add a new task.
//let addButton = document.getElementsByTagName("button")[0];
