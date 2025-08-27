import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <nav className="mx-auto flex max-w-3xl items-center gap-4 p-4">
          <Link to="/" className="text-sm opacity-80 hover:opacity-100">Home</Link>
          <Link to="/about" className="text-sm opacity-80 hover:opacity-100">About</Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer className="mx-auto w-full max-w-3xl p-4 text-sm opacity-70">
        <small>© {new Date().getFullYear()} My React App</small>
      </footer>
    </div>
  );
}
