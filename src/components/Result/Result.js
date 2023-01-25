import React, {useEffect} from 'react';
import CharacterResult from "../CharacterResult/CharacterResult";

function Result(props) {
    const [initListSorted, setInitListSorted] = React.useState([]);

    useEffect(()=>setInitListSorted(props.list))

    return (
        <div>
            <h1>Result</h1>
            <ul>
                {
                    initListSorted.map((character) =>
                        <CharacterResult
                            key={character.name}
                            name={character.name}
                            result={character.result}/>
                    )
                }
            </ul>
        </div>
    );
}

export default Result;