import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import resumeData from "./res_primaryLanguage.json"
import sharedData from "./portfolio_shared_data.json"

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  };

  render() {
    return (
      <Router>
        <Header sharedData={sharedData.basic_info} />
        <Routes>
          <Route 
            exact path="/" 
            element={<Home
              resumeData={resumeData}
              sharedData={sharedData}
            />}>
          </Route>
          <Route 
            path="/about" 
            element={<About
              resumeBasicInfo={resumeData.basic_info}
              sharedBasicInfo={sharedData.basic_info}
            />}>
          </Route>
        </Routes>
        <Footer 
          sharedBasicInfo={sharedData.basic_info}
        />  
      </Router>
    );
  }
};

export default App;
