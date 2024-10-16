
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

const FAQs = ({t}) => {
  const faqs = [
    {
      question: t("question1career"),
      answer: t("answer1career"),
    },
    {
      question: t("question2career"),
      answer: t("answer2career"),
    },
    
    {
        question: t("question3career"),
        answer: t("answer3career"),
      },
      {
        question: t("question4career"),
        answer: t("answer4career"),
      },
      {
        question: t("question5career"),
        answer: t("answer5career"),
      },
      {
        question: t("question6career"),
        answer: t("answer6career"),
      },
      {
        question: t("question7career"),
        answer: t("answer7career"),
      },
      {
        question: t("question8career"),
        answer: t("answer8career"),
      },
      {
        question: t("question9career"),
        answer: t("answer9career"),
      },
      {
        question: t("question10career"),
        answer: t("answer10career"),
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

export default withTranslation()(FAQs);