function Note({ children }) {
    return (
        <div className="p-4 flex flex-col gap-2 border-[1px] text-start border-[#B0B0B0] rounded-md bg-white/10">
            {children}
        </div>
    )
}

export default Note;
