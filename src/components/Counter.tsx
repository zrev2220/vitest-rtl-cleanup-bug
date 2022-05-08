import { useState } from "react";

export type CounterProps = {
  suffix?: string;
  pluralString?: string;
};

export const Counter: React.FC<CounterProps> = ({
  suffix: propSuffix = "",
  pluralString,
}) => {
  const [count, setCount] = useState(0);

  let suffix = propSuffix;
  if (pluralString && count !== 1) suffix += pluralString;

  const text = `Count: ${count}${suffix}`;
  return (
    <div>
      <div>{text}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
