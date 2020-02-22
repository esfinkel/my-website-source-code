import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

// todo https://react-bootstrap.github.io/components/accordion/ for organization
// https://react-bootstrap.github.io/components/progress/ for scroll progress

class Bonus extends React.Component {

    componentDidMount() {
        // update Goodreads info on Bonus page
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.goodreads.com/user_challenges/widget/5197829-ellis?challenge_id=11621&v=2";
        document.body.appendChild(script);
      }
    

    render() {
      return (
      <div id="bonus">
        <h2>Bonus</h2>
        <br/>
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
            <h3>Relatives of note</h3>
            <ul>
                <li>Writer <a href="https://edfinkel.com"> Edward Finkel</a></li>
                <li>Dartmouth professors <a href="https://russian.dartmouth.edu/people/lynn-ellen-patyk">Lynn Patyk</a> and <a href="https://russian.dartmouth.edu/people/stuart-d-finkel">Stuart Finkel</a></li>
            </ul>
        </Jumbotron>
        <Jumbotron className="jumbotron">
            <h3>Hobby: reading</h3>
            <p>I'm an insatiable reader and semi-active <a href="https://www.goodreads.com">Goodreads</a> user. You can see what books I've logged over the last ~8 years, and my reading progress for this year.</p>
            <GoodreadsEmbedding />
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
  

class GoodreadsEmbedding extends React.Component {
    // see https://www.goodreads.com/user/edit?format=html&tab=widgets
    // with thanks to https://reactgo.com/render-script-tag-component/
    // accesses external script in componentDidMount
    // which replaces everything in "gr_challenge_progress..."
    // just using contents of GoodreadsEmbedding as a default in case updated version not accessible via API
    // but technically I don't need anything inside of that
    render() {
        return (
            <div id="GoodreadsEmbedding">
                <div id="gr_challenge_11621">
                    <div id="gr_challenge_progress_body_11621" >
                        <h3>
                        <a id="gr_a1" rel="nofollow" href="https://www.goodreads.com/challenges/11621-2020-reading-challenge">2020 Reading Challenge</a>
                        </h3>
                            <div className="challengePic">
                            <a id="gr_a2" rel="nofollow" href="https://www.goodreads.com/challenges/11621-2020-reading-challenge"><img alt="2020 Reading Challenge" src="https://images.gr-assets.com/challenges/1575497947p2/11621.jpg" /></a>
                            </div>
                        <div>
                            <a rel="nofollow" href="https://www.goodreads.com/user/show/5197829-ellis">Elisabeth</a> has
                                read 4 books toward
                                their goal of
                                10 books.
                        </div>
                        <div id="gr_div1">
                            <div id="gr_div2"><span id="gr_span1" >hide</span></div>
                        </div>
                        <div id="gr_div3">
                            <a rel="nofollow" href="https://www.goodreads.com/user_challenges/19800366">4 of 10 (40%)</a>
                        </div>
                        <div style={{"textAlign": "right"}}>
                        <a id="gr_a3" rel="nofollow" href="https://www.goodreads.com/user_challenges/19800366">view books</a>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
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
  


