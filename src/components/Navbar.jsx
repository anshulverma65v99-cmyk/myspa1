function Navbar({ setPage }) {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("contact")}>Contact</button>
    </nav>
  );
}

export default Navbar;
