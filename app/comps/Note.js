var React = require('react');
var ReactDOM = require('react-dom');

class Note extends React.Component{
  constructor(props){
    super(props);
    this.del = this.del.bind(this);
  }
  del(){
    console.log("Note");

    //remove nay la mot function cua List.del
    this.props.remove(this.props.index);
  }
  render(){
  return(
  <div>
    <p>{this.props.children}</p>
    <button onClick={this.del}>Delete</button>
  </div>
  );
  }
}

module.exports = Note;
