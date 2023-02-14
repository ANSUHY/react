import React from 'react';
import Toolbar from '../utilities/Toolbar';
import Movie from '../contents/Movie';
import 'src/css/pages/List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlQuery: {},
            clickedButton: null,
            trigger: null
        }
    }

    handleSearch = (data) => {
        this.setState((state) => {
            const query = state.urlQuery;
            query[data.key] = data.value;
            return { urlQuery: query, trigger: "search" }
        })
    };

    handleClick = (data) => {
        this.setState({ clickedButton: data, trigger: "button" });
    }

    render() {
        return (
            <div className="List">
                <Toolbar onSearch={this.handleSearch} onClick={this.handleClick}></Toolbar>
                <Movie propsObj={this.state}></Movie>
            </div>
        );
    }
}


export default List;
