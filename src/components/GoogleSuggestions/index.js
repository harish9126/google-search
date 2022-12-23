import {Component} from 'react'
import SuggestItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    displayList: '',
  }

  onChangeInput = event => {
    const inputValue = event.target.value.toLowerCase()
    this.setState({searchInput: inputValue})
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(suggestItem => {
      const suggestion = suggestItem.suggestion.toLowerCase()
      return suggestion.includes(inputValue)
    })

    this.setState({displayList: filteredList})
  }

  onSuggestSelect = (suggestion, id) => {
    this.setState({searchInput: suggestion})
    this.setState({displayList: [{suggestion, id}]})
  }

  render() {
    const {suggestionsList} = this.props

    let {displayList} = this.state
    const {searchInput} = this.state

    if (displayList === '') {
      displayList = suggestionsList
    }

    return (
      <div className="app-container">
        <img
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
        />
        <div className="search-suggestions-container">
          <div className="searchbar-container">
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.onChangeInput}
              className="search-input"
              value={searchInput}
              placeholder="Search Google"
            />
          </div>
          <ul className="suggestions-container">
            {displayList.map(suggestItem => (
              <SuggestItem
                key={suggestItem.id}
                onSuggestSelect={this.onSuggestSelect}
                suggestItem={suggestItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
