import React from 'react';
import './App.css';
import Result from '../Result/Result';
import Form from '../Form/Form';

function App() {
    const [sortedArray, setSortedArray] = React.useState([])
    const [isResult, setIsResult] = React.useState(false);
    const [formValues, setFormValues] = React.useState([
        {
            charMame: "",
            initModif: ""
        },
        {
            charMame: "",
            initModif: ""
        },
    ]);

    const handleChange = (e, index) => {
        const values = [...formValues];

        if (e.target.id === 'charName' + index) {
            values[index].charMame = e.target.value;
        } else {
            values[index].initModif = e.target.value;
        }

        setFormValues(values);
    };

    const add = () => {
        const values = [...formValues];

        values.push({
            charMame: "",
            initModif: ""
        })

        setFormValues(values);
    }

    const remove = () => {
        const values = [...formValues];
        values.splice(-1, 1)
        setFormValues(values);
    }

    function rollResults(){
        const values = [...formValues];

        const newResults = values.map((char)=>{
            return {
                charMame: char.charMame,
                initModif: char.initModif,
                result: (Math.floor(Math.random() * 20) + 1)+Number(char.initModif)
            }
        })

        setSortedArray(newResults);

        setIsResult(true)
    }

    return (
        <div className="root">
            {isResult ?
                <Result
                    list={sortedArray}
                    isResult={isResult}
                /> :
                <Form
                formValues={formValues}
                handleChange={handleChange}
                rollResults={rollResults}
                add={add}
                remove={remove}/>}
        </div>
    );
}

export default App;
