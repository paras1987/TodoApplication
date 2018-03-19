var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create a component
var TodoComponent = createReactClass({

getInitialState : function(){
  return {
        agentDetails :   { name : 'paras gor' , learnings : 'React setup, Props, Session' , datetime : '23-01-2018' }
  }
},

    render: function(){
        return(
          <div>
            <p>Learning Sessions... {this.props.message}</p>
            <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <td>Name  </td>
                <td>What have you learned </td>
                <td>Date </td>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>{this.state.agentDetails.name} </td>
              <td>{this.state.agentDetails.learnings} </td>
              <td>{this.state.agentDetails.datetime} </td>
            </tr>
            </tbody>
            </table>
            </div>
        );
    }
});


ReactDOM.render(<TodoComponent  message="Log your time here" />, document.getElementById('todo-wrapper'));
