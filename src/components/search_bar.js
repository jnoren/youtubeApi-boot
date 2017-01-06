import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <img src = "https://www.youtube.com/yt/brand/media/image/YouTube-logo-light.png" alt="img" height="110" width="170" />
        <input
          placeholder = "search..."
          value = {this.state.term}
          onChange= {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
