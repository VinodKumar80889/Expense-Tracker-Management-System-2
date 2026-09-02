function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">₹</div>

        <div>
          <h1>Expense Tracker</h1>
          <p>Smart spending, better control.</p>
        </div>
      </div>

      <div className="header-badge">
        <span className="status-dot"></span>
        Personal Finance
      </div>
    </header>
  );
}

export default Header;