import Button from '../components/Button';
import useCounter from '../hooks/useCounter';

export default function HomePage() {
  const { count, inc } = useCounter();
  return (
    <section className="grid gap-3">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p>Counter: <span className="font-mono">{count}</span></p>
      <Button onClick={inc}>Increment</Button>
    </section>
  );
}
