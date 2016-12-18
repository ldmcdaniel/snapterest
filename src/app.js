var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  getInitialState: function () {
    return {
      isHeaderHidden: false,
      title: 'Stateful React Component',
      phrase: 'that turns on or off'
    };
  },

  handleClick: function () {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },

  render: function () {
    var headerElementOn = React.createElement('h1', {
      className: 'header',
      key: 'header'
    }, this.state.title);
    var headerElementOff = React.createElement('h1', {
      className: 'header',
      key: 'header'
    }, this.state.phrase);
    var buttonElement = React.createElement('button', {
      className: 'btn btn-default',
      onClick: this.handleClick,
      key: 'button'
    }, 'Toggle header');
    return this.state.isHeaderHidden ?
      React.createElement('div', null, [ buttonElement, headerElementOff]) :
      React.createElement('div', null, [ buttonElement, headerElementOn ]);
  },
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
