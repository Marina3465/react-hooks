import { FunctionComponent, useEffect, useState } from "react";
import Head1 from "../../Head1";
import Button from "../../Button";

interface EffectProps {}

const Effect: FunctionComponent<EffectProps> = () => {
  const [empty, setEmpty] = useState<string>("The component is rendering...");
  const [color, setColor] = useState<string>("red");
  const [congratulations, setCongratulations] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isTracking, setIsTracking] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEmpty("The component has rendered!");
      setColor("green");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isTracking) return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTracking]);

  return (
    <>
      <Head1>useEffect</Head1>
      <Head1 color={color}>{empty}</Head1>
      <Button onClick={() => setCongratulations(true)}>
        Receive congratulations
      </Button>
      <br />
      {congratulations && (
        <img
          style={{ position: "absolute", top: "50px" }}
          width="150px"
          src="/icons/hearts.png"
        />
      )}

      <div style={{ marginTop: "150px" }}>
        <Head1>Mouse Tracker with Toggle</Head1>
        <Button
          label={`Current position: (${position.x}, ${position.y})`}
          onClick={() => setIsTracking(!isTracking)}
        >
          {isTracking ? "Stop Tracking" : "Start Tracking"}
        </Button>
      </div>
    </>
  );
};

export default Effect;
