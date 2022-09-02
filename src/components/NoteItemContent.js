import React from 'react';
import { showFormattedDate  } from '../utils/data';

function NoteItemContent({ title, createdAt, body }) {
    return (
        <div className="note-item__content">
            <div className="note-item__title">{title}</div>
            <div className="note-item__date">{showFormattedDate(createdAt)}</div>
            <div className="note-item__body">{body}</div>
        </div>
    );
}

export default NoteItemContent;