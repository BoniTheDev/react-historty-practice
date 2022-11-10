import './index.css'

import {Component} from 'react'

import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistorySearch extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
    historyLength: initialHistoryList.length,
  }

  onSearchByText = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = testid => {
    const {historyList} = this.state
    const filterHistoryItemById = historyList.filter(
      eachHistoryItem => eachHistoryItem.id !== testid,
    )

    this.setState({historyList: filterHistoryItemById})
    this.setState({historyLength: filterHistoryItemById.length})
  }

  render() {
    const {historyList} = this.state
    const {searchInput} = this.state
    const {historyLength} = this.state

    let renderEmptyHistory

    if (historyLength === 0) {
      renderEmptyHistory = <p>There is no history to show</p>
    }

    const searchResult = historyList.filter(eachSearchItem =>
      eachSearchItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (searchResult.length === 0) {
      renderEmptyHistory = (
        <p className="no-history-para">There is no history to show</p>
      )
    }

    return (
      <div className="app-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onSearchByText}
              value={searchInput}
            />
          </div>
        </div>
        <div className="body-container">
          <ul className="search-history-list">
            {renderEmptyHistory}
            {searchResult.map(eachHistoryItem => (
              <HistoryItem
                historyItem={eachHistoryItem}
                key={eachHistoryItem.id}
                deleteHistory={this.deleteHistoryItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistorySearch
