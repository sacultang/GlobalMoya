import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { RequiredLogin, RequiredLogout } from "./userAccessType.js";
export default function UserCheck(SpecificComponent, option = null) {
  function UserCheck(props) {
    const user = useSelector((state) => state.user.userLogin);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (option) {
        if (option === RequiredLogin && !user) {
          navigate("/login", { state: { path: location.pathname } });
        }
        if (option === RequiredLogout && user) navigate("/");
      }
    }, []);

    return (
      <>
        {option === RequiredLogin ? (
          <SpecificComponent {...props} user={user} />
        ) : (
          <SpecificComponent {...props} />
        )}
      </>
    );
  }
  return UserCheck;
}
