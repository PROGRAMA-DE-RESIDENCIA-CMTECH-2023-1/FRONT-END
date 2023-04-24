import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = (props) => {

    function handleClickOpen() {
        props.handleClickOpen()
    }
    return (
        <Button onClick={handleClickOpen} sx={{color: "#63236B"}}>
            <DeleteIcon />
        </Button>
    )
}

export default DeleteButton