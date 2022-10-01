import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import MyAddresses from "./MyAddresses"

export default function AccordionExampleStandard (){
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }


    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='map marker alternate' />
          ADRES BILGILERI
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {/* <MyAddresses /> */}
        </Accordion.Content>
      </Accordion>
    )
  }