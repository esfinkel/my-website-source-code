/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home';
import Contact from './views/contact';
import Projects from './views/projects';
import Resume from './views/resume';
import Bonus from './views/bonus';
import err from './views/e404';
import Sidebar from "react-sidebar";
import botSquiq from './img/squig-horz.png'



/* App component */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });    
    document.getElementById("toggle-btn").classList.toggle('moved');
    document.getElementById("main-content").classList.toggle('moved');
  }

  with_params_to_pass(s) {
    var urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.get("taggedness"));
    // return s;
    if (urlParams.get("taggedness") === "untagged") return s+"?taggedness=untagged";
    else return s
  }

  render() {
    return (
      <Router>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossOrigin="anonymous"></link>
      <div>
        <Sidebar
          children={<div></div>}
          sidebar={
            <nav className="navbar navbar-light">
              <ul className="nav navbar-nav">
                {/* Link components are used for linking to other views */}
                <Link to={this.with_params_to_pass("/")}><li>Home</li></Link>
                <Link to={this.with_params_to_pass("/contact")}><li>Contact</li></Link>
                <Link to={this.with_params_to_pass("/projects")}><li>Projects</li></Link>
                <Link to={this.with_params_to_pass("/resume")}><li>Resume</li></Link>
                <Link to={this.with_params_to_pass("/bonus")}><li>Bonus</li></Link>
                {/* <Link to="/err"><li>Error<small><br/>(for testing)</small></li></Link> */}
              </ul>
            </nav>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#004d7ce0", width: "150px" } }}
        >
        </Sidebar>
        <div className="App-header">
          <div id="main-content">
            {/* <div id="toggle-btn" onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}><span></span><span></span><span></span></div> */}
            <div id="toggle-btn" onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}><span></span><span></span><span></span></div>
            <div id="page-content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/bonus" component={Bonus}/>
              <Route component={err}/>
            </Switch>
            <br/>
            <div style={{display: 'grid', height: '100%'}}><img src={botSquiq} alt="Decorative squiggle" style={{width: '100%', maxWidth: '1000px', maxHeight: '50px', margin: 'auto'}} /></div>
            </div>
          </div>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;

