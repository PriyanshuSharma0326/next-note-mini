'use client';

import Note from '@/components/note';
import { useEffect, useState } from 'react';

function NoteDetails({ params }) {
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotesList(JSON.parse(storedNotes));
        }
    }, []);

    const note = notesList.find(item => item.id == params.noteID);

    return (
        <Note>
            <h1 className="text-[#F0F0F0]">{note.text}</h1>
        </Note>
    )
}

export default NoteDetails;
