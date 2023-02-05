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


    return (
        <div>
            <h1>Result</h1>
            <ul>
                {
                    results.map((character, index) =>
                        <CharacterResult
                            key={index}
                            name={character.charMame}
                            result={character.result}/>
                    )
                }
            </ul>
        </div>
    );
}

export default Result;