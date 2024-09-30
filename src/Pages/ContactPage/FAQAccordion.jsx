
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import vec from '/Assets/images/contact/vec.png'
import { styled } from '@mui/system';
import { withTranslation } from 'react-i18next';

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

const FAQAccordion = ({t}) => {
  const faqs = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    
    {
        question: t("question3"),
        answer: t("answer3"),
      },
      {
        question: t("question4"),
        answer: t("answer4"),
      },
      {
        question: t("question5"),
        answer: t("answer5"),
      },
      {
        question: t("question6"),
        answer: t("answer6"),
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

export default withTranslation()(FAQAccordion);