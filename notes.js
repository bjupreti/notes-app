const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const noteBuffer = fs.readFileSync('./notes.json');
    const noteJSON = noteBuffer.toString();
    return JSON.parse(noteJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON)
}

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);


  if(!duplicateNote) {
    notes.push({
      title, body
    })
  
    saveNotes(notes)
    console.log(chalk.green('New notes added'))
  } else {
    console.log(chalk.red('Duplicate title'))
  }
  
}

const removeNote = (title) => {
  const notes = loadNotes();
  
  const updatedNotes = notes.filter(note => note.title !== title);

  // show success || error message
  if(updatedNotes.length === notes.length) {
    console.log(chalk.red.inverse(`No notes found with title: "${title}"`));
  } else {
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse('Note removed succesfully.'));
  }
  
}

const listNotes = () => {
  const notes = loadNotes();

  // list notes if there is note or show empty msg
  if(notes.length > 0) {
    console.log(chalk.magenta.inverse('Your notes are::::'))
    notes.forEach((note, index) => {
      console.log(chalk.blue(`${index + 1}. `) + chalk.white(note.title))
    })
  } else {
    console.log(chalk.red.inverse('No notes found!'))
  }
}

const readNote = (title) => {
  const notes = loadNotes();

  const selectedNote = notes.find(note => note.title === title)

  if (selectedNote) {
    console.log(chalk.white.inverse(selectedNote.title));
    console.log(selectedNote.body)
  } else {
    console.log(chalk.red.inverse(`Note with title "${title}" not found.`))
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};