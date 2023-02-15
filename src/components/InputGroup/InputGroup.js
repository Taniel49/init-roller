import React from "react";

function InputGroup({index, onChange}){
    return (
            <div>
                <input
                    required={true}
                    type={"text"}
                    id={'characterName'+index}
                    onChange={(e) => onChange(e, index)}
                />
                <input
                    required={true}
                    type={"number"}
                    id={'initiativeModifier'+index}
                    onChange={(e) => onChange(e, index)}
                />
            </div>
    );
}

export default InputGroup