import React from 'react';
import CharacterResult from "../CharacterResult/CharacterResult";
import {compare} from "../../utils/utils";
import {getInitiative} from "../../utils/utils";
import {v4 as uuidv4} from 'uuid';

function Results() {
    const nameRef = React.useRef('');
    const initiativeRef = React.useRef('');
    const [results, setResults] = React.useState([]);

    function submitNewCharacter(e) {
        e.preventDefault();

        const clonedResults = [...results, {
            _id: uuidv4(),
            characterName: nameRef.current.value,
            result: getInitiative(Number(initiativeRef.current.value))
        }];

        clonedResults.sort(compare);

        setResults(clonedResults);

        nameRef.current.value = '';
        initiativeRef.current.value = '';

        nameRef.current.select();
    }

    function removeCharacter(id) {
        const clonedResults = [...results];

        setResults(clonedResults.filter((character => character._id !== id)));
    }

    return (
        <div>
            {results.length ? <h1>Results</h1> : <h1>Insert Character Name and Modifier</h1>}
            <ul>
                {
                    results.map((character, index) =>
                        <CharacterResult
                            key={character._id}
                            id={character._id}
                            name={character.characterName}
                            result={character.result}
                            removeCharacter={removeCharacter}
                        />
                    )
                }
            </ul>
            <form onSubmit={submitNewCharacter}>
                <h2>Add Character</h2>
                <input required={true}
                       type='text'
                       name='newCharacterName'
                       ref={nameRef}/>
                <input required={true}
                       type='number'
                       name='newCharacterModifier'
                       ref={initiativeRef}/>
                <button type='submit'>Roll</button>
            </form>
        </div>
    );
}

export default Results;