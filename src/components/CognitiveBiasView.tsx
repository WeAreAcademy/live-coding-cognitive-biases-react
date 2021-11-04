import React from 'react';
import { CognitiveBias } from '../types';

export interface CognitiveBiasProps {
    bias: CognitiveBias
}

export function CognitiveBiasView(props: CognitiveBiasProps): JSX.Element {
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
        </div>);
}
