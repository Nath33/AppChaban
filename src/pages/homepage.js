import React, { Component } from 'react';
import axios from "axios";
import RenderList from '../components/RenderList';
import Search from '../components/Search';

const URL = "http://localhost:1337";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                this.setState({
                    items: res.data
                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }



    render() {
        return (
            <div>
                <Search />
                <RenderList items={this.state.items} />
            </div>
        );
    }
}

export default HomePage;
