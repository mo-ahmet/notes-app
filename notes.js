const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    const notes = loadNotes();
    console.log('Here are your notes');

    notes.forEach((note) => {
        console.log(`Title: ${note.title}, Body: ${note.body}`)
    })
    };


const addNote = (title,body) => {
    const notes = loadNotes();
    const dublicateNotes= notes.filter((note) => note.title === title)

    if (dublicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added!'));
    }
    else if (dublicateNotes.length > 0 ) {
        console.log(chalk.red.inverse('Note Title Taken!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    
    const note = notes.find((note) => note.title === title)
    if (note){
    console.log(`Title: ${note.title}, Body: ${note.body}`)
    } else {
    console.log('No such note!')
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if(notes.length > newNotes.length) {
        saveNotes(newNotes);
        console.log('Note removed!')
    }
    else {
        console.log('No note with title')
    }
    
}


const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);   
}
    catch (e) {
        return [];
    }
};


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}