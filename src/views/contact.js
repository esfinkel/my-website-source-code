import React from 'react';


// const Contact = () => (
class Contact extends React.Component {
    render() {
        return (
    <div>
        <h2>Contact</h2>
        <br/>
        <a style={{color: "lightblue"}} href="https://www.linkedin.com/in/elisabeth-f-139074a8">View LinkedIn profile</a>
        <br/>
        <br/>
        <div>
            <p>Please fill out this form and I will respond at my earliest convenience.</p>
            <br/>
            <div id="contact-form">
                <form action="https://formspree.io/finkelelisabeth@gmail.com" method="POST">
                    <div>
                        <label for="name">Enter your name: </label><br/>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <br/>
                    <div>
                        <label for="email">Enter your email: </label><br/>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <br/>
                    <div>
                        <label for="message">Enter your message here:</label><br/>
                        <textarea name="message" cols="80" rows="5" id="message" style={{width: "100%", maxWidth: '800px'}}></textarea>
                    </div>
                    <br/>
                    <div>
                        <input type="submit" className="normlink" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
;}} 
      

export default Contact;
