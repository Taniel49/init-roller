import React from "react";

function Input(props) {
    return (
        <div>
            <div className="input">
                <input
                    required={true}
                    type={"text"}
                    id={'charName'+props.index}
                    onChange={(e) => props.onChange(e, props.index)}
                />
                <input
                    required={true}
                    type={"number"}
                    id={'initModif'+props.index}
                    onChange={(e) => props.onChange(e, props.index)}
                />
            </div>
        </div>
    );
}

export default Input