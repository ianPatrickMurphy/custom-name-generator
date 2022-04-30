import React from "react";
import "./style.css";

export default class NameGenerator extends React.Component {

  constructor(props) {
    
    super(props);

    this.state = {
      nameFirstPart: "",
      nameSecondPart: "",
      nameThirdPart: "",
      generatedName: "Your Name Here"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const nameFirstPartArray = nameFirstPart.value.split('\n');
    const nameSecondPartArray = nameSecondPart.value.split('\n');
    const nameThirdPartArray = nameThirdPart.value.split('\n');

    this.setState({generatedName: 
      nameFirstPartArray[Math.floor(Math.random() * nameFirstPartArray.length)].toString() + ' ' +
      nameSecondPartArray[Math.floor(Math.random() * nameSecondPartArray.length)].toString() + ' ' +
      nameThirdPartArray[Math.floor(Math.random() * nameThirdPartArray.length)].toString()});

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
          Generate Name
        </button>

        <h2>{this.state.generatedName}</h2>

        <textarea 
          id = "nameFirstPart"
          onChange={this.handleChange}
        />

        <textarea 
          id = "nameSecondPart"
          onChange={this.handleChange}
        />

        <textarea 
          id = "nameThirdPart"
          onChange={this.handleChange}
        />

      </div>
    );
  }
}