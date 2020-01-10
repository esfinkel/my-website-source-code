/* Import statements */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home';
import Contact from './views/contact';
import Projects from './views/projects';
import Resume from './views/resume';
import Bonus from './views/bonus';
import err from './views/e404';
import botSquiq from './img/squig-horz-blue.png'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

/* App component */
class App extends Component {

  with_params_to_pass(s) {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("tracked") === "false") return s+"?tracked=false";
    else return s
  }

  render() {
    return (
      <Router>
        {/* this stylesheet is actually for non-react bootstrap! remember to delete */}
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossOrigin="anonymous"></link> */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <div id="full-content">

        <Navbar bg="primary" variant="dark" style={{ maxWidth: "100%", "overflowY": "hidden" }}>
          <Navbar.Brand href={this.with_params_to_pass("/")}>esfinkel.me</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href={this.with_params_to_pass("/")}>Home</Nav.Link>
              <Nav.Link href={this.with_params_to_pass("/contact")}>Contact</Nav.Link>
              <Nav.Link href={this.with_params_to_pass("/projects")}>Projects</Nav.Link>
              <Nav.Link href={this.with_params_to_pass("/resume")}>Resume</Nav.Link>
              <Nav.Link href={this.with_params_to_pass("/bonus")}>Bonus</Nav.Link>
              {/* <Nav.Link href={this.with_params_to_pass("/err")}>Error (for testing)</Nav.Link> */}
          </Nav>
          {/* search bar! */}
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form> */}
        </Navbar>

        <br/>

        <div className="App-header">

          <div id="main-content">
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

