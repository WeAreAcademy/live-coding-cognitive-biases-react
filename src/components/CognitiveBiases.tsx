import React, { useState } from 'react';
import importedBiasData from '../data/biases.json';
import { CognitiveBias } from '../types';
import { CognitiveBiasView } from './CognitiveBiasView';

const biases: CognitiveBias[] = importedBiasData;

export function CognitiveBiases() {
    const [searchTerm, setSearchTerm] = useState('');
    console.log("CognitiveBiases() is called and retrieves the stored searchTerm: ", searchTerm);

    function matchesSearchTerm(bias: CognitiveBias) {
        return (
            bias.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bias.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
    const filteredBiases: CognitiveBias[] = biases.filter(matchesSearchTerm);


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

