import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CONST from "./assets/const";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        name: CONST.TITLE,
        des: CONST.INFO.DESCRIPTION
      },
      footer: {
        address: CONST.INFO.ADDRESS,
        copyright: CONST.INFO.COPYRIGHT
      },
    }
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.header}>
        </Header>
        <Content onContentChange={this.handleContentChange}></Content>
        {/* <Content onContentChange={(data)=>{this.handleContentChange(data)}}></Content> 
          handleContentChange를 arrow function이 아닌 handleContentChange(){````} 로 사용할 때
        */}
        <Footer data={this.state.footer}></Footer>
      </div>
    );
  }

  handleContentChange = (contentState) => {
    this.setState({
      header: contentState === CONST.APPLICATION.STATE.DEFAULT ?
        { name: CONST.TITLE, des: CONST.INFO.PRICEPOLICY }
        : { name: CONST.TITLE, des: CONST.INFO.DESCRIPTION }
    })
  }
}

export default App;
