import React from "react";

function InputGroup(props){
    return (
            <div>
                <input
                    required={true}
                    type={"text"}
                    id={'characterName'+props.index}
                    onChange={(e) => props.onChange(e, props.index)}
                />
                <input
                    required={true}
                    type={"number"}
                    id={'initiativeModifier'+props.index}
                    onChange={(e) => props.onChange(e, props.index)}
                />
            </div>
    );
}

export default InputGroup