import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <header className="container">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">
        <small>© {new Date().getFullYear()} My React App</small>
      </footer>
    </div>
  );
}
