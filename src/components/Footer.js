import React from 'react';
import GatsbyLink from 'gatsby-link';

const Footer = () =>
  <div>
    <footer className="footer-social">
      <ul className="social">
        <li>
          <a
            target="_blank"
            href="https://github.com/hisener"
            title="GitHub"
          >
            <i className="icon-github" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hisener"
            title="LinkedIn"
          >
            <i className="icon-linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/hi_sener"
            title="Twitter"
          >
            <i className="icon-twitter" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="mailto:hisener@yahoo.com?subject=Hi!"
            title="Mail"
          >
            <i className="icon-mail" />
          </a>
        </li>
      </ul>
      <div className="text-center">
        Copyright © {new Date().getFullYear()}{' - '}
        <GatsbyLink to="/" title="Halil İbrahim Şener Blog">
          Halil İbrahim Şener
        </GatsbyLink>
      </div>
    </footer>
  </div>;

export default Footer;
