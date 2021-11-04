import React, { useState } from 'react';
import importedBiasData from '../data/biases.json';
import { CognitiveBias } from '../types';
import { CognitiveBiasView } from './CognitiveBiasView';

const biases: CognitiveBias[] = importedBiasData;

export function CognitiveBiases() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredBiases: CognitiveBias[] = findMatchingBiases(biases, searchTerm);

    console.log("CognitiveBiases function is called at ", new Date());

    return <div>
        <h1>List of Cognitive Biases</h1>
        <input
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='search term...'
            value={searchTerm} />
        Current Search term: {searchTerm}<br />
        Loaded {biases.length} biases<br />

        Showing {filteredBiases.length} biases<br />
        <div className='biases'>
            {filteredBiases.map((bias) => <CognitiveBiasView key={bias.name} bias={bias} />)}
        </div>
    </div>;
}


function findMatchingBiases(biases: CognitiveBias[], searchTerm: string): CognitiveBias[] {

    function matchesTerm(bias: CognitiveBias): boolean {
        return bias.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bias.description.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return biases.filter(matchesTerm);
}

