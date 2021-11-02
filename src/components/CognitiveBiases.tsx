import React, { useState } from 'react';
import data from '../data/biases.json'
import { CognitiveBias } from '../types';
import { CognitiveBiasView } from './CognitiveBiasView';

const biases = data as CognitiveBias[];

export function CognitiveBiases() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  function handleSearchTermChange(txt: string) {
    setSearchTerm(txt);
  }
  function handleToggleSortOrder() {
    setIsAscendingOrder(prev => !prev);
  }

  function handleToggleIsOpen() {
    setIsOpen(prev => !prev);
  }
  const filteredBiases = sortBiases(biases, isAscendingOrder).filter(b => matchesSearchTerm(b, searchTerm));

  function Counts() {
    return <>
      Loaded {biases.length} bias(es) total<br />
      Showing {filteredBiases.length} bias(es) {searchTerm.length > 0 && <>matching "{searchTerm}"</>}<br />
    </>
  }

  return <div className='cog-biases'>
    <h1>List of Cognitive Biases</h1>

    <input
      value={searchTerm}
      onChange={(event) => handleSearchTermChange(event.target.value)}
      placeholder={"search term..."} />

    <button onClick={handleToggleSortOrder}>{isAscendingOrder ? 'ascending' : 'descending'}</button>
    <button onClick={handleToggleIsOpen}>{isOpen ? 'open' : 'closed'}</button>
    <br />
    <Counts />
    <div className='biases'>
      {filteredBiases.map(b => <CognitiveBiasView key={b.name} bias={b} isOpen={isOpen} />)}
    </div>
    <hr />
    <div className='footer'>
      Data from <a href="https://en.wikipedia.org/wiki/List_of_cognitive_biases">Wikipedia's List of Cognitive Biases</a>
      <br />
      <a href="/downloadables/biases.json" download>Download as JSON</a>
    </div>
  </div>;
}



function sortBiases(biases: CognitiveBias[], isAscendingOrder: boolean) {
  const sorted = [...biases].sort((a, b) => a.name < b.name ? -1 : 1)
  return isAscendingOrder ? sorted : sorted.reverse()
}

export function matchesSearchTerm(bias: CognitiveBias, term: string) {
  return bias.name.toLowerCase().includes(term.toLowerCase()) ||
    bias.description.toLowerCase().includes(term.toLowerCase())
}
