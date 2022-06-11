import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {

//console.log(props.loggedIn)

  return (
    <Route>
      {_ =>
        props.loggedIn ? props.component : <Redirect to="/signin" />
      }
    </Route>
  );
};

export default ProtectedRoute;
