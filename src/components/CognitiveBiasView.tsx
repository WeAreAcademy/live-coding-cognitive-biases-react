import React from 'react';
import { CognitiveBias } from '../types';

export interface CognitiveBiasProps {
    bias: CognitiveBias;
}
export function CognitiveBiasView(props: CognitiveBiasProps) {
    const bias = props.bias;
    return <div className='bias'>
        <h2>{bias.name}</h2>
        {bias.description}<br />
        {bias.type && <p className='type'>{bias.type}</p>}
        <p className='group'>{bias.group}</p>
    </div>;
}
