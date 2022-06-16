import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    <Route>
      {_ =>
        props.loggedIn ? props.component : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;
