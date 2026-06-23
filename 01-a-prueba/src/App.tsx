import { useState } from "react";
import Navbar from "./components/navbar";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar abrirModal={() => setOpen(true)} />

      <h1>Bienvenido a Mi Tienda</h1>

      <Modal abierto={open} cerrarModal={() => setOpen(false)} />
    </>
  );
}

export default App;