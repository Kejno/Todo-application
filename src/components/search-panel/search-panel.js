import React from 'react';
import './search-panel.css'

export default class SearchPanel extends React.Component {
    state = {
        term: ''
    }
    onSearchChange = (e) => {
        console.log(e.target)
        const term = e.target.value //получили текущее значение инпута4
        this.setState({ term: term })
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <input type="text"
                className="form-control search input"
                placeholder='type to search'
                value={this.state.term}
                onChange={this.onSearchChange} />
        )
    }
}

