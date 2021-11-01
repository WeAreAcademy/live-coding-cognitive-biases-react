import React, { useState } from 'react';
import data from '../data/biases.json'
import { CognitiveBias } from '../types';
import { CognitiveBiasView } from './CognitiveBiasView';

const biases = data as CognitiveBias[];

export function CognitiveBiases() {
  const [searchTerm, setSearchTerm] = useState('');


  function handleSearchTermChange(txt: string) {
    setSearchTerm(txt);
  }

  biases.sort((a, b) => a.name < b.name ? -1 : 1)
  const filteredBiases = biases.filter(matchesSearchTerm);


  function matchesSearchTerm(bias: CognitiveBias) {
    return bias.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bias.description.toLowerCase().includes(searchTerm.toLowerCase())
  }


  return <div className='cog-biases'>
    <h1>List of Cognitive Biases</h1>
    <input
      value={searchTerm}
      onChange={(event) => handleSearchTermChange(event.target.value)}
      placeholder={"search term..."} />
    Search term is : {searchTerm}<hr />
    Loaded {biases.length} bias(es)<br />
    Showing {filteredBiases.length} bias(es)<br />
    <div className='biases'>
      {makeElementsForBiases(filteredBiases)}
    </div>
  </div>;
}



function makeElementsForBiases(biasList: CognitiveBias[]) {
  const elements = [];
  for (let bias of biasList) {
    elements.push(<CognitiveBiasView key={bias.name} bias={bias} />)
  }

  return elements;
}