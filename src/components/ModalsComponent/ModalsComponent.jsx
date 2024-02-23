import { useState } from "react";
import backgroundModal from "../../../src/assets/FONDOS/FONDO_FORMATO.webp";
import iconImage from "../../../src/assets/LOGOS/LOGO_BLANCO.webp";
import iconSuccess from "../../../src/assets/icons/success.svg";
import iconFailure from "../../../src/assets/icons/failure.svg";
import { sendMessage } from "../../services/sendMessage";
import loadIcon from "../../assets/icons/icons8-load.gif";

import "./ModalsComponent.css";

export function ModalsComponent({ handlerChange }) {
  const [emailSender, setEmailSender] = useState(null);
  const [loadDataSender, SetLoadDataSender] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let fields = new window.FormData(e.target);

    let data = {
      name: fields.get("name"),
      lastName: fields.get("lastName"),
      ID: fields.get("ID"),
      email: fields.get("email"),
      neighborhood: fields.get("neighborhood"),
      Phone: fields.get("Phone"),
    };

    SetLoadDataSender(true);
    let Response = await sendMessage(data);
    SetLoadDataSender(false);
    setEmailSender(Response);
    e.target.reset();
  }
  return (
    <section id="modalFormContact" className="modalFormContact">
      <article style={{ backgroundImage: `url(${backgroundModal})` }}>
        <div>
          <strong>
            ¡Sé parte de esta <br /> nueva historia!
          </strong>
          <p onClick={handlerChange}>X</p>
        </div>
        <div>
          {emailSender && (
            <div
              className={
                emailSender.status === "OK"
                  ? "alert_contianer_form success"
                  : "alert_contianer_form failure"
              }
            >
              <img
                src={emailSender.status === "OK" ? iconSuccess : iconFailure}
                alt="status of send message"
              />
              <p>{emailSender.data}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nombre"
                className="modalFormInput"
                required
                name="name"
                disabled={loadDataSender}
              />
              <input
                type="text"
                placeholder="Apellido"
                className="modalFormInput"
                required
                title="El apellido es obligatorio"
                name="lastName"
                disabled={loadDataSender}
              />
              <input
                type="number"
                placeholder="Cédula"
                className="modalFormInput"
                required
                title="El numero de cedula es obligatorio"
                name="ID"
                disabled={loadDataSender}
              />
              <input
                type="email"
                placeholder="Email"
                className="modalFormInput"
                required
                title="El correo electronico es obligatorio"
                name="email"
                disabled={loadDataSender}
              />
              <input
                type="text"
                placeholder="Barrio"
                className="modalFormInput"
                name="neighborhood"
                disabled={loadDataSender}
              />
              <input
                type="number"
                placeholder="Celular"
                className="modalFormInput"
                required
                name="Phone"
                disabled={loadDataSender}
              />
            </div>
            <div>
              <button type="submit">
                ¡Únete!
                {loadDataSender && (
                  <img src={loadIcon} className="ModalIconLoad" />
                )}
              </button>
              <img src={iconImage} alt="Icono de la campaña" />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
