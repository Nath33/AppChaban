import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RenderItem extends Component {

    render() {
        return (
            this.props.data.map(function(items, i) {
                return <tr key={i}>
                    <td>{items.id}</td>
                    <td>{items.date}</td>
                    <td>{items.start}</td>
                    <td>{items.end}</td>
                    <td>{items.totale ? "Non" : "Oui"}</td>
                    <td><Link to={`/${items.id}`}>détails</Link></td>
                </tr>
            })
        )
    }

}

export default RenderItem;
