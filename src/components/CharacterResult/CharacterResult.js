import React from 'react';

function CharacterResult(props) {
    return (
        <li>{props.name}:{props.result}<button onClick={()=>{props.removeCharacter(props.index)}}>remove</button></li>
    );
}

export default CharacterResult;