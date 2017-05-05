import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
var superAgent = require('superagent');
require('../../style/login-page.css');


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nutRecInfo: [],
    }
  }

  componentDidMount() {
    superAgent
      .get('/selectMenu')
      .end((err, res) => {
        if (err) {
          return;
        }
        this.setState({
          nutRecInfo: res.body
        });
      });
  }

  onClickNutRec() {
    document.getElementById('nutRec').innerHTML = '<h3>星期一</h3>' +
      '<h4>&emsp;&emsp;早餐：馒头，牛奶（或豆奶）、煮荷包蛋1个、酱黄瓜。&emsp;中餐：米饭、香菇菜心、糖醋带鱼、丝瓜汤。&emsp;晚餐：绿豆粥、白菜猪肉包子、虾皮冬瓜。</h4>' +
      '<h3>星期二</h3>' +
      '<h4>&emsp;&emsp;早餐：肉包子、牛奶（或豆奶）、咸鸭蛋（半个）。&emsp; 中餐：馒头、黄豆烧牛肉、干煸四季豆、鸡蛋汤。&emsp;晚餐：炒面、清炒菠菜、青椒土豆丝。</h4>' +
      '<h3>星期三</h3>' +
      '<h4>&emsp;&emsp;早餐：窝窝头、牛奶（或豆奶）、卤蛋1个、豆腐乳。&emsp;中餐：米饭、肉末茄子、鸭子海带汤。&emsp;晚餐：&nbsp干煸豆角、稀饭、豆沙包、青椒肉丝。</h4>' +
      '<h3>星期四</h3>' +
      '<h4>&emsp;&emsp;早餐：花卷、牛奶（或豆奶）、煮荷包蛋1个。&emsp;中餐：米饭 、黑木耳肉片、红烧平鱼、白萝卜海带排骨汤。&emsp;晚餐：豆浆或稀饭、葱花饼、青椒芹菜肉丝。</h4>' +
      '<h3>星期五</h3>' +
      '<h4>&emsp;&emsp;早餐：菜包子、牛奶（或豆奶）。&emsp;中餐：米饭、炒菜花、辣子鸡丁，香菇青菜汤。&emsp;晚餐：芹菜肉包子、西红柿炒鸡蛋、肉末烧豆腐。</h4>' +
      '<h3>星期六</h3>' +
      '<h4>&emsp;&emsp;早餐：面包、牛奶（或豆奶）、煎鸡蛋1个。&emsp;中餐：米饭、五香鱼、黄豆芽炒胡萝卜、香菇汤。&emsp;晚餐：馒头，玉米粥、番茄炒蛋、鱼香肉丝。</h4>' +
      '<h3>星期天</h3>' +
      '<h4>&emsp;&emsp;早餐：花卷、牛奶（或豆奶）、煮鸡蛋1个。&emsp;中餐：米饭 黑木耳炒鸡丁、糖醋白菜、南瓜汤。&emsp;晚餐：韭菜猪肉饺子、豆豉油麦菜、肉末炒豇豆。</h4>';

  }

  onClickAllNutRec() {
    document.getElementById('nutRec').innerHTML = '<div>{menuList}</div>';
  }

  render() {
    const menuList = this.state.nutRecInfo.map((item, index)=> {
      return <div key={index} className="menu-div">
        <img className="recipe-img" src={item.url}/>
        <center>{item.name}</center>
      </div>
    });

    return <div className="container login">
      <div className="input-group content-center" id="input">
        <input type="text" className="form-control"/>
        <span className="input-group-btn">
					<button className="btn btn-default" type="button">
						Go!
					</button>
				</span>
      </div>

      <div className="nav-center">
        <ul className="nav nav-pills">
          <li className="dropdown">
            <a className="dropdown-toggle">
              分类 <span className="caret"> </span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#">粥</a></li>
              <li><a href="#">汤</a></li>
              <li><a href="#">甜点</a></li>
              <li><a href="#">面食</a></li>
              <li><a href="#">家常菜</a></li>
            </ul>
          </li>
          <li><a href="#" onClick={this.onClickNutRec.bind(this)}>营养食谱</a></li>
          <li><a href="#" onClick={this.onClickAllNutRec.bind(this)}>菜谱大全</a></li>
        </ul>
      </div>

      <div className="home-content" id="nutRec">{menuList}</div>
    </div>
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <Header/>
        <div id="home-center">
          <Home />
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;
