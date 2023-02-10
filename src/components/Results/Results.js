import React from 'react';
import CharacterResult from "../CharacterResult/CharacterResult";

function Results(props) {
    const [results, setResults] = React.useState([]);
    const [formValues, setFormValues] = React.useState({});

    function compare(a, b) {
        if (a.result > b.result) {
            return -1;
        }
        if (a.result < b.result) {
            return 1;
        }
        if (a.result === b.result) {
            if (a.initiativeModifier < b.initiativeModifier) {
                return 1;
            }
            if (a.initiativeModifier > b.initiativeModifier) {
                return -1;
            }
            if (a.initiativeModifier === b.initiativeModifier) {
                const randomNumber = Math.random();
                if (randomNumber > 0.5) {
                    return 1
                }
                return -1
            }
        }
    }

    React.useEffect(() => {
        const sortedArr = [...props.list].sort(compare);
        setResults(sortedArr)
    }, [props.list])

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

        const clonedResults = [...results];
        const clonedValues = {
            ...formValues
        }

        clonedValues.result = (Math.floor(Math.random() * 20) + 1) + Number(clonedValues.initiativeModifier);

        clonedResults.push(clonedValues);

        clonedResults.sort(compare);

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