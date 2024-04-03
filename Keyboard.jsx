import React from 'react';
import Key from './Key';

function Keyboard({ pressedKeys, typedIndex, phrase }) {
    const nextChar = typedIndex < phrase.length ? phrase[typedIndex] : '';
    const isNextCharUppercase = /^[A-Z]$/.test(nextChar);
    const shiftKeyMap = {
        '`': '~', '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', 
        '6': '^', '7': '&', '8': '*', '9': '(', '0': ')', '-': '_', 
        '=': '+', '[': '{', ']': '}', '\\': '|', ';': ':', '\'': '"', 
        ',': '<', '.': '>', '/': '?'
    };
    const isNextCharSymbolThatRequiresShift = Object.keys(shiftKeyMap).includes(nextChar) || Object.values(shiftKeyMap).includes(nextChar);
    const requiresShiftForNextChar = isNextCharUppercase || isNextCharSymbolThatRequiresShift;

    const rows = [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
        ['SPACE']
    ];

    const isShiftActive = pressedKeys["Shift"];
        return (
        <div className="keyboard">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((keyValue, keyIndex) => {
                        const isSpaceBar = keyValue === 'SPACE';
                        const displayValue = isSpaceBar ? ' ' : (isShiftActive && shiftKeyMap[keyValue] ? shiftKeyMap[keyValue] : isShiftActive ? keyValue.toUpperCase() : keyValue);
                        const className = isSpaceBar ? 'keyboard-key keyboard-key-space' : 'keyboard-key';
                        const spaceBarStyle = isSpaceBar ? { width: '300px', /*had to add space bar style here cause it wasnt working */} : {};

                        return (
                            <Key
                                key={`${keyValue}-${rowIndex}-${keyIndex}`}
                                keyValue={keyValue}
                                displayValue={displayValue}
                                isPressed={isSpaceBar ? pressedKeys[' '] || false : pressedKeys[keyValue] || false}
                                nextChar={nextChar}
                                requiresShift={requiresShiftForNextChar}
                                isShiftKey={keyValue.toLowerCase() === 'shift'}
                                className={className}
                                style={spaceBarStyle}

                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;