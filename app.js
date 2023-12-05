const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./notes");
const notes = require("./notes");

yargs.command({
    command: "add",
    describe: "Adding a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    },
}).parse();

yargs.command({
    command: "remove",
    describe: "Removing a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    },
}).parse();


yargs.command({
    command: "list",
    describe: "Listing all the notes",
    handler() {
        notes.getNotes();
    },
}).parse();


yargs.command({
    command: "read",
    describe: "Reading a note",
    builder: {
        title: {
            describe: "Read a single note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    },
}).parse();