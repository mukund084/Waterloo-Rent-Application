import React, { Component } from 'react';

export default class ResidencesList extends Component {
    constructor(props) {
        super(props);

        this.state = { residences: [] };
    }
    componentDidMount() {
        fetch(
            'http://localhost:3001/api/v1/residences'
        )
        .then((response) => response.json())
        .then((result) => this.setState({ residences: result }));
    }

    renderResidences() {
        return this.state.residences.map((residence) => <div>{residence.address}</div>);
    }

    render () {
        return (
        <>
        <h2> Residences List </h2>
        {this.renderResidences()}
        </>
        );
    }

}