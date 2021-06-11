import React from 'react';
import Image from 'react-bootstrap/Image';
// import { withRouter } from "react-router-dom";


// const Home = () => (
class Home extends React.Component {
  render() {
    return (
    <div id="home">
      <h2>Home</h2>
      <br/>
      <p>Hello!</p>
      <p>I'm a software engineer; I have worked largely as a backend developer but also have experience in scripting and full-stack development.</p>
      <p>I dabble in web design, as you can see - I designed/<wbr/>implemented/<wbr/>wrote this website using React (with a bit of React-Bootstrap).</p>
      <br/>
      <p>Elisabeth Finkel</p>
      <p>B.A. Computer Science May 2021, Cornell University</p>
      <Image alt="Headshot" src={require("../img/muir_woods.png").default} style={{maxHeight: 200, maxWidth: "100%"}}
            roundedCircle />
      <div>
        <a style={{float: "right"}} href={require("../img/privacy_policy.pdf").default} download><button className="download-btn"><i className="fa fa-download"></i> Download Privacy Policy</button></a>
      </div>

    </div>
  );}
} 

// export default withRouter(Home);
export default Home;


/* Category component */
// const Contact = () => (
//   <div>
//     <h2>Contact</h2>
//   </div>
// )