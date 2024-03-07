import notesList from '@/app/notes';
import Modal from '@/components/modal';

function NoteDetails({ params }) {
    const note = notesList.find(item => item.id == params.noteID);

    return (
        <Modal>
            <h1 className="text-[#F0F0F0]">{note.text}</h1>
        </Modal>
    )
}

export default NoteDetails;
