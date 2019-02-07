const {
  active,
  group,
  filterState,
  filterGroup,
  showList,
  deleteRecord,
  addRecord
} = require("./task");

const createCommand = {
  command: "add:record",
  describe: "Add new record",
  handler: async args => {
    const name = args.name;
    const state = args.state ? args.name : "open";
    const group = args.group ? args.name : "test";

    const result = await addRecord(name, state, group);
    console.log(result);
  }
};

const deleteCommand = {
  command: "remove:record",
  describe: "Remove record",
  handler: async args => {
    const name = args.name;
    const result = await deleteRecord(name);
    console.log(result);
  }
};

const showCommand = {
  command: "show:record",
  describe: "Show list",
  handler: async args => {
    const result = await showList();
    console.log(result);
  }
};

const stateCommand = {
  command: "change:state",
  describe: "Change status",
  handler: async args => {
    const name = args.name;
    const state = args.state ? args.name : "open";
    const result = await active(name, state);
    console.log(result);
  }
};

const filterStateCommand = {
  command: "filter:state",
  describe: "Change status",
  handler: async args => {
    const state = args.state ? args.state : "test";
    const result = await filterState(state);
    console.log(result);
  }
};

const groupCommand = {
  command: "change:group",
  describe: "Change status",
  handler: async args => {
    const name = args.name;
    const group = args.group ? args.group : "test";
    const result = await group(name, group);
    console.log(result);
  }
};

const filterGroupCommand = {
  command: "filter:group",
  describe: "Change status",
  handler: async args => {
    const group = args.group ? args.group : "test";
    const result = await filterGroup(group);
    console.log(result);
  }
};

module.exports = [
  showCommand,
  filterStateCommand,
  filterGroupCommand,
  stateCommand,
  groupCommand,
  createCommand,
  deleteCommand
];
