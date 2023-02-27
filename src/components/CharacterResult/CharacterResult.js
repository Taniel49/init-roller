import React from 'react';

function CharacterResult({name, result, id, removeCharacter}) {
    const [isTextareaOpened, setTextareaOpened] = React.useState(false);

    return (
        <li>
            <button type='button'
                    onClick={() => {
                        setTextareaOpened(!isTextareaOpened);
                    }}>
                <p>{name}:{result}</p>
            </button>
            <textarea style={{display: isTextareaOpened ? 'block' : 'none'}}/>
            <button type='button'
                    onClick={() => {
                        removeCharacter(id)
                    }}>
                remove
            </button>
        </li>
    );
}

export default CharacterResult;