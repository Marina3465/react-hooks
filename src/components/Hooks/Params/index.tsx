import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import Head1 from "../../Head1";

interface ParamsProps {}

const Params: FunctionComponent<ParamsProps> = () => {
  const { id, text } = useParams<{ id: string; text: string }>();

  return (
    <>
      <Head1>{Number(id)}</Head1>
      <Head1>{text}</Head1>
    </>
  );
};

export default Params;
