import { Outlet, Link, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-5xl items-center gap-4 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-opacity ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm transition-opacity ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`
            }
          >
            About
          </NavLink>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl p-4">
        <Outlet />
      </main>

      <footer className="mx-auto w-full max-w-5xl p-4 text-sm opacity-70">
        <small>© {new Date().getFullYear()} My React App</small>
      </footer>
    </div>
  );
}
