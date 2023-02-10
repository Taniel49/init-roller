import React from 'react';
import InputGroup from "../InputGroup/InputGroup";

function MainForm({formValues,handleChange, rollResults, add, remove}){
    function handleSubmit(e){
        e.preventDefault();

        rollResults();
    }

    return (
        <div>
            <h1>Insert Character Names and Initiative Modifiers</h1>
            <form onSubmit={handleSubmit}>
                {formValues.map((obj, index) => (
                    <InputGroup
                        key={index}
                        index={index}
                        onChange={handleChange}
                    />
                ))}
                <button type="button" onClick={add}>+</button>
                <button type="button" onClick={remove}>-</button>
                <button type="submit">Roll</button>
            </form>
        </div>
    );
}

export default MainForm;