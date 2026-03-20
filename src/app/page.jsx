import CardComponent from "./_components/CardComponent";


export default async function Home() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return (
    <div>
      {data.payload.map((student) =>
        <div key={student.id}>
          <CardComponent students={student} />
      </div>
    )}

    </div>
  )
}
