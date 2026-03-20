
export default function CardComponent({students}) {
    return (
    <div>
        <p>{students.name}</p>
        <p>{students.email}</p>
    </div>
  )
}
