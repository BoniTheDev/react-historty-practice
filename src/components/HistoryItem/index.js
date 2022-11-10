import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="domain-card">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="history-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
        <button type="button" className="delete-card" onClick={onDeleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
