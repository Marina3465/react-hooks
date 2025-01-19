import { FunctionComponent, useCallback, useState } from "react";
import Button from "../../Button";
import Head1 from "../../Head1";

interface CallbackProps {}

const Callback: FunctionComponent<CallbackProps> = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + multiplier);
  }, [multiplier]);

  return (
    <div>
      <Head1>Counter: {count}</Head1>
      <Head1>Multiplier: {multiplier}</Head1>
      <Button onClick={increment}>Counter</Button>
      <div style={{ width: "100%", display: "flex", marginTop: "20px" }}>
        <Button onClick={() => setMultiplier(multiplier + 1)}>
          Increase Multiplier
        </Button>
        <Button onClick={() => setCount(0)}>Reset Counter</Button>
      </div>
    </div>
  );
};

export default Callback;
