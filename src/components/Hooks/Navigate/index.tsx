import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Head1 from "../../Head1";
import Button from "../../Button";

interface NavigateProps {}

export const Navigate: FunctionComponent<NavigateProps> = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/useLocation?name=Marina&age=22#trainee", {
      state: { textNavigate: "This is text from page Navigate" },
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Head1>useNavigate</Head1>
      <Button onClick={goToProfile}>Go to useLocation</Button>
      <br />
      <Button onClick={goBack}>Go Back</Button>
    </>
  );
};
