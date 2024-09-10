// "use client"
// import React  from 'react'
// import { useState } from 'react'
// import styles from './Contact.module.css'
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import XIcon from '@mui/icons-material/X';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import HomeIcon from '@mui/icons-material/Home';
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';

// import { useContactUs } from '../../lib/react-query/queries';
// import Spinner from '../../loading/Spinner';

// export default function Contact() {

//     const {mutateAsync: sendResume, isLoading:isLoadingResume}=useContactUs()

//     const[formData,setFormData]=useState({
//         firstname:'',
//         lastname:'',
//         email:'',
//         phone:'',
//         message:'',
//     })
//     const [error,setError]= useState(null)
//     const [formSubmitted,setFormSubmitted]=useState(false)

//     const handleChange= (e)=>{
//         const {name , value}  = e.target
//         setFormData((prevData)=>({
//             ...prevData,
//             [name]:value,
//         }))
//       }
//       const handleSubmit = async(e)=>{
//         e.preventDefault()
//         setError(null)
//         if(
//             !formData.firstname||
//             !formData.lastname ||
//             !formData.email ||
//             !formData.phone ||
//             !formData.message
//         ){
//             setError('All fields are required')
//             // setTimeout(() => {
//             //     setError(null);
//             // }, 5000);
//             return;

//         }

//         const data ={
//             firstname:formData.firstname,
//             lastname:formData.lastname,
//             email:formData.email,
//             phone:formData.phone,
//             message:formData.message,
//         }

//         try {
//             await sendResume(data);
//             setFormData({
//                 firstname: '',
//                 lastname: '',
//                 email: '',
//                 phone: '',
//                 message: '',
//             });
//             setFormSubmitted(true);
//             // setTimeout(() => {
//             //     setFormSubmitted(false);
//             // }, 5000);

//         } catch (error) {
//             setError('Failed! Please try again.');
//         }

//       }

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.info}>
//            <h1>Contact</h1>
//       </div>
//       <div  className={styles.contact}>
//         <div className={styles.media}>
//             <div className={styles.email}>
//                <div >
//                <EmailIcon color="primary"/>
//                </div>

//                <div>
//                 <h6>Email</h6>
//                 <p className={styles.para}>Contact our team via email.</p>
//                 {/* <p className={styles.para}> <a className={styles.anchor} href="mailto:cadhirajostwal@gmail.com">cadhirajostwal@gmail.com</a></p> */}
//                  <a className={styles.anchor} href="mailto:cadhirajostwal@gmail.com">cadhirajostwal@gmail.com</a>
//                </div>
//             </div>
//             <div className={styles.instagram}>
//                 <div>
//                     <a href="https://www.instagram.com/cadhirajostwal/"><InstagramIcon color="primary" /></a>
//                 </div>
//                 <div>
//                     <h6>Instagram</h6>
//                     <p className={styles.para}>Follow us on instagram for updates</p>
//                 </div>

//             </div>
//             <div className={styles.youtube}>
//                 <div>
//                     <a href="https://www.youtube.com/@CADhirajOstwal"><YouTubeIcon color="primary"/></a>
//                 </div>
//                 <div>
//                     <h6>Youtube</h6>
//                     <p className={styles.para}>Check out our videos on youtube</p>
//                 </div>

//             </div>
//             <div className={styles.Linkedin}>
//                 <div>
//                     <a href="https://www.linkedin.com/in/cadhirajostwal/"><LinkedInIcon color="primary"/></a>
//                 </div>
//                 <div>
//                     <h6>Linkdin</h6>
//                     <p className={styles.para}>connect with us on Linkdin</p>
//                 </div>

//             </div>
//             <div className={styles.x}>
//                 <div>
//                     <a href="https://x.com/cadhirajostwal"><XIcon color="primary"/></a>
//                 </div>
//                 <div>
//                     <h6>Twitter</h6>
//                     <p className={styles.para}>Follow us on twitter for updates.</p>
//                 </div>
//             </div>
//             <div className={styles.facebook}>
//                 <div>
//                     <a href="https://www.facebook.com/dhiraj.ostwal"><FacebookIcon color="primary"/></a>
//                 </div>
//                 <div>
//                     <h6>Facebook</h6>
//                     <p className={styles.para}>Connect with us on facebook</p>
//                 </div>

//             </div>

//             <div className={styles.phone}>
//                 <div>
//                     <a href="tel:+7020045454"><AddIcCallIcon color="primary"/></a>
//                 </div>
//                 <div>
//                     <h6>Phone</h6>
//                     <p className={styles.para}>Mon-Fri from 8am to 5am</p>
//                     <a className={styles.anchor} href="tel:+7020045454">7020045454</a>

//                 </div>

//             </div>
//             <div className={styles.office}>
//                 <div>
//                     <a href="https://maps.app.goo.gl/M2MwpuTzjGFZcgwp6"><HomeIcon color="primary"/></a>
//                 </div>
//                 <div>
//                     <h6>Office</h6>
//                     <p className={styles.para}>Come say hello at our office HQ</p>
//                     <a  className={styles.anchor}  href="Opp Kiosk Koffee, Shirole Road,Fergusson College Road, Pune, Maharashtra 411004">Shree Krishna, Opp Kiosk Koffee,off Fergusson College Road, Pune, Maharashtra 411004</a>
//                 </div>
//             </div>

//         </div>
//         <div className={styles.formcontainer}>
//             <div className={styles.formparent}>
//             <form onSubmit={handleSubmit}>
//             <div className={styles.amit}>
//                 <h2>Contact Us</h2>

