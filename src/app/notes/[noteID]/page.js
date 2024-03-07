import notesList from '@/app/notes';
import Note from '@/components/note';

export const generateMetadata = ({ params }) => {
    return {
        title: `Note ID: ${params.noteID}`
    }
}

function NoteDetails({ params }) {
    const note = notesList.find(item => item.id == params.noteID);

    return (
        <Note>
            <h1 className="text-[#F0F0F0]">{note.text}</h1>
        </Note>
    )
}

export default NoteDetails;
