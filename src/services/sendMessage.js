import { URL, URL_COMPLEMENT } from "./endPoints"

export async function sendMessage(data) {

    try {
        let response = await fetch(`${URL}${URL_COMPLEMENT}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        let dataRespose = await response.json();

        return {
            status: 'OK',
            data: dataRespose
        }
    } catch (error) {
        return {
            status: 'Error',
            data: 'No se ha podido enviar el correo, por favor intentelo de nuevo mas tarde.'
        }
    }
}
