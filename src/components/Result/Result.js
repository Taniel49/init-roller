import React from 'react';
import CharacterResult from "../CharacterResult/CharacterResult";

function Result(props) {
    const [results, setResults] = React.useState([]);

    function compare(a, b) {
        if (a.result > b.result) {
            return -1;
        }
        if (a.result < b.result) {
            return 1;
        }
        return 0;
    }

    React.useEffect(() => {
            const sortedArr = [...props.list].sort(compare);
            setResults(sortedArr)
        },
        [props.isResult])

    function removeCharacter (index){
        const resultsCopy = [...results];

        resultsCopy.splice(index,1);

        setResults(resultsCopy);
    }

    return (
        <div>
            <h1>Result</h1>
            <ul>
                {
                    results.map((character, index) =>
                        <CharacterResult
                            key={index}
                            index={index}
                            name={character.charMame}
                            result={character.result}
                            removeCharacter={removeCharacter}
                        />
                    )
                }
            </ul>
        </div>
    );
}

export default Result;