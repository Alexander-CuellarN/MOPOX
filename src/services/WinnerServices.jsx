import { URL, URL_COMPLEMENT } from "./endPoints";

export async function fetchWinner(candidateID, candidate) {
  const result = await fetch(`${URL}${URL_COMPLEMENT}`, {
    method: "POST",
    body: JSON.stringify({
      candidate,
      candidateID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = result.json();

  return response;
}
