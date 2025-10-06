import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { categories } from "@/data";

function AccordionFilter() {
  return (
    <div className="mt-4">
      <div className="mb-2">
        <Accordion
          defaultExpanded
          sx={{
            fontFamily: "dana, sans-serif",
            "& .MuiTypography-root": { fontFamily: "dana, sans-serif" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">دسته بندی ها</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="checkboxContaier h-64 overflow-auto">
            {categories.map((item) => (
              <div key={item.value} className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" value={item.value}/>
                <label htmlFor="c1-13" className="mr-2">
                    {item.name}
                </label>
              </div>
            ))}
            </div>

          </AccordionDetails>
        </Accordion >
      </div>
      <div className="mb-2">
        <Accordion
        defaultExpanded
         sx={{
            fontFamily: "dana, sans-serif",
            "& .MuiTypography-root": { fontFamily: "dana, sans-serif" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">نوع رویداد</Typography>
          </AccordionSummary>
          <AccordionDetails>
             <div  className=" checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    دوره
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    سمینار
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    کارگاه
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    فراخوان
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    دوره آفلاین
                </label>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
        defaultExpanded
         sx={{
            fontFamily: "dana, sans-serif",
            "& .MuiTypography-root": { fontFamily: "dana, sans-serif" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">نوع برگزاری</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div  className=" checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    آنلاین
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    حضوری
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    آنلاین و حضوری (همه)
                </label>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
        defaultExpanded
         sx={{
            fontFamily: "dana, sans-serif",
            "& .MuiTypography-root": { fontFamily: "dana, sans-serif" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">وضعیت برگزاری</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    درحال برگزاری
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    درحال ثبت نام
                </label>
            </div>
            <div  className="my-4 checkbox-wrapper-13">
                <input id="c1-13" type="checkbox" />
                <label htmlFor="c1-13" className="mr-2">
                    برگزار شده
                </label>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
        defaultExpanded
         sx={{
            fontFamily: "dana, sans-serif",
            "& .MuiTypography-root": { fontFamily: "dana, sans-serif" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">تاریخ برگزاری</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
                
 <Accordion
         
         sx={{
            fontFamily: "dana, sans-serif",
            "& .MuiTypography-root": { fontFamily: "dana, sans-serif" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">انتخاب تاریخ</Typography>
          </AccordionSummary>
          <AccordionDetails>
           
          </AccordionDetails>
        </Accordion>
                
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionFilter;
