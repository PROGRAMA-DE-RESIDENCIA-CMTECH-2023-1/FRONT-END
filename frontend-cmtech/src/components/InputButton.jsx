import React from "react";
import Button from "@mui/material/Button";

const InputButton = (props) => {

    function handleClose() {
        props.handleClose()
    }

    return (
        <Button
            variant='contained' color='secondary'
            sx={{ background: '#4B0054', marginTop: 4, marginRight: 5, width: 150 }}
            onClick={handleClose}
        >
            {props.btnName}
        </Button>
    )
}

export default InputButton