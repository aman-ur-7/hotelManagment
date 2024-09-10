import Cookies from "js-cookie";

export default function IS_LOGGEDIN() {
  const authData = Cookies.get("auth");
  const user = authData ? JSON.parse(authData) : null;

  return user;
}
