const shiftKeyMap = {
    '1': '!',
    '2': '@',
    '3': '#',
    '4': '$',
    '5': '%',
    '6': '^',
    '7': '&',
    '8': '*',
    '9': '(',
    '0': ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    '\\': '|',
    ';': ':',
    '\'': '"',
    ',': '<',
    '.': '>',
    '/': '?',
    '`': '~'
};

import React from 'react';

function Key({ keyValue, displayValue, isPressed, nextChar, requiresShift, isShiftKey, style }) {
    let highlight = false;

    if (isShiftKey) {
        highlight = requiresShift;
    } else {
        const normalizedDisplayValue = displayValue.toLowerCase();
        const normalizedNextChar = nextChar ? nextChar.toLowerCase() : '';
        highlight = normalizedDisplayValue === normalizedNextChar;
    }

    const className = `keyboard-key ${isPressed ? 'active' : ''} ${highlight ? 'highlight' : ''}`;
    const keyClass = `${className} ${isPressed ? 'active' : ''}`;

    const activeClass = isPressed ? 'active' : '';
    const finalClassName = `${className} ${activeClass}`;
    return (
        <div className={keyClass} style={style}>

            {displayValue}
        </div>
    );
}

export default Key;