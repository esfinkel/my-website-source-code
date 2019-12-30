import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { ListGroup, ListGroupItem } from 'react-bootstrap';



// TODO onmouseover
class Projects extends React.Component {
    
    constructor(props) {
        super(props);
        // this.hasMouse = window.matchMedia("(any-hover: none)").matches;
        this.hasMouse = !( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
        window.console.log('mouse presence: '+this.hasMouse);
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossOrigin="anonymous"></link>
                <h2>Projects</h2>
                <p><a style={{color: "lightblue"}} href="https://github.com/esfinkel?tab=repositories">View all repositories</a></p>
                <br/>
                <div style={{color: "black"}}>
                    <CardColumns>
                        <MyCard
                            url="https://esfinkel.github.io/netprint-finder"
                            imgSrc={require("../img/project_cards/netprint-web.png")}
                            title="Netprint Finder (web app)"
                            text="Website that presents users with a list of the nearest open, netprint-enabled printers on Cornell campus."
                            lastUpdated="August 25, 2019"
                            extra="Nearest Netprint was written in Javascript/HTML and employs a local database."
                            repo="https://github.com/esfinkel/netprint-finder"
                        />
                        <MyCard
                            url="https://esfinkel.github.io/finkel-peterson-family-tree/"
                            imgSrc={require("../img/project_cards/Tree.png")}
                            title="Family Tree (web app)"
                            text="Interactive family tree for the Finkel-Peterson family."
                            lastUpdated="August 11, 2019"
                            extra={<span>Designed to be usable by my less tech-savvy relatives.<br/>Written in HTML and JS. Features the GoJS library.</span>}
                            repo="https://github.com/esfinkel/finkel-peterson-family-tree"
                        />
                        <MyCard
                            url="https://github.com/esfinkel/nearest_netprint"
                            imgSrc={require("../img/project_cards/netprint.png")}
                            title="Nearest Netprint (Python)"
                            text="Presents users with a list of the nearest open, netprint-enabled printers on Cornell campus."
                            lastUpdated="July 28, 2019"
                            extra="Nearest Netprint was written in Python 3 and employs web-scraping (via Selenium) and a local database."
                        />
                        <MyCard
                            url="https://github.com/esfinkel/game_of_life"
                            imgSrc={require("../img/project_cards/game_of_life.png")}
                            title="Game of Life"
                            text="Based on the titular mathematical Gedankenexperiment by John Horton Conway."
                            extra='"Each cell is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours..."'
                            lastUpdated="May 29, 2019"
                        />
                        <MyCard
                            url="https://github.com/esfinkel/Hack-Challenge-Fall-2018"
                            imgSrc={require("../img/project_cards/app.png")}
                            title="CollabIT"
                            text="A social media app for CS students to meet one another."
                            lastUpdated="Dec 19, 2018"
                            extra="I created the backend, which has a Google-hosted Flask API and a local SQLite database."
                        />
                        <MyCard
                            url="https://github.com/esfinkel/n-body-simulator"
                            imgSrc={require("../img/project_cards/SolarSystem.gif")}
                            title="n-body simulator"
                            text="Model an arbitrarily complex system of objects acting under the force of gravity."
                            lastUpdated="October 7, 2018"
                        />
                        <MyCard
                            url="https://github.com/esfinkel/n-body-tutorial"
                            imgSrc={require("../img/project_cards/nbody.jpg")}
                            title="n-body tutorial"
                            text="Tutorial for a simplified version of n-body simulator."
                            lastUpdated="September 1, 2018"
                        />
                    </CardColumns>
                </div>
            </div>
        )
    ;}
} 

export default Projects;

class MyCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.hasMouse = !( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
        this.setHover = this.setHover.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }

    // async getLastUpdate(projectURL) {
    //     var name = projectURL.substring(projectURL.lastIndexOf('/'));
    //     window.console.log("https://api.github.com/repos/esfinkel"+name);
    //     const res = await fetch("https://api.github.com/repos/esfinkel" + name, {});
    //     // const date = await res.json().pushed_at;
    //     const date = await res.json()['pushed_at'];
    //     return date;
    //     return date.substring(0, date.indexOf('T'));
    //     // fetch("https://api.github.com/repos/esfinkel" + name)
    //     //     .then(res => res.json())
    //     //     .then((function(json) {var date = json.pushed_at; var i = date.indexOf('T'); return date.substring(0, i);}))
    //     //     .catch(function(e) {return "Unknown";})
    //     // return true;
    // }

    // setDate(ds) {
    //     this.props.lastUpdatedGit = ds;
    // }


    setHover(bool) {
        this.setState({isHovering: bool});
    }

    toggleHover() {
        this.setHover(!this.state.isHovering);
    }

    render() {
        return (
            <Card style={{display: "inline-block"}}>
                {/* // onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)}> */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossOrigin="anonymous"></link>
                <a href={this.props.url} className="quietLink" target="_blank" rel="noopener noreferrer" >
                    {typeof this.props.imgSrc !== 'undefined' &&
                        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex',}}>
                            <Card.Img variant="top" style={{alignSelf: 'center',}} src={this.props.imgSrc} />
                        </div>
                    }
                    <Card.Body style={{padding: "10px"}}>
                    {/* <Card.Body> */}
                        <Card.Title style={{textAlign: "center"}}><br/>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.text}</Card.Text>
                        <div></div>
                    </Card.Body>
                </a>
                {(typeof this.props.extra !== 'undefined' || typeof this.props.repo !== 'undefined') && this.state.isHovering &&
                    <ListGroup className="list-group-flush">
                        {typeof this.props.extra !== 'undefined' && <ListGroupItem><small>{this.props.extra}</small></ListGroupItem>}
                        {typeof this.props.repo !== 'undefined' && <ListGroupItem><small><a href={this.props.repo}>View repo</a></small></ListGroupItem>}
                    </ListGroup>
                }
                <Card.Footer class="card-footer" onClick={this.toggleHover}>
                    {typeof this.props.lastUpdated !== 'undefined' &&          
                        <small className="text-muted">Last major update: {this.props.lastUpdated}.</small>
                    }
                    {((typeof this.props.extra !== 'undefined' || typeof this.props.repo !== 'undefined') && (!this.hasMouse)) &&
                        <small className="text-muted"><br/>(tap here for {this.state.isHovering ? 'less' : 'more'} info)</small>
                    }
                    {((typeof this.props.extra !== 'undefined' || typeof this.props.repo !== 'undefined') && (this.hasMouse)) &&
                        <small className="text-muted"><br/>(click here for {this.state.isHovering ? 'less' : 'more'} info)</small>
                    }
                    {/* {typeof this.props.lastUpdated == 'undefined' && // If I provide an update date, use that. Otherwise query github. 
                        <small className="text-muted">Last updated {this.getLastUpdate(this.props.url)}</small>
                    } */}
                </Card.Footer>
            </Card>
        )
    }
}
