const fs = require("fs");

async function showList() {
  const response = await fs.readFileSync("./data.json", "utf8", (err, data) => {
    if (err) throw err;
    let personObject = JSON.parse(data);
    return personObject;
  });
  return JSON.parse(response);
}

async function saveList(date) {
  try {
    await fs.writeFileSync("./data.json", JSON.stringify(date), "utf8", err => {
      if (err) throw err;
    });
    return `The file has been saved!`;
  } catch (error) {
    return console.log(error);
  }
}

async function deleteRecord(name) {
  try {
    obj = await showList();
  } catch (error) {
    return console.log(error);
  }
  Object.keys(obj).map(async (value, index) => {
    console.log(value);
    name === obj[value].name ? delete obj[value] : false;
  });
  return saveList(obj);
}

async function addRecord(name, state = "open", groupName = "test") {
  try {
    obj = await showList();
  } catch (error) {
    return console.log(error);
  }
  const key = "obj" + (Object.keys(obj).length + 1);
  const newData = {};
  newData.name = name;
  newData.state = state;
  newData.group = groupName;
  obj[key] = newData;
  return saveList(obj);
}

async function active(name, nameState = "open") {
  try {
    obj = await showList();
  } catch (error) {
    return console.log(error);
  }
  Object.keys(obj).map(async (value, index) => {
    name === obj[value].name ? (obj[value].state = nameState) : false;
  });
  saveList(obj);
  return showList();
}

async function group(name, nameGroup = "test") {
  try {
    obj = await showList();
  } catch (error) {
    return console.log(error);
  }
  Object.keys(obj).map(async (value, index) => {
    name === obj[value].name ? (obj[value].group = nameGroup) : false;
  });
  saveList(obj);
  return showList();
}

async function filterState(nameState = "all") {
  try {
    obj = await showList();
  } catch (error) {
    return console.log(error);
  }
  let filterObj = "";
  Object.keys(obj).map(async (value, index) => {
    if (nameState === "all") {
      filterObj += obj[value].name + " ";
    } else if (nameState === obj[value].state) {
      filterObj += obj[value].name + " ";
    }
  });
  return await filterObj;
}

async function filterGroup(nameGroup = "all") {
  try {
    obj = await showList();
  } catch (error) {
    return console.log(error);
  }
  let filterObj = "";
  Object.keys(obj).map(async (value, index) => {
    if (nameGroup === "all") {
      filterObj += obj[value].name + " ";
    } else if (nameGroup === obj[value].group) {
      filterObj += obj[value].name + " ";
    }
    console.log(obj[value].name);
  });
  return await filterObj;
}

module.exports = {
  active,
  group,
  filterState,
  filterGroup,
  active,
  showList,
  deleteRecord,
  addRecord
};
