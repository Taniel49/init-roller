import React from 'react';
import Input from "../Input/Input";

function Form(props) {
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