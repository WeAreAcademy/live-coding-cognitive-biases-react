import React from 'react';
import data from '../data/biases.json'

const biases = data as CognitiveBias[];

export function CognitiveBiases() {

  const elements = [];
  biases.sort((a, b) => a.name < b.name ? -1 : 1)
  for (let bias of biases) {
    elements.push(<CognitiveBiasView key={bias.name} bias={bias} />)
  }

  return <div className='cog-biases'>
    <h1>List of Cognitive Biases</h1>
    Loaded {biases.length} bias(es)
    {elements}
  </div>;
}
interface CognitiveBias {
  name: string;
  description: string;
  type?: string;
  group: string;
}

interface CognitiveBiasProps {
  bias: CognitiveBias;
}
function CognitiveBiasView(props: CognitiveBiasProps) {
  const bias = props.bias;
  return <div className='bias'>
    <h2>{bias.name}</h2 >
    {bias.description}<br />
    {bias.type && <p className='type'>{bias.type}</p>}
    <p className='group'>{bias.group}</p>
  </div>
}