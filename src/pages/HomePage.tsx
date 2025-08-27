import Button from '../components/Button';
import useCounter from '../hooks/useCounter';

export default function HomePage() {
  const { count, inc } = useCounter();
  return (
    <section>
      <h1>Home</h1>
      <p>Counter: {count}</p>
      <Button onClick={inc}>Increment</Button>
    </section>
  );
}
