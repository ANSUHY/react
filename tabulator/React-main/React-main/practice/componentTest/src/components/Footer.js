import React from 'react';
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer" >
                <div> Address : {this.props.data.address} </div>
                <div>{this.props.data.copyright} </div>
            </div>
        );
    }
}

export default Footer;
