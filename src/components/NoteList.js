import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
    if (notes.length > 0) {
        return (
            <div className="note-list">
                {
                    notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note} />
                    ))
                }
            </div>
        );
    } else {
        return (
            <p className="note-list__empty-message">Tidak ada catatan</p>
        );
    }
}

export default NoteList;