import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

// todo https://react-bootstrap.github.io/components/accordion/ for organization
// https://react-bootstrap.github.io/components/progress/ for scroll progress

class Bonus extends React.Component {
    render() {
      return (
      <div id="bonus">
        <h2>Bonus</h2>
        <br/>
        <Jumbotron className="jumbotron">
            <h3>Relatives of note</h3>
            <ul>
                <li>Writer <a href="https://edfinkel.com"> Edward Finkel</a></li>
                <li>Dartmouth professors <a href="https://russian.dartmouth.edu/people/lynn-ellen-patyk">Lynn Patyk</a> and <a href="https://russian.dartmouth.edu/people/stuart-d-finkel">Stuart Finkel</a></li>
            </ul>
        </Jumbotron>
        <Jumbotron className="jumbotron">
            <h3>Hobby: music</h3>
                I'm a hobbyist orchestral percussionist and classical pianist.
                <br/>
                I played percussion in countless high school ensembles, and was selected to perform in the 2016 and 2017 <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiC356k5NzmAhXtHzQIHQ7OD4kQFjAAegQIAxAB&url=https%3A%2F%2Filmea.org%2Fallstate-links&usg=AOvVaw3iSshBcfPssfg2Nk15iaLG">Illinois All-State ensembles.</a>
                <br/>
                My high school <a href="https://www.facebook.com/events/275320722877327/">senior recital</a> is <a href="https://youtu.be/SQkWF9D-paw">still viewable online.<br/>
                <StandardSizedImage alt="Photo of me playing the marimba" src={require("../img/bonus/recital.jpg")} roundedCircle />
                <br/>
                </a>
                At Cornell, I play in the <a href="https://www.cuorchestra.org">Symphony Orchestra</a> and in the Percussion Ensemble. The orchestra's concerts are typically <a href="https://www.cornell.edu/video/contributor/cornell-symphony-orchestra">recorded and posted online</a>. In January 2019, we had the privilege and pleasure of <a href="https://www.youtube.com/watch?v=I1XubPdPIaI&feature=youtu.be&fbclid=IwAR1n4x1kFKvFdOuvZnjaLLUWzGPvNdgIekzveWjoAlIMsxxwbdGlVOb3sBA">performing in Taipei, Taiwan</a> with the Taipei Symphony Orchestra.
                <br/>
            <StandardSizedImage alt="Photo of me playing the timpani" src={require("../img/bonus/taipei_symph_reh.jpg")} />
            &nbsp;
            <StandardSizedImage alt="Wide shot of me onstage with the Taipei Symphony Orchestra, playing bass drum" src={require("../img/bonus/taipei_symph.jpg")} />
        </Jumbotron>
        <Jumbotron className="jumbotron">
            <h3>Pets</h3>
            <p>Our darling Luna currently resides in Evanston, IL, with my parents.</p>
            <StandardSizedImage alt="Photo of a small dog lying down" src={require("../img/bonus/dog.jpg")} roundedCircle />
        </Jumbotron>
        <Jumbotron className="jumbotron">
            <h3>Hobby: conlanging</h3>
            <p>
                I've been constructing <a href="https://en.wikipedia.org/wiki/Constructed_language">conlangs</a> since at least 2012.
            </p>
            <StandardSizedImage alt="Screenshot of an Excel table; columns labelled 'English' and 'Kaben, or Telepe (exonym)'. Only a few rows are shown" src={require("../img/bonus/vocab.png")} fluid />
            &nbsp;
            <StandardSizedImage alt="Screenshot of an Excel table; scattered entries cover details like how to inflect pronouns, or how words can combine to form phrases." src={require("../img/bonus/grammar.png")} />
        </Jumbotron>
      </div>
    );}
  } 
  

class StandardSizedImage extends React.Component {
    render() {
        return (
        <Image alt={this.props.alt} src={this.props.src} style={{maxHeight: 200, maxWidth: "100%"}}
            rounded fluid={this.props.fluid} roundedCircle={this.props.roundedCircle} />
        );
    }
}



export default Bonus;
  


