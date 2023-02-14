import React from 'react';
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div>{this.props.data.name}</div>
                <div>{this.props.data.des}</div>
            </div>
        );
    }
}

export default Header;
