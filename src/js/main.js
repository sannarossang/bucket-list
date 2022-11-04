import { BucketListItem } from "./models/bucketlist";

let myBucketListItems = [];

if (localStorage.getItem("allBuckets") === null) {
  myBucketListItems.push(new BucketListItem("Swedish classic circuit", false));
  myBucketListItems.push(new BucketListItem("Climb Kebnekaise", true));
  myBucketListItems.push(new BucketListItem("Diving certification", false));
  myBucketListItems.push(new BucketListItem("Learn how to fly", false));
  myBucketListItems.push(new BucketListItem("Be Santa Clause", false));
} else {
  let allBucketsFromLS = localStorage.getItem("allBuckets");
  let allBucketsLS = JSON.parse(allBucketsFromLS);
  for (let i = 0; i < allBucketsLS.length; i++) {
    myBucketListItems.push(
      new BucketListItem(allBucketsLS[i].description, allBucketsLS[i].completed)
    );
  }
}

function printBucketLists() {
  localStorage.setItem("allBuckets", JSON.stringify(myBucketListItems));
  let mainBucketList = document.getElementById("myBucketList");
  mainBucketList.innerHTML = "";

  let completedBucketList = document.getElementById("completedBucketList");
  completedBucketList.innerHTML = "";

  for (let i = 0; i < myBucketListItems.length; i++) {
    if (myBucketListItems[i].completed) {
      addToCompletedBucketList(myBucketListItems[i], completedBucketList);
    } else {
      addToBucketList(myBucketListItems[i], mainBucketList);
    }
  }
}

function addToBucketList(bucketListItem, mainBucketList) {
  let newBucketListLi = document.createElement("li");
  mainBucketList.appendChild(newBucketListLi);
  newBucketListLi.innerHTML = bucketListItem.description;

  let toggle = createToggleButton(bucketListItem);
  newBucketListLi.appendChild(toggle);
}

function addToCompletedBucketList(bucketListItem, completedBucketList) {
  let newBucketListLi = document.createElement("li");
  completedBucketList.appendChild(newBucketListLi);
  newBucketListLi.innerHTML = bucketListItem.description;
  newBucketListLi.className = "completed";

  let toggle = createToggleButton(bucketListItem);
  newBucketListLi.appendChild(toggle);
}

function createToggleButton(bucketListItem) {
  let toggleLabel = document.createElement("label");
  let toggleInput = document.createElement("input");
  let toggleSpan = document.createElement("span");

  toggleLabel.classList.add("switch");
  toggleSpan.classList.add("slider");
  toggleSpan.classList.add("round");

  toggleInput.type = "checkbox";
  toggleInput.checked = bucketListItem.completed;

  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSpan);

  toggleLabel.addEventListener("click", () => {
    clickedToggle(bucketListItem, toggleInput);
  });

  return toggleLabel;
}

function clickedToggle(bucketListItem, toggleInput) {
  let myBucketListIndex = myBucketListItems.indexOf(bucketListItem);
  myBucketListItems.splice(myBucketListIndex, 1);
  bucketListItem.completed = toggleInput.checked;
  myBucketListItems.push(bucketListItem);

  printBucketLists();
}

function userAddingBucketTask() {
  let firstInput = document.getElementById("inputBucketListItem");

  if (firstInput.value === "") {
    alert("Nope, can't do that! Write a text!");
  } else {
    myBucketListItems.push(new BucketListItem(firstInput.value, false));
    printBucketLists();
  }

  firstInput.value = "";
}

function sortBucketLists() {
  console.log(myBucketListItems);
  myBucketListItems.sort((a, b) => {
    //anropar toLowerCase för att den annars trodde att litet a är efter stort B i ordningen.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    if (a.description.toLowerCase() < b.description.toLowerCase()) {
      return -1;
    }
    if (a.description.toLowerCase() === b.description.toLowerCase()) {
      return 0;
    } else {
      return +1;
    }
  });
  printBucketLists();
}

let sortOngoingButton = document.getElementById("btn-sort-ongoing");
sortOngoingButton.addEventListener("click", sortBucketLists);

let sortCompletedButton = document.getElementById("btn-sort-completed");
sortCompletedButton.addEventListener("click", sortBucketLists);

let addButton = document.getElementById("addingBucketItem");
addButton.addEventListener("click", userAddingBucketTask);

document.getElementById("myHeading");
let headingTag = document.getElementById("myHeading");
headingTag.innerHTML = "The Ultimate Bucket List";
headingTag.className = "blue";

document.getElementById("mySecondHeading");
let secondHeadingTag = document.getElementById("mySecondHeading");
secondHeadingTag.innerHTML = "What's next? Add along!";
secondHeadingTag.className = "blue";

document.getElementById("myThirdHeading");
let thirdHeadingTag = document.getElementById("myThirdHeading");
thirdHeadingTag.innerHTML = "I did it! Woop woop!";

printBucketLists();
