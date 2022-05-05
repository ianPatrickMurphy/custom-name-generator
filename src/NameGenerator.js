import React from "react";
import "./style.css";

export default class NameGenerator extends React.Component {

  constructor(props) {
    
    super(props);

    this.state = {
      nameFirstPart: "",
      nameSecondPart: "",
      nameThirdPart: "",
      generatedName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    this.generateName();

  }

  // split the string in each text box into an array of names
  // then select a random element from each array using a random number between 0 and the array length
  generateName() {

    const nameFirstPartArray = nameFirstPart.value.split('\n');
    const nameSecondPartArray = nameSecondPart.value.split('\n');
    const nameThirdPartArray = nameThirdPart.value.split('\n');

    this.setState({generatedName: 
      nameFirstPartArray[Math.floor(Math.random() * nameFirstPartArray.length)].toString() +
      nameSecondPartArray[Math.floor(Math.random() * nameSecondPartArray.length)].toString() +
      nameThirdPartArray[Math.floor(Math.random() * nameThirdPartArray.length)].toString()
    });

  }

  // When the user names changes to the text, update the string storing the names.
  handleChange(e) {
    if(e.target.id == "nameFirstPart"){
      this.setState({nameFirstPart: e.target.value});
    }else if(e.target.id == "nameSecondPart"){
      this.setState({nameSecondPart: e.target.value});
    }else if(e.target.id == "nameThirdPart"){
      this.setState({nameThirdPart: e.target.value});
    }
  }

  componentDidMount() {
    this.generateName() // generate a name immediately when the user enters the page.
  }

  render() {
    return (
      <div>

        <h2>{this.state.generatedName}</h2>

        <button 
          onClick={this.handleClick}>
          Generate Name
        </button>

        <br/><br/>

        <textarea 
          id = "nameFirstPart"
          onChange={this.handleChange}
          defaultValue = {  //provide the user with default names to demonstrate how the app works
            "Zeno\n" +
            "Morthil\n" +
            "Pharom\n" +
            "Fayeth\n" +
            "Ragnor\n" +
            "Volodar\n" +
            "Romulus\n" +
            "Wulfric\n" +
            "Acrid\n" +
            "Meira\n" +
            "Liluth\n" +
            "Erina\n" +
            "Thalia\n" +
            "Fyra\n" +
            "Baldith\n" +
            "Sionia\n" +
            "Lenna\n" +
            "Syvis"
          }
          />

        <textarea 
          id = "nameSecondPart"
          onChange={this.handleChange}
          defaultValue = {  //provide the user with default names to demonstrate how the app works
            ", the "
          }
          />

        <textarea 
          id = "nameThirdPart"
          onChange={this.handleChange}
          defaultValue = {  //provide the user with default names to demonstrate how the app works
            "Omen\n" +
            "Assassin\n" +
            "Bloodhound\n" +
            "Duelist\n" +
            "Chieftain\n" +
            "Sentinel\n" +
            "Soldier\n" +
            "Dragon\n" +
            "Watchdog\n" +
            "Troll\n" +
            "Unforgiven\n" +
            "Immortal\n" +
            "Severed\n" +
            "Hunter\n" +
            "Beastman\n" +
            "Warden\n" +
            "Mariner\n" +
            "Spirit\n" +
            "Golem\n" +
            "Hunter\n" +
            "Guardian\n" +
            "Grafted\n" +
            "Hero of Zamor\n" +
            "Blight\n" +
            "Thief\n" +
            "Noble\n" +
            "Priest\n" +
            "Kindred\n" +
            "Merciful\n" +
            "Puppet\n" +
            "Blind\n" +
            "Last King\n" +
            "Forsaken\n" +
            "All-knowing\n" +
            "Lord of All\n" +
            "Unseen\n" +
            "Giant\n" +
            "Nearly Headless\n" +
            "Foreboding\n" +
            "Foul\n" +
            "Rancid\n" +
            "Amorphous\n" +
            "Tenebrous\n" +
            "Unintelligible\n" +
            "Cannibal\n" +
            "Cruel\n" +
            "Detestable\n" +
            "Hairy\n" +
            "Heinous\n" +
            "Monstrous"
          }
          />

      </div>
    );
  }
}