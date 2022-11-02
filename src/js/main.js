import { BucketListItem } from "./bucketlist";

let myBucketListItems = [
  new BucketListItem("Accomplish a Swedish classic circuit", false),
  new BucketListItem("Climb Kebnekaise", true),
  new BucketListItem("Get a diving certification", true),
  new BucketListItem("Learn how to fly", false),
  new BucketListItem("Be Santa Clause", false),
];

function printBucketLists() {
  let mainBucketList = document.getElementById("myBucketList");
  mainBucketList.innerHTML = "";

  let completedBucketList = document.getElementById("completedBucketList");
  completedBucketList.innerHTML = "";

  for (let i = 0; i < myBucketListItems.length; i++) {
    if (myBucketListItems[i].checked) {
      console.log("Skickas till den slutförda listan");
      addToCompletedBucketList(myBucketListItems[i], completedBucketList);
    } else {
      console.log("Skickas till den ej slutförda listan");
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

  let toggle = createToggleButton(bucketListItem);
  newBucketListLi.appendChild(toggle);
}

function createToggleButton(bucketListItem) {
  let toggleLabel = document.createElement("label");
  let toggleInput = document.createElement("input");
  let toggleSpan = document.createElement("span");

  toggleLabel.classList.add("switch");
  toggleSpan.classList.add("slider");
  toggleInput.type = "checkbox";
  toggleInput.checked = bucketListItem.checked;

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
  bucketListItem.checked = toggleInput.checked;
  myBucketListItems.push(bucketListItem);

  printBucketLists();
}

function userAddingBucketTask() {
  let firstInput = document.getElementById("inputBucketListItem");

  if (firstInput.value === "") {
    console.log("denied entrance..");
  } else {
    myBucketListItems.push(new BucketListItem(firstInput.value, false));
    printBucketLists();
  }
}

let addButton = document.getElementById("addingBucketItem");
addButton.addEventListener("click", userAddingBucketTask);

document.getElementById("myHeading");
let headingTag = document.getElementById("myHeading");
headingTag.innerHTML = "The Ultimate Bucket List";
headingTag.classList = "blue";

document.getElementById("mySecondHeading");
let secondHeadingTag = document.getElementById("mySecondHeading");
secondHeadingTag.innerHTML = "What's next? Add along!";
secondHeadingTag.classList = "blue";

document.getElementById("myThirdHeading");
let thirdHeadingTag = document.getElementById("myThirdHeading");
thirdHeadingTag.innerHTML = "I did it! Woop woop!";

printBucketLists();
