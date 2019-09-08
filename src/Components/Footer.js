import React from 'react';

const Footer = () => {
	return (
		<footer>
			<p>
				Built by{' '}
				<a
					href='https://www.alexandralim.dev'
					target='_blank'
					rel='noopener noreferrer'
				>
					Alexandra Lim
				</a>
				, 2019
			</p>
			<p>
				Powered by{' '}
				<a
					href='https://github.com/lukePeavey/quotable'
					target='_blank'
					rel='noopener noreferrer'
				>
					Quotable API
				</a>
			</p>
		</footer>
	);
};

export default Footer;
