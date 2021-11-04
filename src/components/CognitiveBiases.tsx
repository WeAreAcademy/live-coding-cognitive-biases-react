import React, { useState } from 'react';
import importedBiasData from '../data/biases.json';
import { CognitiveBias } from '../types';
import { CognitiveBiasView } from './CognitiveBiasView';

const biases: CognitiveBias[] = importedBiasData;

export function CognitiveBiases() {
    const [searchTerm, setSearchTerm] = useState('');
    console.log("CognitiveBiases function is called at ", new Date());
    return <div>
        <h1>List of Cognitive Biases</h1>
        <input
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='search term...'
            value={searchTerm} />
        Current Search term: {searchTerm}<br />
        Loaded {biases.length} biases
        <div className='biases'>
            {biases.map((bias) => <CognitiveBiasView key={bias.name} bias={bias} />)}
        </div>
    </div>;
}


