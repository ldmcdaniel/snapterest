var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  getInitialState: function () {
    return {
      isHeaderHidden: false,
      title: 'Stateful React Component'
    };
  },

  handleClick: function () {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },

  render: function () {
    var headerElement = React.createElement('h1', {
      classNsme: 'header', key: 'header'
    }, this.state.title);
    var buttonElement = React.createElement('button', {
      className: 'btn btn-default',
      onClick: this.handleClick,
      key: 'button'
    }, 'Toggle header');
    return this.state.isHeaderHidden ?
      React.createElement('div', null, [ buttonElement]) :
      React.createElement('div', null, [ buttonElement, headerElement ]);
  },
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
