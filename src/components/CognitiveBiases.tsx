import React from 'react';
import data from '../data/biases.json';

export function CognitiveBiases() {

    return <div>
        <h1>List of Cognitive Biases</h1>
        Loaded {data.length} biases
        <div>
            {data.map((bias) => <CognitiveBias key={bias.name} bias={bias} />)}
        </div>
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
            <h2>{bias.name}</h2>
            <div className='description'>{bias.description}</div>
            <div className='group'>{bias.group}</div>
            {bias.type && <div className='type'>{bias.type}</div>}
        </div>)
}