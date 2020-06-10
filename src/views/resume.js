import React from 'react';
import Image from 'react-bootstrap/Image';
// import { Document, Page } from 'react-pdf'; cannot load
// import { PDFReader } from 'react-read-pdf';    "bad pdf structure"
// don't use iFrames lol
// something from bootstrap?

class Resume extends React.Component {
    render() {
        return (
    <div id="resume">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <h2>Resume</h2>
        <br/>
        <div><a href={require("../img/Elisabeth_Finkel_resume.pdf")} download><button className="download-btn"><i className="fa fa-download"></i> Download PDF</button></a></div>
        <br/>
        <div>
            {/* <embed src={require("../img/Elisabeth_Finkel_resume.pdf")} width="100%" height="500px" type="application/pdf" style={{backgroundColor: "white"}}></embed> */}
            <Image alt="My resume; the PDF is downloadable above" src={require("../img/Elisabeth_Finkel_resume.png")} width="100%" style={{maxWidth: "800px"}} height="auto"/>
        </div>
    </div>
)
;}} 
      

export default Resume;
