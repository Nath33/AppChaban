import React, { Component } from 'react';
import {Table, Col, Preloader} from 'react-materialize'
import RenderItem from '../components/RenderItem';

class RenderList extends Component {

    render() {
        return (
            <ul className="App">
                <Table>
                    <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="date">Date</th>
                        <th data-field="h_debut">Heure début</th>
                        <th data-field="h_fin">Heure fin</th>
                        <th data-field="partielement">Partielement</th>
                        <th data-field="bouton">Lien</th>
                    </tr>
                    </thead>
                    <tbody>
                    <RenderItem data= {this.props.items} />
                    </tbody>
                </Table>
                {this.props.items.length === 0 && <Col s={4}><Preloader flashing/></Col>}
            </ul>
        )
    }

}

export default RenderList;
