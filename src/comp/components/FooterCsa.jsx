import "./FooterCsa.css";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterCsa() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-top-border"></div>
        <div className="container">
          <div className="footer-nav">
            <div className="flex-wrap d-flex">
              <div className="footer-nav-box">
                <h3>About</h3>
                <ul>
                  <li>
                    <a>About CarrefourSA</a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-box">
                <h3>Our Values</h3>
                <ul>
                  <li>
                    <a>The Right Ones Are at CarreForSA</a>
                  </li>
                  <li>
                    <a>Our Vision</a>
                  </li>
                  <li>
                    <a>Our Mission</a>
                  </li>
                  <li>
                    <a>Our Values</a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-box">
                <h3>Quality Management</h3>
                <ul>
                  <li>
                    <a>Quality Menagement</a>
                  </li>
                  <li>
                    <a>Private Label Products</a>
                  </li>
                  <li>
                    <a>Private Label Quality Menagement</a>
                  </li>
                  <li>
                    <a>Quality Assurance Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-box">
                <h3>Egemen Oguz</h3>
                <ul>
                  <li>
                    <a>Keep going on</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-nav-contact">
              <div className="footer-nav-box">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <span>Email</span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </li>
                  <li>
                    <a blank="_https://github.com/egemenogz">
                      egemen.oztel@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-border">
        <div className="container">
          <div className="footer-info">
            <a>Copyright © Egemen Oguz CarreforSA Clone</a>
            <div className="social">
              <ul>
                <li>
                  <a href="https://github.com/egemenogz" target="_blank">
                    <img src="https://www.carrefoursaexport.com//Templates/template-1/wwwroot/svg/icon-linkedin-white-3bbf966f.svg" alt="linkedIn" />
                  </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
