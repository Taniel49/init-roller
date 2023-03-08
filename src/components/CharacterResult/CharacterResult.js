import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {Stack, Button, IconButton, TextareaAutosize, ListItem, Typography, Box} from "@mui/material";

function CharacterResult({name, result, id, removeCharacter}) {
    const [isTextareaOpened, setTextareaOpened] = React.useState(false);

    return (
        <ListItem sx={{
            '&:hover': {
                '.RemoveButton': {
                    display: 'block'
                }
            }
        }}>
            <Stack>
                <Box sx={{display: 'flex'}}>
                    <Button type='button'
                            variant='text'
                            onClick={() => {
                                setTextareaOpened(!isTextareaOpened);
                            }}
                            sx={{
                                color: 'black',
                                textTransform: 'none',
                            }}>
                        <Typography variant='body1' sx={{fontSize: 24}}>{name}:{result}</Typography>
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
                </Box>
                <TextareaAutosize style={{display: isTextareaOpened ? 'block' : 'none'}}/>
            </Stack>
        </ListItem>
    );
}

export default CharacterResult;