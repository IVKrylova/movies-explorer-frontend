import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/"> {/* ToDo ProtectedRoute */}
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies"> {/* ToDo ProtectedRoute */}
          <Header />
          <Navigation />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies"> {/* ToDo ProtectedRoute */}
          <Header />
          <Navigation />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile"> {/* ToDo ProtectedRoute */}
          <Header />
          <Navigation />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
