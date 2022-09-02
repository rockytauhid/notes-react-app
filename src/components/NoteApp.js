import React from 'react';
import { getInitialData } from '../utils/data';
import NoteSearch from './NoteSearch';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            notes: getInitialData()
        }

        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onSearchNoteHandler(event) {
        this.setState(({ prevState }) => {
            return {
                ...prevState, searchText: event.target.value
            }
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState((prevState) => {
            return {
                ...prevState, notes
            }
        });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                if (note.archived === true) {
                    return { ...note, archived: false };
                } else {
                    return { ...note, archived: true };
                }
            }
            return note
        })
        this.setState((prevState) => {
            return {
                ...prevState, notes
            }
        });
    }

    render() {
        const searchText = this.state.searchText.toLowerCase();
        const filteredNotes = this.state.notes.filter((note) => {
            if (searchText === "") {
                return note;
            } else {
                return note.title.toLocaleLowerCase().includes(searchText)
            }
        });
        const activeNotes = filteredNotes.filter(note => !note.archived);
        const archivedNotes = filteredNotes.filter(note => note.archived);

        return (
            <div className="note-app">
                <div className="note-app__header">
                    <h1 >Catatan Personal</h1>
                    <NoteSearch searchText={this.state.searchText} onChange={this.onSearchNoteHandler} />
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Arsip</h2>
                    <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        );
    }
}

export default NoteApp;