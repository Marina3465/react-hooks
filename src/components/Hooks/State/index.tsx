import { FC, useState } from "react";
import Button from "../../Button";
import Head1 from "../../Head1";

interface StateProps {}

export const State: FC<StateProps> = () => {
  const [countS, setCountS] = useState<number>(0);

  let count: number = 0;
  const inc = () => {
    count++;
    console.log("Count without useState: " + count);
  };
  return (
    <>
      <Head1>useState</Head1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div>
          <Head1>
            Count without useState (the value is output to the console)
          </Head1>
          <Button label={`Count is ${count}`} onClick={inc}>
            Count + 1
          </Button>
        </div>
        <div>
          <Head1>Count WITH useState</Head1>
          <Button
            label={`Count is ${countS}`}
            onClick={() => setCountS((prev) => prev + 1)}
          >
            Count + 1
          </Button>
        </div>
      </div>
    </>
  );
};
