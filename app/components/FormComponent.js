var React = require('react');

var Form = React.createClass({
	getInitialState: function() {
	    return {valueA: null, valueB: null};
	},
	handleValueAChange: function(e) {
	    this.setState({valueA: e.target.value});
    },
	handleValueBChange: function(e) {
	    this.setState({valueB: e.target.value});
	},
	handleSubmit: function(e) {
	    e.preventDefault();
	    var valueA = parseInt(this.state.valueA);
	    var valueB = parseInt(this.state.valueB);
	    var result = (valueA/valueB).toFixed(2);
	    this.props.onFormSubmit({result: result});
	    this.setState({valueA: null, valueB: null});
	},
	render: function() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
		        <input
		          type="number"
		          placeholder="Enter A"
		          value={this.state.valueA}
		          onChange={this.handleValueAChange}
		        />
		        <input
		          type="number"
		          placeholder="Enter B"
		          value={this.state.valueB}
		          onChange={this.handleValueBChange}
		        />
		        <input type="submit" value="Divide" disabled={(!this.state.valueA || !this.state.valueB)} />
		    </form>
		);
	}
});

module.exports = Form;