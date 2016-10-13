var React = require('react');

var TableHeadingRow = React.createClass({
	render: function() {
	    return (
	    	<tr>
		    	<th id='time'>Time</th>
		    	<th id='result'>Result</th>
	    	</tr>
	    );
	}
});

var TableBodyRow = React.createClass({
	setDateTime: function(d){
		var date = new Date(d);
		return formatDouble(date.getUTCDay()) + '-' + formatDouble(date.getUTCMonth()) + '-' + date.getUTCFullYear() 
			+ ' ' + formatDouble(date.getHours()) + ':' + formatDouble(date.getMinutes()) + ':' + formatDouble(date.getSeconds());
	},
	render: function() {
		var res = this.props.result.result,
			time = this.setDateTime(this.props.result.currentTime);
	    return (
		    <tr>
		        <td>{time}</td>
		        <td>{res}</td>
		    </tr>
	    );
	}
});

var Table = React.createClass({
	render: function() {
		var results = this.props.results,
			rows = [];
	    results.forEach(function(result, index) {
      		rows.push(<TableBodyRow result={result} key={index} />);	
    	}.bind(this));
	    return (
		    <table className="table">
		        <thead><TableHeadingRow /></thead>
		        <tbody>{rows}</tbody>
		    </table>
	    );
	}
});

function formatDouble(d){
	return (d<10)?'0'+d:d;
};

module.exports = Table;