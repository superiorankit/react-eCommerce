import React from "react";
import "./footer.css"

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="footItems">
                    <div className="items">
                        <h4>Get in touch</h4>
                        <p>ankitkr2411@gmail.com</p>
                        <p>ankitkumar@gmail.com</p>
                    </div>

                    <div className="items">
                        <h4>Connect</h4>
                        <p>Linkedin</p>
                        <p>Twitter</p>
                    </div>


                    <div className="items">
                        <h4>Design Services</h4>
                        <p>Green Valley, near Imperial Heights,</p>
                        <p>Dehradun - Mussoorie Road,</p>
                        <p>Dehradun, Uttrakhand-248009.</p>
                    </div>

                    <div className="items">
                        <h4>Ventures</h4>
                        <p>Green Valley, near Imperial Heights,</p>
                        <p>Dehradun - Mussoorie Road,</p>
                        <p>Dehradun, Uttrakhand-248009.</p>
                    </div>

                </div>
  
                <p className="copyTxt">Copyright React. All Right Reserved.</p>
            </footer>
        )
    }
}

export default Footer;