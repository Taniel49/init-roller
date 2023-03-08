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
        <ListItem  sx={{
            '&:hover': {
                '.RemoveButton': {
                    display: 'block'
                }
            }
        }}>
            <Button type='button'
                    variant='text'
                    onClick={() => {
                        setTextareaOpened(!isTextareaOpened);
                    }}
                    sx={{
                        color: 'black',
                        textTransform: 'none',
                    }}>
                <Typography variant='body1' sx={{fontSize:24}}>{name}:{result}</Typography>
            </Button>
            <IconButton className="RemoveButton"
                        size="small"
                        sx={{display: 'none'}}
                        aria-label="delete"
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