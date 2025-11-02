import { FAQItem } from "@/type";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type FrequentlyQuestionsProps = {
  question: FAQItem[];
};

function FrequentlyQuestions({ question }: FrequentlyQuestionsProps) {
  return (
    <div className="bg-white border border-strokeColor rounded-[15px]">
      <div className="pb-5 border-b border-strokeColor">
        <div className="font-semibold text-2xl relative py-6 pr-4 mb-1">
          <div className="bg-tertiaryColor w-40 h-[10px] rounded-sm absolute -bottom-1"></div>
          <h3 className="mr-1 flex gap-1 z-50 absolute "> سوالات متداول</h3>
        </div>
      </div>
      <div>
        {question.map((item, index) => (
          <div key={index} className=" frqSec">
            <Accordion
              sx={{
                fontFamily: "dana, sans-serif",
                "& .MuiTypography-root": { fontFamily: "dana, sans-serif" , padding:"7px 0"},
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{padding:"0 4px 0 0"}} component="span">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" checkbox-wrapper-13">
                 <p>{item.answer}</p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyQuestions;
