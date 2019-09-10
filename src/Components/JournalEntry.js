import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const JournalEntry = ({
	date,
	firstThanks,
	secondThanks,
	thirdThanks,
	removeEntry,
	uniqueId
}) => {
	return (
		<section className='journalEntry'>
			<ul className='entries'>
				<li className='eachEntry' key={uniqueId}>
					<button onClick={removeEntry}>
						<FontAwesomeIcon icon={faTimes} />
					</button>

					<div className='content'>
						<h3>On {date}, I was grateful for...</h3>
						<ol>
							<li>{firstThanks}</li>
							<li>{secondThanks}</li>
							<li>{thirdThanks}</li>
						</ol>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default JournalEntry;
