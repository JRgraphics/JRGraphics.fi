import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import { AnimatedSwitch } from "react-router-transition";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Spinni from "./components/pages/Spinni";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Router>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/spinni/" component={Spinni} />
            <Route path="/etc/" component={Home} />
          </AnimatedSwitch>
          <Nav />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
