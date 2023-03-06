import React from 'react';
import CharacterResult from "../CharacterResult/CharacterResult";
import {compare, getInitiative} from "../../utils/utils";
import {v4 as uuidv4} from 'uuid';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

function Results() {
    const nameRef = React.useRef('');
    const initiativeRef = React.useRef('');
    const [results, setResults] = React.useState([]);

    function submitNewCharacter(e) {
        e.preventDefault();

        const clonedResults = [...results, {
            _id: uuidv4(),
            characterName: nameRef.current.value,
            result: getInitiative(Number(initiativeRef.current.value))
        }];

        clonedResults.sort(compare);

        setResults(clonedResults);

        nameRef.current.value = '';
        initiativeRef.current.value = '';

        nameRef.current.select();
    }

    function removeCharacter(id) {
        const clonedResults = [...results];

        setResults(clonedResults.filter((character => character._id !== id)));
    }

    return (
        <Box>
            {results.length ? <Typography component="h1" variant="h1">Results</Typography> :
                <Typography component="h1" variant="h1">Insert Character Name and Modifier</Typography>}
            <List>
                {
                    results.map((character) =>
                        <CharacterResult
                            key={character._id}
                            id={character._id}
                            name={character.characterName}
                            result={character.result}
                            removeCharacter={removeCharacter}
                        />
                    )
                }
            </List>
            <Box component="form" onSubmit={submitNewCharacter}>
                <Typography component="h2" variant="h2">Add Character</Typography>
                <Container>
                    <Input required={true}
                           type='text'
                           name='newCharacterName'
                           inputRef={nameRef}/>
                    <Input required={true}
                           type='number'
                           name='newCharacterModifier'
                           inputRef={initiativeRef}/>
                    <Button type='submit' variant="contained">Roll</Button>
                </Container>
            </Box>
        </Box>
    );
}

export default Results;