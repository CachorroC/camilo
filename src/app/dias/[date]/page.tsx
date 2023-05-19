export default function Page (
  { params }: { params: { page: string } }
) {
  return (
    <p>
      { JSON.stringify(
        params
      ) }
    </p>
  )
}