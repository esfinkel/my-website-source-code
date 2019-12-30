import React from 'react';

// import notfound from '../img/page_not_found.png'
/* <img src={notfound} alt="example of a 404 error page"></img> */

// const err = () => (
class err extends React.Component {
        render() {
          return (
    <div style={{background: "transparent", padding: "20px", borderRadius: "20px", maxWidth: '500px', margin: 'auto'}}>
        <p>
            <a className="normlink" href="https://esfinkel.github.io">&laquo; Return to main page</a>
        </p>
        {/* {this.props.location.pathname} */}
        <p></p>
        <img src={require('../img/page_not_found.png')} style={{maxWidth: '100%'}} alt="example of a 404 error page"></img>
        <p></p>
        <span className="normlink">
            <a href="https://youtu.be/SQkWF9D-paw" rel="noopener noreferrer" className="quietLink" target="_blank">Looking for </a>
            <a href="https://www.youtube.com/watch?v=aSXtXLAVgkE" className="quietLink" rel="noopener noreferrer" target="_blank">inspiration?</a>
        </span>
    </div>
)
;}} 


export default err;