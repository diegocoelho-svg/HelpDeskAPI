export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Teste POST, Criado com sucesso!")
    }
  }
]