import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    <Route>
      {_ =>
        localStorage.loggedIn === 'true' ? props.component : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;
