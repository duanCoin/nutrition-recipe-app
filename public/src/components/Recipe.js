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
      .get(`/selectDetail/${parseInt(this.props.params.id)}`)
      .end((err, res) => {
        if (err) {
          return;
        }
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
          <img src={item.url} id="recipeImg"/>
          <h3>原料：</h3>
            <h4>&emsp; &emsp; {item.material}</h4>
          <h3>做法：</h3>
            <h4>&emsp; &emsp; {item.practice}</h4>
        </div>
      );
    });
    return <div>
      {detail}
    </div>
  }
}

export default Recipe;


