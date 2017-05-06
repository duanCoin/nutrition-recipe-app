import React from 'react';
require('../../style/recipe.css');
var superAgent = require('superagent');

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

  componentDidMount() {
    superAgent
      .get(`/selectRecipe/${url.id}`)
      .end((err, res) => {
        if (err) {
          return;
        }
        this.setState({
          name: res.body.name,
          img: res.body.img,
          material: res.body.material,
          practice: res.body.practice,
        });
      });
  }


  render() {
    return (
      <div className="container recipe-detail">
        <h2>{this.state.name}</h2>
        <img src={this.state.img}/>
        <h3>原料：{this.state.material}</h3>
        <h3>做法：{this.state.practice}</h3>
      </div>
    );
  }
}

export default Recipe;


