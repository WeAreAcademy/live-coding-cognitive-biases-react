import React from 'react';
import biases from '../data/biases.json'
export function CognitiveBiases() {

  return <div className='cog-biases'>
    Loaded {biases.length} bias(es)
  </div>;
}
