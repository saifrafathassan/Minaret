
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import vec from '/Assets/images/contact/vec.png'
import { styled } from '@mui/system';

const ExpandIcon = styled('img')({
    width: '20px',
    
  });

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    marginBottom: '1rem',
    borderRadius:"1rem",
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
  }));


  const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    backgroundColor: '#FBC6AC',
  }));

const FAQAccordion = () => {
  const faqs = [
    {
      question: ' How Long Does It Typically Take to See Results from a Digital Marketing Campaign?',
      answer: 'The timeline for seeing results can vary depending on the type of campaign and your specific goals. Typically, SEO efforts may start showing results in 3-6 months, while ',
    },
    {
      question: ' Are there opportunities for remote work?',
      answer: 'Yes, we value flexibility and work-life balance. Many of our positions offer remote work opportunities or the option to work from the office ',
    },
    
    {
        question: 'Does The Minaret Marketing Agency offer internship programs?',
        answer: 'Yes, we offer internship programs in various departments, including marketing, design, and content creation. These programs are designed ',
      },
      {
        question: 'What kind of benefits and perks does The Minaret Marketing Agency offer?',
        answer: 'Our team members enjoy a range of benefits, including competitive salaries, comprehensive health insurance, flexible working hours, ',
      },
      {
        question: 'How does The Minaret Marketing Agency support professional development?',
        answer: "We're committed to the continuous growth of our team members. We offer personal development allowances for courses, conferences, ",
      },
      {
        question: 'What makes The Minaret Marketing Agency a unique place to work?',
        answer: "What sets us apart is our collaborative culture, our commitment to innovation and continuous learning, and our dedication to creating impactful ",
      },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <StyledAccordion key={index} sx={{  }} >
          <AccordionSummary
            expandIcon={<ExpandIcon src={vec} alt="Expand" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ backgroundColor: '#8A1848' ,color:'#FFFFFF' }}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <StyledAccordionDetails>
            <Typography>{faq.answer}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
      
    </div>
  );
};

export default FAQAccordion;