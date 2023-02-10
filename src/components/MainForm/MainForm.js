import React from 'react';
import InputGroup from "../InputGroup/InputGroup";

function MainForm(props){
    function handleSubmit(e){
        e.preventDefault();

        props.rollResults();
    }

    return (
        <div>
            <h1>Insert Character Names and Initiative Modifiers</h1>
            <form onSubmit={handleSubmit}>
                {props.formValues.map((obj, index) => (
                    <InputGroup
                        key={index}
                        index={index}
                        onChange={props.handleChange}
                    />
                ))}
                <button type="button" onClick={props.add}>+</button>
                <button type="button" onClick={props.remove}>-</button>
                <button type="submit">Roll</button>
            </form>
        </div>
    );
}

export default MainForm;