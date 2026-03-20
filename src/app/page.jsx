
export default async function Home() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();

  return (
    <div>
      {data.payload.map((item) => {
        <p key={item.id}>{item.name}weqweqw</p>
      })}
    </div>
  )
}
