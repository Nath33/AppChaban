import React, { Component } from 'react';
import axios from "axios";
import RenderList from '../components/RenderList';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:1337/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    items: [res.data]
                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }

    render() {
        return (
            <div>
                <RenderList items={this.state.items} />
            </div>
        );
    }
}

export default HomePage;
