import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material"
import { ExpandMore } from "@material-ui/icons"


export default function BasicAccordion() {
  return (
    <div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
  )
}
