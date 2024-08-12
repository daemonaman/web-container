import React from 'react';
import { useState } from 'react';
import { Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import profile from '../../../Assets/profile.png';
import available from '../../../Assets/avail.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CiEdit } from "react-icons/ci";

// import 'react-phone-number-input/style.css';
//  import PhoneInput from 'react-phone-number-input';
function YourProfile(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        props.viewProfile(props.login.admin_id);
        return () => { };
    }, []);


    const [id, setId] = useState("");

    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    // const [imagePreview, setImagePreview] = useState('');
    // const defaultProfileImg = props.login.registration.userDetails.profileImg; // Default profile image URL
    const [name, setname] = useState('');
    const [number, setnumber] = useState('');
    const [gender, setgender] = useState('');
    const [editpreview, seteditPreview] = useState(null);

    const [email, setemail] = useState('');
    const [editattachment, seteditAttachment] = useState(null);
    const [attachment, setAttachment] = useState(null);

    const [password, setpassword] = useState('');
    // const handleFileeditChange = (e) => {
    //     const file = e.target.files[0];
    //     seteditAttachment(file);

    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         seteditPreview(reader.result);
    //     };
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     } else {
    //         seteditPreview(null);
    //     }
    // };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // setImagePreview(null);
    };

    const handleSubmit = () => {

        handleClose();
    };
    // console.log(props.login.registration.userDetails);

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setImagePreview(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        // setAttachment(file); 
        console.log("changes");
        const reader = new FileReader();
        reader.onloadend = () => {
          seteditPreview(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        } else {
          seteditPreview(null);
        }
    };
    const handleUploadClick = () => {
        document.getElementById('uploadInput').click();
    };
    return (
        <>
            <Grid justifyContent="center" alignItems="center" style={{height: '100vh'}}>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4} style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', padding: '2rem', width: '80vw', margin:'2rem  10rem'}}>
                {/* {Array.isArray(props.profile.all_profile) &&
          props.profile.all_profile. => ( */}
                    <Grid justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h3" style={{ marginBottom: '1rem', textAlign: 'center' }}>My Profile</Typography>
                            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center"  >
                                {/* <Avatar alt="Remy Sharp" src={items.userImage} sx={{ width: '60px', height: '60px' }} /> */}
                            </Stack>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sx={{ justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
                                {/* <img src={props.login.registration.userDetails.profileImg} alt="Profile" style={{ width: '50%', textAlign: 'center', transform: 'translateX(150%)' }} /> */}
                            </Grid>
                        </Grid>
                        <form style={{ marginTop: '2rem' }}>
                            {/* <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label htmlFor={`name-${profile.id}`} style={{ fontSize: '1.25rem', fontWeight: '500' }}>Name</label>
                                    <input
                                        value={props.login.registration.userDetails.name}
                                        type="text" id={`name-${profile.id}`} name="name" style={{ width: '100%', borderRadius: '8px', height: '2.5rem', borderColor: '#0B0B0B40', fontSize: '1.2rem' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <label htmlFor={`mobileNumber-${profile.id}`} style={{ fontSize: '1.25rem', fontWeight: '500' }}>Mobile Number</label>
                                    <input
                                        type="tel"
                                        id={`mobileNumber-${profile.id}`}
                                        name="mobileNumber"
                                        value={props.login.registration.userDetails.number}
                                        style={{ width: '100%', borderRadius: '8px', height: '2.5rem', borderColor: '#0B0B0B40', fontSize: '1.2rem' }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <label htmlFor={`email-${profile.id}`} style={{ fontSize: '1.25rem', fontWeight: '500' }}>Email Address</label>
                                    <input
                                        value={props.login.registration.userDetails.email}

                                        type="email" id={`email-${profile.id}`} name="email"
                                        style={{ width: '100%', borderRadius: '10px', height: '2.5rem', borderColor: '#0B0B0B40', fontSize: '1.2rem' }} />
                                </Grid>
                            </Grid> */}
                        </form>
                        <Grid container justifyContent="flex-end" style={{ marginTop: '2rem' }}>
                            <Button variant="outlined" onClick={() => {
                                handleClickOpen();
                                // setId(props.login.registration.userDetails._id);
                                // setname(props.login.registration.userDetails.name);
                                // setnumber(props.login.registration.userDetails.number);
                                // setemail(props.login.registration.userDetails.email);
                                // setgender(props.login.registration.userDetails.gender);
                                // setpassword(props.login.registration.userDetails.password);
                                // seteditPreview(props.login.registration.userDetails.profileImg);
                            }} style={{ marginRight: '1rem', width: '150px', height: '40px', borderRadius: '20px' }}> <CiEdit style={{ fontSize: '1.1rem' }} /> &nbsp; Edit Profile</Button>
                        </Grid>
                    </Grid>
          {/* ))} */}
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <Typography>Change ProfileImage</Typography>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <input
                                type="file"
                                id="uploadInput"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                            <Avatar
                                alt="Profile Image"
                                src={editpreview}
                                style={{ width: '100px', height: '100px', marginTop: '10px' }}
                            />
                            <br />

                        </div>
                        <br />
                        <button
                            onClick={handleUploadClick}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                fontSize: '1.1rem',
                                backgroundColor: '#38b5fe',
                                color: 'whitesmoke',
                                border: 'none',

                            }}
                        >
                            Upload Image
                        </button>
                    </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => {
                            setname(e.target.value)
                        }}

                    />
                    <TextField
                        margin="dense"
                        id="number"
                        label="Number"
                        type="text"
                        fullWidth
                        value={number}
                        onChange={(e) => {
                            setnumber(e.target.value)
                        }}
                    />

                    <TextField
                        margin="dense"
                        id="gender"
                        label="Gender"
                        type="text"
                        fullWidth
                        value={gender}
                        onChange={(e) => {
                            setgender(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                    />
                    {/* <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e)=>{
                            setpassword(e.target.value)
                        }}
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => {
                        handleSubmit();
                        console.log(id, editpreview,  name, number, gender, email, props.login.admin_id)
                         props.updateprofile(id,editpreview,name,number,gender,email, props.login.admin_id)

                    }}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default YourProfile;
