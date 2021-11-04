import React from 'react';
import importedBiasData from '../data/biases.json';
import { CognitiveBias } from '../types';
import { CognitiveBiasView } from './CognitiveBiasView';

const biases: CognitiveBias[] = importedBiasData;

export function CognitiveBiases() {
    return <div>
        <h1>List of Cognitive Biases</h1>
        Loaded {biases.length} biases
        <div className='biases'>
            {biases.map((bias) => <CognitiveBiasView key={bias.name} bias={bias} />)}
        </div>
    </div>;
}


