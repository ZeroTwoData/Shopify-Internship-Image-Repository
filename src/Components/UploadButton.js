import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { app } from '../base'


export default function FormDialog(props) {
    const [open, setOpen] = useState(false);
    const [selectedImageFile, setSelectedImageFile] = useState(null);

    const [imageName, setimageName] = useState("");
    const [description, setDescription] = useState("");
    const [itemList, setItemList] = useState([]);

    const db = app.firestore();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = event => {
        console.log(event.target.name);
        if (event.target.name === "imageName") {
            setimageName(event.target.value);
        } else {
            setDescription(event.target.value);
        }
    }
    const fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        setSelectedImageFile(event.target.files[0]);

    };
    const fileUploadHandler = async () => {
        const storageRef = app.storage().ref();
        const filRef = storageRef.child(selectedImageFile.name);
        await filRef.put(selectedImageFile);
        var url = await filRef.getDownloadURL();

        console.log("url", url);

        db.collection("imageCollection").doc(imageName).set({
            imageName: imageName,
            avatar: url,
            description: description
        }
        )
        props.setToggle(!props.toggle);
        setOpen(false);
    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} id="upload_image_button">
                Upload Build
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Upload An Image of Any Aesthetic Build
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="imageName"
                        label="Build Name"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="ImageDescription"
                        label="Build Description"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />

                    <input type="file" onChange={fileSelectedHandler} />



                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={fileUploadHandler} color="primary">
                        Confirm
          </Button>
                </DialogActions>
            </Dialog>


        </div >
    );
}
