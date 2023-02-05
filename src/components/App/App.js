import React from 'react';
import './App.css';
import Results from '../Results/Results';
import MainForm from '../MainForm/MainForm';

function App(){
    const [results, setResults] = React.useState([])
    const [isResult, setIsResult] = React.useState(false);
    const [mainFormValues, setMainFormValues] = React.useState([
        {
            characterName: '',
            initiativeModifier: ''
        },
        {
            characterName: '',
            initiativeModifier: ''
        },
    ]);

    function handleChange(e, index){
        const values = [...mainFormValues];

        if (e.target.id === 'characterName' + index) {
            values[index].characterName = e.target.value;
        } else {
            values[index].initiativeModifier = e.target.value;
        }

        setMainFormValues(values);
    }

    function addInputs(){
        const values = [...mainFormValues];

        values.push({
            characterName: '',
            initiativeModifier: ''
        })

        setMainFormValues(values);
    }

    function removeInputs(){
        const values = [...mainFormValues];
        values.splice(-1, 1)
        setMainFormValues(values);
    }

    function rollResults(){
        const values = [...mainFormValues];

        const resultsWithRoll = values.map((character)=>{
            return {
                characterName: character.characterName,
                initiativeModifier: character.initiativeModifier,
                result: (Math.floor(Math.random() * 20) + 1)+Number(character.initiativeModifier)
            }
        })

        setResults(resultsWithRoll);

        setIsResult(true)
    }

    return (
        <div>
            {isResult ?
                <Results
                    list={results}
                    isResult={isResult}
                /> :
                <MainForm
                formValues={mainFormValues}
                handleChange={handleChange}
                rollResults={rollResults}
                add={addInputs}
                remove={removeInputs}/>}
        </div>
    );
}

export default App;
