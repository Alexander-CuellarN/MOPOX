import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { MompoxMeMotiva } from "./pages/MompoxMeMotiva/MompoxMeMotiva";
import { MisLogros } from "./pages/MisLogros/MisLogros";
import { Proposito } from "./pages/Proposito/Proposito";
import { Vision } from "./pages/Vision/Vision";
import { Testimonios } from "./pages/Testimonios/Testimonios";
import { useEffect, useState } from "react";
import "./index.css";
import { ModalsComponent } from "./components/ModalsComponent/ModalsComponent";

function App() {
  const [ShowModal, setShowModal] = useState(true);
  const [isAMovil, setIsAMovil] = useState(false);


  function ScrollActived() {
    if (ShowModal) {
      let destinyElement = document.getElementById("root");
      document.body?.classList.add("dontShowScroll");
      if (destinyElement) destinyElement.scrollIntoView();
      setTimeout(() => {
        destinyElement?.scrollIntoView();
      }, 2000);
    } else {
      document.body.classList.remove("dontShowScroll");
    }
  }

  useEffect(() => {
    ScrollActived();
    if (!ShowModal) return;
  }, [ShowModal]);

  function handlerChange() {
    setShowModal(!ShowModal);
  }

  useEffect(()=> {
    if (window.innerWidth <= 1023) {
      setIsAMovil(true)
    }
  }, [isAMovil])

  return (
    <>
      {ShowModal ? <ModalsComponent handlerChange={handlerChange} /> : ""}
      <Routes>
        <Route path="/" element={<Home handlerChange={handlerChange} isAMovil={isAMovil} />} />
        <Route
          path="/MompoxMeMotiva"
          element={<MompoxMeMotiva handlerChange={handlerChange} isAMovil={isAMovil} />}
        />
        <Route
          path="/MisLogros"
          element={<MisLogros handlerChange={handlerChange} />}
        />
        <Route
          path="/Proposito"
          element={<Proposito handlerChange={handlerChange} isAMovil={isAMovil}/>}
        />
        <Route
          path="/Vision"
          element={<Vision handlerChange={handlerChange} isAMovil={isAMovil}/>}
        />
        <Route
          path="/Testimonios"
          element={<Testimonios handlerChange={handlerChange} isAMovil={isAMovil} />}
        />
        <Route path="*" element={<Home handlerChange={handlerChange} isAMovil={isAMovil}/>} />
      </Routes>
    </>
  );
}

export default App;
