import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container} from 'reactstrap';
import '../assets/css/component.css';

function Footer(){

    return(
    <div>
        <Container fluid="true" id="footer">
            <div className="d-flex justify-content-center">
                <a className="social" href="https://www.facebook.com/theietcet/">
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
                <a className="social" href="https://instagram.com/ietcet?igshid=1nfxkw5gz2va2">
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
                <a className="social" href="mailto:ietoncampus@cet.ac.in">
                    <FontAwesomeIcon icon={faGoogle} size='2x' />
                </a>
            </div>
            <div className="d-flex justify-content-center" id="footnote">
                <p>IET On Campus CET</p>
            </div>
            <div className="d-flex justify-content-center" id="footnote">
                <p>College of Engineering, Trivandrum</p>
            </div>
            <div className="d-flex justify-content-center" id="footnote">
                <p>Developed by Sheen Xavier A</p>
            </div>
        </Container>
    </div>
    )
}

export default Footer;
