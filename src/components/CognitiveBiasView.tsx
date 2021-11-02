import React from 'react';
import { CognitiveBias } from '../types';
import { FaRegCopy } from 'react-icons/fa';

export interface CognitiveBiasProps {
    bias: CognitiveBias;
    isOpen: boolean;
}

export function CognitiveBiasView(props: CognitiveBiasProps) {
    const bias = props.bias;

    function copyToClipboard() {
        //TODO: not available on all browsers
        navigator.clipboard.writeText(JSON.stringify(bias, null, 2))
    }

    return <div className='bias'>
        <h2>{bias.name}</h2>
        {props.isOpen && <>
            {cleanDescription(bias.description)} < br />
            {bias.type && <p className='type'>{bias.type}</p>}
            < p className='group'>{bias.group}</p>
        </>}
        <button className={'copy'} onClick={copyToClipboard}><FaRegCopy /></button>
    </div >;
}

export function cleanDescription(str: string): string {
    return str.replaceAll(/\[[0-9]+\]/gi, '');
}