export const metadata ={
    title: 'Notes List'
}

function NotesLayout({ children, modal }) {
    return (
        <>
            {children}
            <div>
                {modal}
            </div>
        </>
    )
}

export default NotesLayout;
