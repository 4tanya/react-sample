var React = require('react');

var Form = require('./FormComponent');
var Table = require('./TableComponent');

var PageWrapper = React.createClass({
	getInitialState: function() {
	    return {results: []};
	},
	handleFormSubmit: function(obj) {
	    var results = this.state.results;
	    this.result = obj.result;
	    this.currentTime = new Date();
	    results.push({result:this.result, currentTime: this.currentTime});
	    this.setState({results: results});
	},
	render: function() {
	    return (
		    <div>		   
		        <Form onFormSubmit={this.handleFormSubmit} />
		        <Table results={this.state.results} />
		    </div>
	    );
	}
});

module.exports = PageWrapper;