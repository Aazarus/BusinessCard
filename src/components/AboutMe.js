import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export default function AboutMe() {
    return (
        <div className="section">
            <div className="about-me">
                <h5 className="section-title">Aaron Moreland</h5>
                <p className="about-me-content">Full Stack Developer</p>
                <p className="about-me-content">Sevna Software LTD</p>
            </div>
            <div className="about-me-buttons">
                <Button className="about-me-email" variant="light">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <span className="title">Email</span>
                </Button>{' '}
                <Button className="btn-primary about-me-code" variant="primary">
                    <FontAwesomeIcon icon={faCode} className="icon" />
                    <span className="title">GitHub</span>
                </Button>{' '}
            </div>
        </div>
    )
}