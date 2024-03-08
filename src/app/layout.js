import './globals.css';

export const metadata = {
    title: {
        default: 'Home | Keep Clone',
        template: '%s | Keep Clone',
    },
    description: 'A notes app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='max-w-[100vw] h-[100vh] bg-[#232323] flex flex-col'>
                <header className='px-8 py-4 border-b-[1px] border-[#B0B0B0]'>
                    <p className='font-semibold text-[1.5rem] text-[#F0F0F0]'>Keep Clone</p>
                </header>
                {children}
            </body>
        </html>
    )
}
