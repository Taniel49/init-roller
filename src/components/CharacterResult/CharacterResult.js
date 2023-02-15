import React from 'react';

function CharacterResult({name, result, index, removeCharacter}){
    return (
        <li>{name}:{result}<button type={'button'} onClick={()=>{removeCharacter(index)}}> remove</button></li>
    );
}

export default CharacterResult;