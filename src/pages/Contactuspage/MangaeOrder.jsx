import React from 'react'
import New from './New'
import { Link } from "react-router-dom";
import image1 from '../../Assets/Image 1.png'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
const MangaeOrder = () => {
    const [expanded, setExpanded] = useState(false);
    const faqs = [
      {
        id: 'panel1',
        question: 'How do I return my order on Kidtryz?',
        answer: 'The purpose of this application is to provide users with a seamless experience for submitting forms and managing data efficiently.'
      },
      {
        id: 'panel2',
        question: 'How do I place a request for order replacement?',
        answer: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions to reset your password.'
      },
      {
        id: 'panel3',
        question: 'What is the Kidtryz return policy for cash on delivery?',
        answer: 'You can contact support by emailing support@example.com or calling our support hotline at (123) 456-7890.'
      },
      {
        id: 'panel4',
        question: 'Can I ask the delivery agent to reschedule the pickup date?',
        answer: 'To submit a form, you need to provide your name, email address, mobile number, password, and organization name.'
      },
      {
        id: 'panel5',
        question: 'What if I miss my Kidtryz order pickup?',
        answer: 'Yes, your data is secure. We use industry-standard encryption and security measures to protect your information.'
      },
      {
        id: 'panel6',
        question: 'Can I reinstate a cancelled order?',
        answer: 'You can update your profile information by logging into your account and navigating to the "Profile" section.'
      }
    ];
    
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
    <div style={{display:'flex',backgroundColor:'#f9f9f9',alignItems:'center'}}>
      <New/>
      <div style={{marginTop:'7rem'}}>
      <Typography variant="h4" gutterBottom sx={{backgroundColor:'#f9f9f9',fontWeight:'700'}}>
        Frequently Asked Questions
      </Typography>
      
      <div>
      {faqs.map((faq) => (
        <Accordion key={faq.id} expanded={expanded === faq.id} onChange={handleChange(faq.id)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ color: '#212121', fontSize: '16px', fontWeight: '700' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: '#212121', fontSize: '16px', fontWeight: '700' }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
     
      <h2 id='last_head'>Want to reach us old style ? Here is our <span>postal address</span></h2>
      <div className='round_log'> <Link to='/chatbot'><img src={image1} alt="" srcset="" /></Link> </div>
   
    </div>
   
    </div>
   
</>
  )
}

export default MangaeOrder
