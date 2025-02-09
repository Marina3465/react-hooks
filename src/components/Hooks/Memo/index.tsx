import { FunctionComponent, useMemo, useState } from "react";
import Button from "../../Button";
import { Input } from "../../Input";
import Head1 from "../../Head1";

interface MemoProps {}

const computeExpensiveValue = (a: number, b: number) => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += a + b;
  }
  return result;
};

export const Memo: FunctionComponent<MemoProps> = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(5);
  const [b, setB] = useState(10);

  const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <div>
      <div>
        <Input
          type="number"
          label="A:"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
      </div>
      <div>
        <Input
          type="number"
          label="B:"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
      </div>
      <Head1>{`Expensive value for a=${a} and b=${b}: ${expensiveValue}`}</Head1>
      <Button
        label={String(count)}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </Button>
    </div>
  );
};
