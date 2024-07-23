'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import Typed from 'typed.js';
import { FiCopy } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

export default function Terminal() {
    const el = useRef(null);
    const typed = useRef<null | Typed>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const options = {
            strings: ["cargo add descord"],
            typeSpeed: 60,
            backSpeed: 50,
            loop: false,
            cursorChar: "|",
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current?.destroy();
        }
    }, []);

    const copyToClipboard = useCallback(() => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText("cargo add descord");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, []);

    return (
        <div 
            ref={terminalRef} 
            style={{ 
                width: '12rem',
                margin: '4rem auto',
                border: '2px solid #404040', 
                borderRadius: '5px',
                backgroundColor: 'transparent',
                padding: '1rem', 
                fontFamily: 'monospace', 
                position: 'relative',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }} 
            onClick={copyToClipboard}
            onMouseOver={() => terminalRef.current!.style.backgroundColor = '#262727'}
            onMouseOut={() => terminalRef.current!.style.backgroundColor = 'transparent'}
        >
            <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#FF4500' }}> &gt; </span>
            <span ref={el} style={{ marginLeft: '10px' }}></span>
        </span>
        {copied ? <FaCheck style={{ marginLeft: 'auto', cursor: 'pointer', color: 'green' }}/> : <FiCopy style={{ marginLeft: 'auto', cursor: 'pointer' }}/>}
        </div>
    );
}