class Note extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hocVien: 10
    }
    this.themhocVien = this.themhocVien.bind(this);
  }
  themhocVien(){
    this.setState({hocVien: this.state.hocVien + 1});
  }
  render(){
    return (
      <div>
        <p>{this.props.txt}</p>
        <p>so hoc vien: {this.state.hocVien}</p>

        <button onClick={this.themhocVien}>Them hoc vien</button>
      </div>
    );
  }
}

Note.defaultProps = {
  txt: 'Khainv'
}
ReactDOM.render(
  <div>
  <Note/>
<Note txt="NodeJS"/>
</div>
, document.getElementById("root") );
