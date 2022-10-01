import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import UserService from "../services/UserService";
const initialUserState = {
  isAdmin: false,
  authenticatedUser: null,
};
const UserContext = createContext({ state: initialUserState });

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userStateReducer, initialUserState);

  // const isAdmin = localStorage.getItem("isAdmin");
  const userName = localStorage.getItem("userName");
  useEffect(() => {
    if (userName) {
      let userService = new UserService();
      userService.getByUserName(localStorageUserName()).then((result) => {
        dispatch({ type: "SET_USER", payload: result.data });
        // dispatch({ type: "SET_IS_ADMIN", payload: result.data.roles.some((role) => role.name === "ADMIN")});
        dispatch({ type: "SET_IS_ADMIN", payload: result.data.roles != null ? result.data.roles.some((role) => role.name === "ADMIN"):null});
      });
    }
  }, [userName]);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

function userStateReducer(state = initialUserState, action) {
  let newState = state;
  switch (action.type) {
    case "SET_IS_ADMIN":
      newState = { ...state, isAdmin: action.payload };
      break;
    case "SET_USER":
      newState = { ...state, authenticatedUser: action.payload };
      break;
    default:
      break;
  }
  return newState;
}
export function useUserContext() {
  return useContext(UserContext);
}

function localStorageUserName() {
  return localStorage.getItem("userName");
}
