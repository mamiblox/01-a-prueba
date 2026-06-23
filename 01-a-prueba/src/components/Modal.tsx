type Props = {
  abierto: boolean;
  cerrarModal: () => void;
};

function Modal({ abierto, cerrarModal }: Props) {
  if (!abierto) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Perfil</h2>

        <p>Nombre: Juan Pérez</p>
        <p>Email: juan@email.com</p>
        <p>Teléfono: +591 70000000</p>

        <button onClick={cerrarModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;