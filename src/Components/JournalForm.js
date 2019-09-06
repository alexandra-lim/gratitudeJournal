import React, {Component} from 'react';

class JournalForm extends Component {
    render() {
        const {handleChange, date, firstThanks, secondThanks, thirdThanks, handleClick} = this.props;

        return (
            <form action="submit">
                <h2>What are three things you are grateful for today?</h2>
                
                <label htmlFor="date">Date</label>
                <input
                    type="text"
                    name="date" 
                    placeholder="Date" 
                    onChange={handleChange}
                    value={date}
                />

                <label htmlFor="firstThanks">1.</label>    
                <input 
                    type="text" 
                    name="firstThanks" 
                    placeholder="Ex. I am grateful for Dug's company"
                    onChange={handleChange}
                    value={firstThanks}
                />

                <label htmlFor="secondThanks">2.</label>
                <input 
                    type="text" 
                    name="secondThanks" 
                    placeholder="Ex. I am grateful for Dug's company"
                    onChange={handleChange}
                    value={secondThanks}
                />

                <label htmlFor="thirdThanks">3.</label>
                <input 
                    type="text" 
                    name="thirdThanks" 
                    placeholder="Ex. I am grateful for Dug's company"
                    onChange={handleChange}
                    value={thirdThanks}
                />

                <button onClick={handleClick}>Log this entry</button>
            </form>
        )
    }
}

export default JournalForm;