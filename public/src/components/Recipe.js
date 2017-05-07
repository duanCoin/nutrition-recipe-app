import React from 'react';
require('../../style/recipe.css');
var superAgent = require('superagent');

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      material: '',
      practice: ''
    }
  }

  componentDidMount() {
    superAgent
      .get(`/selectRecipe/1`)
      .end((err, res) => {
        if (err) {
          return;
        }
        // console.log(res.body)
        this.setState({
          name: res.body.name,
          url: res.body.url,
          material: res.body.material,
          practice: res.body.practice,
        });
      });
  }


  render() {
    return (
      <div className="container recipe-detail">
        <h2>{this.state.name}</h2>
        <img src={this.state.url}/>
        <h3>原料：{this.state.material}</h3>
        <h3>做法：{this.state.practice}</h3>
      </div>
    );
  }
}

export default Recipe;


