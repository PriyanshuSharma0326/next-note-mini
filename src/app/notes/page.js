import Note from "@/components/note";
import Link from "next/link";
import notesList from "../notes";

function NotesList() {
    return (
        <div className="p-8 grid grid-cols-4 gap-x-4 gap-y-4">
            {notesList.map(note => {
                return (
                    <Link key={note.id} href={`/notes/${note.id}`}>
                        <Note>
                            <h1 className="text-[#F0F0F0]">{note.text}</h1>
                        </Note>
                    </Link>
                )
            })}
        </div>
    );
}

export default NotesList;
