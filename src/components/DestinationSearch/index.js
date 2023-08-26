import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    const {destinationsList} = this.props
    this.state = {
      initialDestinationList: destinationsList,
      search: '',
    }
  }

  onInputChange = event => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    const {initialDestinationList, search} = this.state
    console.log(initialDestinationList, search)

    const searchedResults = initialDestinationList.filter(each =>
      each.name.toLowerCase().includes(search),
    )

    return (
      <div className="bg-container">
        <h1 className="head">Destination Search</h1>
        <div className="input-container">
          <input
            onChange={this.onInputChange}
            className="search"
            type="search"
            placeholder="Search"
            value={search}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="places-container">
          {searchedResults.map(each => {
            console.log(each)
            return (
              <DestinationItem
                key={each.id}
                name={each.name}
                imgUrl={each.imgUrl}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
