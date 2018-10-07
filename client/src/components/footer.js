import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<ul>
				<li>
					<Link to="/faq">FAQ</Link>
				</li>
				<li>
					<Link to="/privacy">Privacy Policy</Link>
				</li>
				<li>
					<Link to="/terms">Terms of Use</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
