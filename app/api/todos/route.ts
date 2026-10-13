import { pool } from "@/lib/db";


async function getAll() {
  const { rows } = await pool.query(
    `SELECT id, title, is_completed AS "isComplited"
     FROM todos
     ORDER BY id`
  );
  return rows;
}

export async function GET(request:Request){
    try {
        const {searchParams} = new URL(request.url)
        const search = searchParams.get('search')?.toLowerCase() ?? "";
    
        const {rows} = await pool.query(
            `SELECT id, title, is_completed AS "isComplited"
            FROM todos
            WHERE title ILIKE $1
            ORDER BY id`,
            [`%${search}`]
        )
    
        return Response.json(rows);
    } catch (error) {
        console.error(error);
        return Response.json({title: `ERROR! ${error}`, status: 500})
    }
}

export async function DELETE(request:Request){
    try {
        const {searchParams} = new URL(request.url);
        const id = Number(searchParams.get('id'))
    
        await pool.query("DELETE FROM todos WHERE id = $1", [id])
        
        return Response.json(await getAll())
    } catch (error) {
        console.error(error)
        return Response.json({title: `ERROR! ${error}`, status: 500})
    }
}

export async function PUT(request: Request){
    try {
        const {id, title, isComplited} = await request.json()

        await pool.query(
            'UPDATE todos SET title = $1, is_completed = $2 WHERE id = $3',
            [title, isComplited, id]
        )
        return Response.json(await getAll())
    } catch (error) {
        console.error(error)
        return Response.json({title: `ERROR! ${error}`, status: 500})
    }
}

export async function PATCH(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    await pool.query(
      "UPDATE todos SET is_completed = NOT is_completed WHERE id = $1",
      [id]
    );

    return Response.json(await getAll());
  } catch (error) {
    console.error(error);
    return Response.json({title: `ERROR! ${error}`, status: 500})
  }
}

export async function POST(request: Request) {
  try {
    const { title } = await request.json();

    if (!title || typeof title !== "string" || !title.trim()) {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }

    await pool.query("INSERT INTO todos (title) VALUES ($1)", [title.trim()]);

    return Response.json(await getAll(), { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({title: `ERROR! ${error}`, status: 500})
  }
}

