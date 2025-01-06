import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import Paragraph from "../../Paragraph";

interface LocationProps {}

export const Location: FunctionComponent<LocationProps> = () => {
  const data = useLocation();
  return (
    <>
      <Paragraph>
        <b>Path name: </b>
        {data.pathname}
      </Paragraph>
      <Paragraph>
        <b>Search: </b>
        {data.search}
      </Paragraph>
      <Paragraph>
        <b>Hash: </b>
        {data.hash}
      </Paragraph>
      <Paragraph>
        <b>State: </b>
        {data.state.textHeader || data.state.textNavigate}
      </Paragraph>
    </>
  );
};