//                <div className={styles.formgroup}>
//                    <label htmlFor="first-name">First Name</label>
//                    <input type="text" id="first-name" name="firstname" placeholder= "Enter  first name" required  value={formData.firstname} onChange={handleChange}/>
//                </div>
//                <div className={styles.formgroup}>
//                    <label htmlFor="last-name">Last Name</label>
//                    <input type="text" id='last-name' name='lastname' placeholder='Enter last name' value={formData.lastname} onChange={handleChange} />
//                </div>
//                <div className={styles.formgroup}>
//                    <label htmlFor="email">Email</label>
//                    <input type="email" id='email' name='email' placeholder='Enter' value={formData.email}  onChange={handleChange} />
//                </div>
//                <div className={styles.formgroup}>
//                    <label htmlFor="phone">Phone</label>
//                    <input type="tel" id='phone' name='phone' placeholder='Phone' value={formData.phone}  onChange={handleChange} />
//                </div>
//                <div className={styles.comment}>
//                    <textarea id="mess" name="message" className={styles.message} placeholder='Enter comments here...' value={formData.message}  onChange={handleChange}></textarea>
//                </div>
//                {error && (
//                 <div style={{textAlign:'center',padding:'10px',color:'red'}}>{error}</div>
//                )
//                }
//                {
//                 formSubmitted && (
//                     <div style={{textAlign:'center',padding:'10px',color:'green'}}>
//                     Message sent successfully
//                    </div>

//                 )
//                }

//                <div className={styles.btn}>
//                <button type='submit'className={styles.btn11} disabled={isLoadingResume}>{isLoadingResume ? 'Sending...' : 'Send message'}</button>
//                </div>

//                 </div>

//             </form>
//             </div>

//         </div>
//       </div>
//     </div>
//   )
// }
// ----------------------------------------

"use client";
import React, { useState } from "react";
import Banner from "../../components/Banner";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Email, Home, Phone } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useContactUs } from "../../lib/react-query/queries";

const Contact = () => {
  const { mutateAsync: sendResume, isLoading: isLoadingResume } =
    useContactUs();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phoneRegex = /^[0-9\b]+$/;
      if (value === "" || phoneRegex.test(value)) {
        if (value.length <= 10) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await sendResume(data);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      setFormSubmitted(true);
    } catch (error) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Banner
        imageUrl="/assets/carrer.jpg"
        breadcrumb="Contact"
        headline="Contact"
      />
      <Box bgcolor="white" color="text.primary" py={3}>
        <Container>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            ml={2}
          >
            <Typography variant="h4" color="primary">
              Contact
            </Typography>
          </Box>
          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} lg={6}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      href="mailto:cadhirajostwal@gmail.com"
                      color="primary"
                    >
                      <Email />
                    </IconButton>
                    <Box ml={2}>
                      <Typography variant="subtitle1">Email</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Contact our team via email.
                      </Typography>{" "}
                      <Typography variant="body2" color="primary">
                        {" "}
                        cadhirajostwal@gmail.com{" "}
                      </Typography>{" "}
                    </Box>{" "}
                  </Box>{" "}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      href="https://www.instagram.com/cadhirajostwal"
                      color="primary"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </IconButton>
                    <Box ml={2}>
                      <Typography variant="subtitle1">Instagram</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Follow us on Instagram for updates.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      href="https://www.youtube.com/@CADhirajOstwal"
                      color="primary"
                      target="_blank"
                    >
                      <YouTubeIcon />
                    </IconButton>
                    <Box ml={2}>
                      <Typography variant="subtitle1">YouTube</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Check out our videos on YouTube.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      href="https://www.linkedin.com/in/cadhirajostwal"
                      color="primary"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <Box ml={2}>
                      <Typography variant="subtitle1">LinkedIn</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Connect with us on LinkedIn.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      href="https://x.com/cadhirajostwal"
                      color="primary"
                      target="_blank"
                    >
                      <XIcon />
                    </IconButton>
                    <Box ml={2}>
                      <Typography variant="subtitle1">X</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Follow us on Twitter for updates.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      href="https://www.facebook.com/dhiraj.ostwal"
                      color="primary"
                      target="_blank"
                    >
                      <FacebookIcon />
                    </IconButton>
                    <Box ml={2}>
                      <Typography variant="subtitle1">Facebook</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Connect with us on Facebook.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <Home color="primary" />
                    <Box ml={2}>
                      <Typography variant="subtitle1">Office</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Come say hello at our office HQ.
                      </Typography>
                      <Typography variant="body2" color="primary">
                        2nd Floor, Shree Krishna, 7, Opp Kiosk Koffee, Shirole
                        Road, off Fergusson College Road, Pune, Maharashtra
                        411004
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box display="flex" alignItems="center">
                    <Phone color="primary" />
                    <Box ml={2}>
                      <Typography variant="subtitle1">Phone</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Mon-Fri from 8am to 5pm.
                      </Typography>
                      <Typography variant="body2" color="primary">
                        +91 7020045454
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Repeat similar blocks for Instagram, YouTube, etc. */}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Paper elevation={3} sx={{ p: 4, bgcolor: "grey.100" }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstname"
                        placeholder="John"
                        variant="outlined"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastname"
                        placeholder="Doe"
                        variant="outlined"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        placeholder="johndoe@example.com"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="text" // Changed to text to handle digit validation
                        placeholder="1234567890"
                        variant="outlined"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!error && error.includes("Phone number")}
                        helperText={
                          !!error && error.includes("Phone number")
                            ? "Phone number must be exactly 10 digits."
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        placeholder="Your message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    {error && (
                      <Grid item xs={12}>
                        <Typography color="error">{error}</Typography>
                      </Grid>
                    )}
                    {formSubmitted && (
                      <Grid item xs={12}>
                        <Typography color="green">
                          Message sent successfully!
                        </Typography>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        disabled={isLoadingResume}
                      >
                        {isLoadingResume ? "Sending..." : "Send message"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
