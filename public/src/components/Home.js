import React from 'react';
var superAgent = require('superagent');
require('../../style/login-page.css');
import MenuList from './MenuList';
import Nutrition from './Nutrition';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nutRecInfo: [],
      content: 0
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
    this.setState({
      content: 1
    });
  }

  onClickButton() {
    var inputName = document.getElementById("input").value;
    superAgent
      .get('/selectRecipe/name')
      .query({
        name:inputName
      })
      .end((err, res) => {
        if(res.status == 404){
          alert("没有找到您要搜索的美食，可以点击'更多搜索'或'友情链接'继续搜索！");
          return;
        }
        if (err) {
          return;
        }

        this.setState({
          nutRecInfo: res.body
        });
      });

  }

  onClickSort(e) {
    superAgent
      .get(`/selectRecipe/sort`)
        .query({
          sort:`${e.target.id}`
        })
        .end((err, res) => {
          if (err) {
            return;
          }
          this.setState({
            nutRecInfo: res.body
          });
        })
  }

  render() {
    return <div className="container login">
      <div className="input-group content-center" id="div-input">
        <input type="text" id="input" className="form-control"/>
        <span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.onClickButton.bind(this)}>
						Go!
					</button>
				</span>
      </div>

      <div className="nav-center">
        <ul className="nav nav-pills">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              分类 <span className="caret"> </span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/">全部</a></li>
              <li><a id="粥" onClick={this.onClickSort.bind(this)}>粥</a></li>
              <li><a id="汤" onClick={this.onClickSort.bind(this)}>汤</a></li>
              <li><a id="甜点" onClick={this.onClickSort.bind(this)}>甜点</a></li>
              <li><a id="面食" onClick={this.onClickSort.bind(this)}>面食</a></li>
              <li><a id="家常菜" onClick={this.onClickSort.bind(this)}>家常菜</a></li>
            </ul>
          </li>
          <li>
            <a id="nutrition" onClick={this.onClickNutRec.bind(this)}>营养搭配</a>
          </li>
        </ul>
      </div>
      { this.state.content === 1 ?
        <Nutrition className="home-content" id="nutRec"/> :
        <MenuList className="home-content" id="nutRec" menuPro={this.state.nutRecInfo}/>
      }
    </div>
  }
}

export default Home;
