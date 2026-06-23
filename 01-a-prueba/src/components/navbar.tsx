type Props = {
  abrirModal: () => void;
};

function Navbar({ abrirModal }: Props) {
  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        padding: "15px",
        backgroundColor: "#1f2937",
      }}
    >
      <button>Catálogo</button>
      <button>Carrito</button>
      <button>Contactos</button>

      <button onClick={abrirModal}>
        Perfil
      </button>
    </nav>
  );
}

export default Navbar;