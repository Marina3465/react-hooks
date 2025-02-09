import { FunctionComponent, useCallback, useEffect, useState } from "react";
import Button from "../../Button";
import Head1 from "../../Head1";

interface CallbackProps {}

export const Callback: FunctionComponent<CallbackProps> = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + multiplier);
  }, [multiplier]);

  useEffect(() => {
    console.log(count);
  }, [increment]);

  return (
    <div>
      <Head1>Counter: {count}</Head1>
      <Head1>Multiplier: {multiplier}</Head1>
      <Button onClick={increment}>Counter</Button>
      <div style={{ width: "100%", display: "grid", marginTop: "20px" }}>
        <Button onClick={() => setMultiplier(multiplier + 1)}>
          Increase Multiplier and view result in console
        </Button>
        <Button onClick={() => setCount(0)}>Reset Counter</Button>
      </div>
    </div>
  );
};
