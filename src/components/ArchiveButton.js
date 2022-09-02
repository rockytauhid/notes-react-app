import React from 'react';

function ArchiveButton({ id, archived, onArchive }) {
    return <button className='note-item__archive-button' onClick={() => onArchive(id)}>{archived ? "Aktifkan" : "Arsipkan"}</button>
}

export default ArchiveButton;