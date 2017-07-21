import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSearch(this.state.value);

    ReactDOM.findDOMNode(this).querySelector('input').blur();
  }

  render() {
    return (
      <form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <div className="input-group">
              <input type="text" className="form-control" id="address" placeholder="Find a location..."
                value={this.state.value} onChange={this.handleChange.bind(this)} />
              <span className="input-group-btn">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
