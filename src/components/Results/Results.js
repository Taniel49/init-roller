import React from 'react';
import CharacterResult from "../CharacterResult/CharacterResult";
import Utils from "../../utils/Utils";

function Results({list}) {
    const [results, setResults] = React.useState([]);
    const [formValues, setFormValues] = React.useState({});

    React.useEffect(() => {
        const sortedArr = [...list].sort(Utils.compare);
        setResults(sortedArr)
    }, [list])

    function handleChange(e) {
        const clonedValues = {
            ...formValues
        }

        if (e.target.id === 'newCharacterName') {
            clonedValues.characterName = e.target.value;
        } else {
            clonedValues.initiativeModifier = e.target.value;
        }

        setFormValues(clonedValues);
    }

    function submitNewCharacter(e) {
        e.preventDefault();

        const clonedResults = [...results, {...formValues, result:Utils.getInitiative(formValues)}];

        clonedResults.sort(Utils.compare);

        setResults(clonedResults);
    }

    function removeCharacter(index) {
        const clonedResults = [...results];

        clonedResults.splice(index, 1);

        setResults(clonedResults);
    }

    return (
        <div>
            <h1>Results</h1>
            <ul>
                {
                    results.map((character, index) =>
                        <CharacterResult
                            key={index}
                            index={index}
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
                       type={'text'}
                       id={'newCharacterName'}
                       onChange={(e) => handleChange(e)}/>
                <input required={true}
                       type={'number'}
                       id={'newCharacterModifier'}
                       onChange={(e) => handleChange(e)}/>
                <button type={'submit'}>Add</button>
            </form>
        </div>
    );
}

export default Results;