import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./pages/checkout/checkout";

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/faq">
                <Checkout />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
            </Switch>
          </div>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
