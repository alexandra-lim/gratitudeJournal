import React from 'react';

const JournalEntry = (
    {date, firstThanks, secondThanks, thirdThanks, removeEntry, uniqueId}
) => {
    return (
        <ul>
            <li key={uniqueId}>
                <button onClick={removeEntry}>Delete</button>
                <h2>{date}</h2>
                <ol>
                    <li>{firstThanks}</li>
                    <li>{secondThanks}</li>
                    <li>{thirdThanks}</li>
                </ol>
            </li>
        </ul>
    );
}

export default JournalEntry;