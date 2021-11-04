import React from 'react';
import data from '../data/biases.json';

export function CognitiveBiases() {

    return <div>
        <h1>List of Cognitive Biases</h1>
        Loaded {data.length} biases
        {data.map((bias) => <CognitiveBias key={bias.name} bias={bias} />)}
    </div>;
}

//@ts-ignore
function CognitiveBias(props: CognitiveBiasProps): JSX.Element {
    const bias = props.bias;
    return (
        <div
            key={bias.name}
            className='bias'
        >
            {bias.name}
            <div className='description'>{bias.description}</div>
            {bias.group}
        </div>)
}