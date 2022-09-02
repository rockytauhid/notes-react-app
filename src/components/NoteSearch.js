import React from 'react';

function NoteSearch({ searchText, onChange }) {
    return (
        <input type="text" placeholder="Cari catatan ..." value={searchText} onChange={onChange}></input>
    );
}

export default NoteSearch;