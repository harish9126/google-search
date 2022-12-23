import './index.css'

const SuggestItem = props => {
  const {suggestItem, onSuggestSelect} = props
  const {suggestion, id} = suggestItem

  const onClickButton = () => {
    onSuggestSelect(suggestion, id)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button onClick={onClickButton} type="button" className="button">
        <img
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestItem
