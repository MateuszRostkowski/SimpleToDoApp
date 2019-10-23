let serverData;

if (serverData == null) {
  localStorage.setItem(
    "table",
    JSON.stringify([{ name: "You can delete me", time: 300 }])
  );
}
serverData = JSON.parse(localStorage.getItem("table"));

console.log(serverData);

const headers = ["Tasks", "Time", "Delete"];
let newData;

const table = document.querySelector(".table");
const inputTask = document.querySelector("#taskName");
const inputTime = document.querySelector("#taskTime");
const buttonAdd = document.querySelector("#addToDo");

buttonAdd.addEventListener("click", addItem);

function addItem() {
  const task = inputTask.value;
  const timetask = inputTime.value;
  serverData.push({ name: task, time: timetask });
  addDataToTable(serverData);
  addToLocal();
  getFromLocal();
}

function addToLocal() {
  localStorage.setItem("table", JSON.stringify(serverData));
}

function getFromLocal() {
  newData = localStorage.getItem("table");
  newData = JSON.parse(newData);
  console.log(newData);
}

function addHeader() {
  const row = document.createElement("div");
  row.classList.add("row");

  headers.forEach(item => {
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = item;
    row.appendChild(title);
  });
  table.appendChild(row);
}

function deleteElement(index) {
  console.log(index);
  serverData.splice(index, 1);
  localStorage.setItem("table", JSON.stringify(serverData));
  addDataToTable(serverData);
}

function serverDataToTableData(data) {
  const deleteAdded = data.map(item => {
    return { ...item, delete: "delete" };
  });
  return deleteAdded.map(item => Object.values(item));
}

function addDataToTable(sData) {
  const tableData = serverDataToTableData(sData);
  table.innerHTML = "";
  addHeader();
  tableData.forEach((data, index) => {
    const row = document.createElement("div");

    data.forEach(element => {
      const item = document.createElement("div");
      item.classList.add("item");

      if (element === "delete") {
        const newButton = document.createElement("button");
        newButton.innerText = "delete";
        newButton.addEventListener("click", () => {
          deleteElement(index);
        });
        item.appendChild(newButton);
      } else {
        item.innerText = element;
      }

      row.appendChild(item);
    });

    row.classList.add("row");
    table.appendChild(row);
  });
}

addHeader();
serverDataToTableData(serverData);
addDataToTable(serverData);
