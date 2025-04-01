import { createSignal, Show } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  const [msg, setMsg] = createSignal("");

  const incrementCount = () => {
    setMsg("");
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    if (count() <= 0) {
      setMsg("Count can not be less than 0");
      return;
    }

    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h2>My First Counter</h2>
      <button onClick={incrementCount}>+</button>
      <span>{count()}</span>
      <button onClick={decrementCount}>-</button>
      <Show when={msg}>
        <p>{msg()}</p>
      </Show>
    </div>
  );
};

export default Counter;
