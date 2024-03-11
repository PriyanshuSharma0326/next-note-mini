'use client';

import Note from "@/components/note";
import Link from "next/link";

function NotesList() {
    let notesList = JSON.parse(localStorage.getItem('notes')) || [];

    return (
        <div className="p-8 grid grid-cols-4 gap-x-4 gap-y-4">
            {notesList?.sort((a, b) => b.date - a.date).map(note => {
                return (
                    <Link key={note.id} href={`/notes/${note.id}`}>
                        <Note>
                            <h1 className="text-[#F0F0F0] font-semibold text-[1.1rem]">{note.title}</h1>
                            <h1 className="text-[#E4E4E4] font-medium text-[0.9rem]">{note.note}</h1>
                        </Note>
                    </Link>
                )
            })}
        </div>
    );
}

export default NotesList;
