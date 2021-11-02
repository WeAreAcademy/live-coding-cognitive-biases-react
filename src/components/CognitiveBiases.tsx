import React from 'react';
import data from '../data/biases.json';

export function CognitiveBiases() {

    return <div>
        <h1>List of Cognitive Biases</h1>
        Loaded {data.length} biases
        {data.map((bias) => <CognitiveBias bias={bias} author='neill' />)}
    </div>;
}

//@ts-ignore
function CognitiveBias(props): JSX.Element {
    const bias = props.bias;
    return <div
        key={bias.name}
        className='bias'
    >Bias:
        {bias.name}
        <div className='description'>{bias.description}</div>
        {bias.group}
        hello the author is {props.author}

    </div>
}