import React from 'react';
import "./Content.css";
import CONST from "../assets/const";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state: CONST.APPLICATION.STATE.DEFAULT,
            mainContent: CONST.APPLICATION.STATE.DEFAULT,
            btnText: CONST.APPLICATION.BUTTONS.TRIAL,
        }
    }

    render() {
        return (
            <div className="Content">
                <button onClick={this.btnClick}>{this.state.btnText}</button>
                {/* <button onClick={() => this.btnClick()}>{this.state.btnText}</button> 
                    btnClick을 arrow function이 아닌 btnClick(){ ``` } 으로 사용할 때
                */}
                <div>{this.state.mainContent}</div>
            </div>
        );
    }
    btnClick = (e) => {
        this.props.onContentChange(this.state.state);
        this.setState(
            this.state.state === CONST.APPLICATION.STATE.DEFAULT ?
                {
                    state: CONST.APPLICATION.STATE.TRIAL,
                    mainContent: CONST.APPLICATION.MAIN.TRIAL,
                    btnText: CONST.APPLICATION.BUTTONS.DEFAULT
                } : {
                    state: CONST.APPLICATION.STATE.DEFAULT,
                    mainContent: CONST.APPLICATION.MAIN.DEFAULT,
                    btnText: CONST.APPLICATION.BUTTONS.TRIAL
                }
        )
    }
}


export default Content;
