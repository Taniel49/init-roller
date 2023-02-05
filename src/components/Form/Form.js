import React from 'react';
import Input from "../Input/Input";

function Form(props) {
    /*const [formValues, setFormValues] = React.useState([
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
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();

        props.rollResults();
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                {props.formValues.map((obj, index) => (
                    <Input
                        key={index}
                        onChange={props.handleChange}
                        index={index}
                    />
                ))}
                <button type="button" onClick={props.add}>+</button>
                <button type="button" onClick={props.remove}>-</button>
                <button type="submit">
                    Roll
                </button>
            </form>
        </div>
    );
}

export default Form;