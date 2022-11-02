class BucketList {
  constructor(what, checked) {
    this.propertyWhat = what;
    this.propertyChecked = checked;
  }
}

let myBucketList = [
  new BucketList("Accomplish a Swedish classic circuit", false),
  new BucketList("Climb Kebnekaise", true),
  new BucketList("Get a diving certification", false),
  new BucketList("Learn how to fly", false),
];

function appendBucketLists() {
  let bucketListBody = document.getElementById("myBucketList");
  bucketListBody.innerHTML = "";

  let cbucketListBody = document.getElementById("completedTasks");
  cbucketListBody.innerHTML = "";

  for (let i = 0; i < myBucketList.length; i++) {
    if (myBucketList[i].propertyChecked === true) {
      console.log("Ska till slutförda listan");
      addCompleteBucketListItem(myBucketList[i]);
    } else {
      console.log("Ska skapas i ej gjorda listan");
      addBucketListItem(myBucketList[i]);
    }
  }
}

function addBucketListItem(bucketList) {
  let bucketListBody = document.getElementById("myBucketList");
  let newBucketListLi = document.createElement("li");

  bucketListBody.appendChild(newBucketListLi);

  newBucketListLi.innerHTML = bucketList.propertyWhat;

  let toggleHTML = createToggleButton(bucketList);
  newBucketListLi.appendChild(toggleHTML);
}

function addCompleteBucketListItem(bucketList) {
  let bucketListBody = document.getElementById("completedTasks");
  let newBucketListLi = document.createElement("li");

  bucketListBody.appendChild(newBucketListLi);

  newBucketListLi.innerHTML = bucketList.propertyWhat;

  let toggleHTML = createToggleButton(bucketList);
  newBucketListLi.appendChild(toggleHTML);
}

function createToggleButton(bucketList) {
  let toggleLabel = document.createElement("label");
  let toggleInput = document.createElement("input");
  let toggleSpan = document.createElement("span");

  toggleLabel.classList.add("switch");
  toggleInput.type = "checkbox";

  toggleInput.checked = bucketList.propertyChecked;

  toggleSpan.classList.add("slider");

  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSpan);

  toggleLabel.addEventListener("click", () => {
    clickedToggle(bucketList, toggleInput);
  });

  return toggleLabel;
}

function clickedToggle(bucketList, toggleInput) {
  myBucketList.splice(myBucketList.indexOf(bucketList), 1);
  bucketList.propertyChecked = toggleInput.checked;
  myBucketList.push(bucketList);

  appendBucketLists();
}

let saveButton = document.getElementById("userAddBucket");
saveButton.addEventListener("click", userAddingBucketTask);

function userAddingBucketTask() {
  let firstInput = document.getElementById("firstUserText");

  if (firstInput.value === "") {
    console.log("denied entrance..");
  } else {
    myBucketList.push(new BucketList(firstInput.value, false));
    appendBucketLists();
  }
}

document.getElementById("myHeading");
let headingTag = document.getElementById("myHeading");
headingTag.innerHTML = "The Ultimate Bucket List";
headingTag.classList = "blue";

document.getElementById("mySecondHeading");
let secondHeadingTag = document.getElementById("mySecondHeading");
secondHeadingTag.innerHTML = "What's yours? Add along!";
secondHeadingTag.classList = "blue";

document.getElementById("myThirdHeading");
let thirdHeadingTag = document.getElementById("myThirdHeading");
thirdHeadingTag.innerHTML = "Completed! Woop woop!";
appendBucketLists();
