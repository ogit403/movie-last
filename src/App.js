import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routeAdmin, routeHome } from "./route";
import HomeTemplate from './pages/HomeTemplate';
import AdminTemplate from './pages/AdminTemplate';
import PageNotFound from './pages/PageNotFound';
// import AuthPage from './HOC/Auth';

//SCSS
import './assets/scss/sass/Base/_reset.scss';
// import Login from "./components/Home/Login";
import LoginHome from "./pages/HomeTemplate/Login/LoginHome";

function App() {

    const showLayoutHome = route => {
        if(route && route.length)
            return route.map((items, index) => {
                return (
                    <HomeTemplate key={index} exact={items.exact} path={items.path} Component={items.component}/>
                )
            })
    } 

    const showLayoutAdmin = route => {
        if(route && route.length)
            return route.map((items, index) => {
                return (
                    <AdminTemplate key={index} exact={items.exact} path={items.path} Component={items.component}/>
                )
            })
    }

  return (
    <BrowserRouter>
      <Switch>
            {showLayoutHome(routeHome)}
            {showLayoutAdmin(routeAdmin)}
        
            <Route path="/login" component={LoginHome}></Route>
            <Route path='' component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
