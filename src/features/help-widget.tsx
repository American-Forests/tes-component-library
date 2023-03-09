import React from 'react';
import { Accordion, AccordionItemType } from '../components/accordion';
import { Tabs } from '../components/tabs';
import { Button } from '../components/button';
import { QuestionMarkIcon, Cross1Icon } from '@radix-ui/react-icons';

const nestedContent: AccordionItemType[] = [
  {
    header: "Tree canopy measures",
    type: "accordion",
    elements: [
      {
        header: "Neighborhood tree canopy goal",
        content: [
          {
            text: "The minimum percentage of tree canopy required to deliver the requisite benefits of trees to a block group, based on natural biome and population density."
          },
          {
            text: "Data Source: Targets set in conjunction with the USDA Forest Service",
            style: "italic"
          }
        ]
      },
      {
        header: "Tree canopy cover (%)",
        content: [
          {
            text: "The footprint of existing tree canopy when viewed from above—the bird's eye view of tree crowns (leaves, branches and stems)."
          },
          {
            text: "Data Source: EarthDefine",
            style: "italic"
          }
        ]
      },
    ]
  },
  {
    header: "Demographic measures",
    type: "accordion",
    elements: [
      {
        header: "Children (0 – 17)",
        content: [
          {
            text: "Percentage of children, ages 0 to 17.",
          },
          {
            text: "Data Source: American Community Survey 2014-2018",
            style: "italic"
          }
        ]
      },
      {
        header: "Dependency ratio",
        content: [
          {
            text: "Seniors (age 65+) and children (0-17) as a proportion of working age adults (18-64). ",
          },
          {
            text: "Data Source: American Community Survey 2014-2018",
            style: "italic"
          }
        ]
      },
    ]
  }
]

const items: AccordionItemType[] = [
  {
    header: "Navigate the map",
    type: "list",
    // overview: null,
    content: [
      {text:  "Enter an address in the search bar"},
      {text:  "Use your mouse pointer and scroll to zoom and pan the map"},
      {text:  "Enter an address in the search bar"},
      {text:  "Enter an address in the search bar"},
    ]
  },
  {
    header: "Filter map layers",
    type: "list",
    overview: "Set one or more filters to focus your view on the map and isolate areas based one or more parameters",
    content: [
      {text:  "Click on 'Filters' to open the filter menu."},
      {text:  "Click on 'Filters' to open the filter menu."},
      {text:  "Click on 'Filters' to open the filter menu."},
      {text:  "Click on 'Filters' to open the filter menu."},
      {text:  "Click on 'Filters' to open the filter menu."},
      {text:  "Click on 'Filters' to open the filter menu."},
    ]
  }
]


const Portal = () => {
  return (
    <div className="w-[360px] rounded-xl h-[500px] absolute bottom-16 left-4 shadow overflow-hidden">
      <Tabs label="help widget">
        <div title="Quick start">
          <Accordion items={items} variant='primary'/>
        </div>
        <div title="Data Glossary">
          <Accordion items={nestedContent} variant='primary'/>
        </div>
      </Tabs>
    </div>
  )
}

export const HelpWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleWidget = () => setIsOpen(!isOpen)
  return (
    <>
      {isOpen && <Portal />}
      <Button
        onClick={toggleWidget}
        variant="rounded"
        Icon={isOpen ? Cross1Icon : QuestionMarkIcon}
        className="absolute bottom-4 left-4"
      />
    </>
  )
}