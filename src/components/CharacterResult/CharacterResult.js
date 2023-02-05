import React from 'react';

function CharacterResult(props){
    return (
        <li>{props.name}:{props.result}<button type={'button'} onClick={()=>{props.removeCharacter(props.index)}}> remove</button></li>
    );
}

export default CharacterResult;