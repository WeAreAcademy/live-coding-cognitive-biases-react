import React from 'react';
import data from '../data/biases.json';

export function CognitiveBiases() {



    return <div>
        <h1>List of Cognitive Biases</h1>
        Loaded {data.length} biases
        {makeElementsForBiases(data)}
    </div>;
}


function makeElementsForBiases(biases: any) {
    const biasElements = []
    for (let bias of data) {
        biasElements.push(<div>{bias.name}</div>);
    }
    return biasElements;
}