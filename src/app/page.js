'use client';

import Note from '@/components/note';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const defaultInputs = {
        title: '',
        note: '',
    }

    const [notesList, setNotesList] = useState([]);
    const [typing, setTyping] = useState(false);
    const [userInputs, setUserInputs] = useState(defaultInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInputs({...userInputs, [name]: value});
    }

    const handleSubmit = async (e) => {
        if(userInputs.title.length || userInputs.note.length) {
            if(e.key === 'Enter') {
                const data = { ...userInputs, id: uuidv4(), date: Date.now() };

                notesList.push(data);
                localStorage.setItem('notes', JSON.stringify(notesList));

                setUserInputs(defaultInputs);
                setTyping(false);
            }
        }
    }

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotesList(JSON.parse(storedNotes));
        }
    }, []);

    return (
        <div className="w-full text-center">
            <form className="note-input w-[40%] border-[1px] border-[#B0B0B0] rounded-md mx-auto my-8">
                <input 
                    name='title' 
                    value={userInputs.title} 
                    onChange={handleChange} 
                    onKeyDown={handleSubmit} 
                    onFocus={() => setTyping(true)} 
                    // onBlur={() => setTyping(false)} 
                    type="text" 
                    className={`w-full bg-transparent px-4 py-2 text-[#F0F0F0] font-medium ${typing ? 'placeholder:text-[#A0A0A0]' : 'placeholder:text-[#C0C0C0]'} text-[1.05rem] outline-none`} 
                    placeholder={typing ? 'Title' : 'Take a note...'}
                />
                {typing &&
                    <input 
                        name='note' 
                        value={userInputs.note} 
                        onChange={handleChange} 
                        onKeyDown={handleSubmit} 
                        type="text" 
                        className='w-full bg-transparent px-4 py-4 text-[#F0F0F0] font-medium placeholder:text-[#C0C0C0] text-[0.9rem] outline-none' 
                        placeholder='Take a note...'
                    />
                }
            </form>

            <div className="relative w-4/5 mx-auto">
                <h1 className='text-[2rem] text-[#F0F0F0]'>{notesList.length ? 'Recent Notes...' : 'No notes to show...'}</h1>

                <Link className='absolute right-0 top-[28%]' href='/notes'>
                    <p className='text-[#A0A0A0] hover:text-[#C0C0C0] underline'>Go to notes</p>
                </Link>
            </div>

            <div className="p-8 grid grid-cols-4 gap-x-4 gap-y-4">
                {notesList.slice(0, 4).sort((a, b) => b.date - a.date).map(note => {
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
        </div>
    );
}

export default Home;
