import React from 'react';
require('../../style/recipe.css');

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      material: '',
      practice: ''
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container recipe-detail">
        <h2>{this.state.name}</h2>
        <image src={this.state.img}></image>
        <h3>原料：{this.state.material}</h3>
        <h3>做法：{this.state.practice}</h3>
      </div>
    );
  }
}

export default Recipe;


