import React from 'react';
import importedBiasData from '../data/biases.json';

interface CognitiveBias {
    name: string;
    description: string;
    group: string;
    type?: string;
}
const biases: CognitiveBias[] = importedBiasData;

export function CognitiveBiases() {
    return <div>
        <h1>List of Cognitive Biases</h1>
        Loaded {biases.length} biases
        <div>
            {biases.map((bias) => <CognitiveBiasView key={bias.name} bias={bias} />)}
        </div>
    </div>;
}
interface CognitiveBiasProps {
    bias: CognitiveBias
}

function CognitiveBiasView(props: CognitiveBiasProps): JSX.Element {
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