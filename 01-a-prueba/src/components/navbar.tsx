import React from "react";

interface NavbarProps {
  onProfileClick?: () => void;
  onCartClick?: () => void;
  onCatalogClick?: () => void;
  onContactsClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onProfileClick,
  onCartClick,
  onCatalogClick,
  onContactsClick,
}) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h2>Mi Tienda</h2>
      </div>

      <div style={styles.menu}>
        <button style={styles.button} onClick={onCatalogClick}>
          Catálogo
        </button>

        <button style={styles.button} onClick={onCartClick}>
          Carrito
        </button>

        <button style={styles.button} onClick={onContactsClick}>
          Contactos
        </button>

        <button style={styles.profileButton} onClick={onProfileClick}>
          Perfil
        </button>
      </div>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#1f2937",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    backgroundColor: "#374151",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
  },
  profileButton: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Navbar;