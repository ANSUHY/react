import Popup from 'src/components/utilities/Popup'
import React from 'react';
import CONST from 'src/assets/js/const';
import HelpIcon from '@material-ui/icons/Help';
import { Link } from 'react-router-dom';
// import 'src/css/InfoMin.css';

class InfoMin extends React.Component {
    constructor(props) {
        super(props);
        this.popoverID = "popover";
        this.state = {
            anchor: null,
            content: null,
            delayHandler: null
        }
    }

    handleClick = (e) => {
        this.setState({ anchor: e.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchor: null });
    };


    handleMouseEnter = (e) => {
        const target = e.currentTarget;
        this.setState({
            delayHandler:
                setTimeout(() => {
                    this.setState({ anchor: target })
                }, 1000)
        })
    };

    handleMouseLeave = () => {
        clearTimeout(this.state.delayHandler)
        this.setState({ anchor: null });
    }

    generateContent = () => {
        return (
            <div className="Item">
                <div className="ColorPrimary Bold">{CONST.TEXT.PROFILE}</div>
                <div className="ColorExtra Size14">{CONST.TEXT.PERSONAL}</div>
                <div className="ColorExtra Size14">{CONST.TEXT.WORD_LIST}</div>
                <div className="ColorExtra Size14">{CONST.TEXT.GRADE}{CONST.TEXT.ABOUT}</div>
                <div className="ColorExtra Size14">{CONST.TEXT.INFO}{CONST.TEXT.MORE}</div>
            </div>
        )
    }

    render() {
        const level = 8;
        const name = "워디";
        const id = "wordy";
        const email = "wordy@gmail.com";

        return (
            <div className="InfoMin">
                <div className="Title">
                    <span className="ColorExtra Size34 Left">{CONST.TEXT.LEVEL}. {level}</span>
                    <span className="ColorBody SizeRes34 Right Bold">{name}</span>
                    <div className="ColorWarning">
                        <HelpIcon className="RoundButtonDarken"
                            onMouseEnter={this.handleMouseEnter} onClick={this.handleClick} ref={this.myRef} />
                    </div>
                </div>
                <div className="Size16 Item">
                    <span className="ColorExtra Left">{CONST.TEXT.ID}</span>
                    <span className="ColorBody Right">{id}</span>
                </div>
                <div className="Size16 Item">
                    <span className="ColorExtra Left">{CONST.TEXT.MAIL}</span>
                    <span className="ColorBody Right">{email}</span>
                </div>
                <div className="Size14 Bottom">
                    <Link className="ButtonDarken ColorPrimary" to="/">{CONST.BUTTON.LABEL.LOGOUT}</Link>
                    <Link className="ButtonDarken ColorPrimary" to={CONST.ROUTER.PATH.LOGIN}>{CONST.TEXT.PERSONAL}{CONST.TEXT.INFO} {CONST.BUTTON.LABEL.EDIT}</Link>
                </div>
                <Popup anchor={this.state.anchor} id={this.popoverID} content={this.state.content} onClose={this.handleClose}></Popup>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ content: this.generateContent() })
    }
}

export default InfoMin;
