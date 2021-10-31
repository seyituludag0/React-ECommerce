import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthVerify = ({ history }) => {
  history.listen(() => {  // <--- Here you subscribe to the route change
    if (localStorage.getItem("token")) {
      const jwt_Token_decoded = jwt_decode(localStorage.getItem("token"));
      console.log(jwt_Token_decoded.exp * 1000);
      console.log(Date.now());
      if (jwt_Token_decoded.exp * 1000 < Date.now()) {
        localStorage.clear();
      } else {
        console.log("initialstate.user = jwt_Token_decoded;");
      }
    }
  });
  return <div></div>;
};

export default withRouter(AuthVerify);