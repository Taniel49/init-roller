import React from 'react';

function CharacterResult(props) {
    return (
        <li>{props.name}:{props.result}</li>
    );
}

export default CharacterResult;