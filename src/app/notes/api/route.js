import notesList from "@/app/notes";

export async function GET() {
    return Response.json(notesList);
}

export async function POST(_request) {
    const newNote = {
        id: 18,
        message: 'Kohli',
    }

    return new Response(JSON.stringify(newNote), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    });
}
