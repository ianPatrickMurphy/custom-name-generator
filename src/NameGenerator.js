import React from "react";
import "./style.css";

export default class NameGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameFirstPart: "",
      nameSecondPart: "",
      nameThirdPart: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Submit Button Pressed');
  }

  handleChange(e) {
    if(e.target.id == "nameFirstPart"){
      this.setState({nameFirstPart: e.target.value});
    }else if(e.target.id == "nameSecondPart"){
      this.setState({nameSecondPart: e.target.value});
    }else if(e.target.id == "nameThirdPart"){
      this.setState({nameThirdPart: e.target.value});
    }
  }

  render() {
    return (
      <div>

        <button 
        onClick={this.handleClick}>
        Generator Name
        </button>

        <br/>

        <textarea 
        id = "nameFirstPart"
        onChange={this.handleChange}/>

        <textarea 
        id = "nameSecondPart"
        onChange={this.handleChange}/>

        <textarea 
        id = "nameThirdPart"
        onChange={this.handleChange}/>
      </div>
    );
  }
}