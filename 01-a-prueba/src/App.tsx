import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar
        onProfileClick={() => alert("Perfil")}
        onCartClick={() => alert("Carrito")}
        onCatalogClick={() => alert("Catálogo")}
        onContactsClick={() => alert("Contactos")}
      />

      <main style={{ padding: "20px" }}>
        <h1>Bienvenido a la tienda</h1>
      </main>
    </>
  );
}

export default App;