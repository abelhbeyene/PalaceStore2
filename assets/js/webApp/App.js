import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import ContentArea from "./components/ContentArea";
import Blog from "./components/Blog";
import About from "./components/About";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hot 82"
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className={"container"}>
            <Header />
            <Switch>
              <Route path="/" component={ContentArea} exact />
              <Route path="/Products" component={Products} exact />
              <Route path="/About" component={About} exact />
              <Route path="/Blog" component={Blog} exact />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const app = document.getElementById("webAppRoot");

ReactDOM.render(<Layout />, app);
