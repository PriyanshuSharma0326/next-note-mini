'use client';

import Modal from '@/components/modal';
import Note from '@/components/note';

function NoteDetails({ params }) {
    let notesList = JSON.parse(localStorage.getItem('notes')) || [];

    const note = notesList.find(item => item.id == params.noteID);

    return (
        <Modal>
            {/* <Note> */}
                <h1 className="text-[#F0F0F0] font-semibold text-[1.1rem]">{note.title}</h1>
                <h1 className="text-[#E4E4E4] font-medium text-[0.9rem]">{note.note}</h1>
            {/* </Note> */}
        </Modal>
    )
}

export default NoteDetails;
