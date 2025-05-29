export function updateStatus({ request, response, database }) {
  const { id } = request.params

  database.update("tickets", id, { status: "closed" })

  response.writeHead(200).end()
}