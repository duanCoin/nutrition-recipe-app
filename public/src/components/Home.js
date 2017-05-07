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
          alert("请输入正确的名称");
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

  onClickZhou(e) {
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

  onClickTang(e) {
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

  onClickDesert(e) {
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

  onClickMian(e) {
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

  onClickCai(e) {
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

//   superAgent
// .get('/selectMenu')
// .end((err, res) => {
//   if (err) {
//     return;
//   }
//   this.setState({
//   nutRecInfo: res.body
// });
// });

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
              <li><a id="粥" onClick={this.onClickZhou.bind(this)}>粥</a></li>
              <li><a id="汤" onClick={this.onClickTang.bind(this)}>汤</a></li>
              <li><a id="甜点" onClick={this.onClickDesert.bind(this)}>甜点</a></li>
              <li><a id="面食" onClick={this.onClickMian.bind(this)}>面食</a></li>
              <li><a id="家常菜" onClick={this.onClickCai.bind(this)}>家常菜</a></li>
            </ul>
          </li>
          <li>
            <a id="nutrition" onClick={this.onClickNutRec.bind(this)}>营养食谱</a>
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
