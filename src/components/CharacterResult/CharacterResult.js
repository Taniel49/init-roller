import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ListItem from '@mui/material/ListItem';
import Typography from "@mui/material/Typography";

function CharacterResult({name, result, id, removeCharacter}) {
    const [isTextareaOpened, setTextareaOpened] = React.useState(false);

    return (
        <ListItem>
            <Button type='button'
                    variant='text'
                    onClick={() => {
                        setTextareaOpened(!isTextareaOpened);
                    }}
                    sx={{
                        color: 'black',
                        textTransform: 'none',
                    }}>
                <Typography>{name}:{result}</Typography>
            </Button>
            <IconButton aria-label="delete"
                        onClick={() => {
                            removeCharacter(id)
                        }}>
                <DeleteIcon/>
            </IconButton>
            <TextareaAutosize style={{display: isTextareaOpened ? 'block' : 'none'}}/>
        </ListItem>
    );
}

export default CharacterResult;