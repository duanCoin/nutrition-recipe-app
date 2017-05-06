import React from 'react';
var nutrition = require("../mongo/yingYangShiPu.js");
class Nutrition extends React.Component {

  render() {
    return <div>
      {nutrition.default.map((item,index)=> {
        return <div key={index}>
          <h3>{item.date}</h3>
          <h4>早餐：{item.breakfast}</h4>
          <h4>午餐：{item.lunch}</h4>
          <h4>晚餐：{item.supper}</h4>
        </div>
      })}
    </div>
  }
}

export default Nutrition;
