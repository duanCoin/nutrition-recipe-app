import React from 'react';
var nutrition = require("../mongo/yingYangDaPei.js");

class Nutrition extends React.Component {

  render() {
    return <div>
      {nutrition.default.map((item,index)=> {
        return <div key={index}>
          <h3>{item.stage}</h3>
          <h4>{item.collocation}</h4>
        </div>
      })}
    </div>
  }
}

export default Nutrition;
