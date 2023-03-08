import React from 'react';
import CharacterResult from "../CharacterResult/CharacterResult";
import {compare, getInitiative} from "../../utils/utils";
import {v4 as uuidv4} from 'uuid';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Tooltip from '@mui/material/Tooltip';

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
            {results.length ? <Typography component="h1" variant="h3">Results</Typography> :
                <Typography component="h1" variant="h3">Insert Character Name and Modifier</Typography>}
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
                <Typography component="h2" variant="subtitle2" sx={{fontSize: 30}}>Add Character</Typography>
                <Grid2 container spacing={2} sx={{maxWidth: 330}}>
                    <Grid2 xs={6}>
                        <Tooltip title="Character Name">
                            <Input required={true}
                                   type='text'
                                   name='newCharacterName'
                                   inputRef={nameRef}/>
                        </Tooltip>
                    </Grid2>
                    <Grid2 xs={2}>
                        <Tooltip title="Initiative Modifier">
                            <Input required={true}
                                   type='number'
                                   name='newCharacterModifier'
                                   inputRef={initiativeRef}/>
                        </Tooltip>
                    </Grid2>
                    <Grid2 xs={4}>
                        <Button type='submit' variant="contained" sx={{background: 'black'}}>Roll</Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    );
}

export default Results;