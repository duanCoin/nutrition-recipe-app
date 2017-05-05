import React from 'react';
require('../../style/footer.css');

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <a className="footerA" href="http://www.baidu.com/" target="_blank">更多搜索</a>
          <a className="footerA" href="http://www.xa01.com/" target="_blank">友情链接</a>
        </div>

        <div id="divFooter">
          <span>本站由西安邮电大学NutritionRecipesAPP团队维护</span>
          <span>Copyright&nbsp;©&nbsp;Nutrition Recipes APP 2017</span>
        </div>
      </footer>
    )
  }
}

export default Footer;
