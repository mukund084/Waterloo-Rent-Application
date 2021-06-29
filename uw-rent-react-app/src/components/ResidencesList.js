import React, { Component } from 'react';

export default class ResidencesList extends Component {
    constructor(props) {
        super(props);

        this.state = { residences: [] };
    }
    componentDidMount() {
        fetch(
            'https://uw-rent-rest.herokuapp.com/api/v1/residences'
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