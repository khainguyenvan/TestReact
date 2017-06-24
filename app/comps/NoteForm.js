var React = require('react');
var ReactDOM = require('react-dom');


class NoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isAdding: false
    },
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggle(){
    this.state.isAdding = !this.state.isAdding;
    this.setState(this.state);

  }


  handleSubmit(e){
    e.preventDefault();
    this.props.add(this.refs.txt.value);
    this.refs.txt.value = '';
    this.toggle();
  }
  render(){
    if(this.state.isAdding)
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="txt"  />
        <button>Enter</button>
      </form>
    )

    return <button onClick={this.toggle.bind(this)}>+</button>
  }
}

module.exports = NoteForm;
