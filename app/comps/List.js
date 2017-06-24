var React = require('react');
var ReactDOM = require('react-dom');

var Note = require('./Note');
var NoteForm = require('./NoteForm');

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mang: ['Android', 'hello', 'NodeJs']
    };
    this.del = this.del.bind(this);
    this.add = this.add.bind(this);
  }

  del(index){
    console.log("List");
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }

add(text){
  this.state.mang.push(text);
  this.setState(this.state);
}
  render(){
    return(
    <div>
      <NoteForm add={this.add}/>
      {this.state.mang.map((e,i) => {
      //this.del truyen di la cua List.del
        return <Note key={i} remove={this.del} index={i}>{e}</Note>;
      })}

    </div>
    );
  }
}

module.exports = List;
