import React from 'react';
require('../../style/recipe.css');
var superAgent = require('superagent');

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: []
    }
  }

  componentDidMount() {
    superAgent
      .get(`/selectRecipe/${parseInt(this.props.params.id)}`)
      .end((err, res) => {
        if (err) {
          return;
        }
        console.log(res.body)
        this.setState({
          detail: res.body
        });
      });
  }

  render() {
    const detail = this.state.detail.map((item)=> {
      return (
        <div className="container recipe-detail">
          <h2>{item.name}</h2>
          <img src={item.url}/>
          <h3>原料：{item.material}</h3>
          <h3>做法：{item.practice}</h3>
        </div>
      );
    });
    return <div>
      {detail}
    </div>
  }
}

export default Recipe;


