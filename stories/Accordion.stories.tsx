import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionProps } from '../src';

const meta: Meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
};

const nestedContent = [
  {
    header: "Tree canopy measures",
    type: "accordion",
    elements: [
      {
        header: "Neighborhood tree canopy goal",
        content: [
          {
            text: "The minimum percentage of tree canopy required to deliver the requisite benefits of trees to a block group, based on natural biome and population density.",
            styles: null
          },
          {
            text: "Data Source: Targets set in conjunction with the USDA Forest Service",
            styles: "italic"
          }
        ]
      },
      {
        header: "Tree canopy cover (%)",
        content: [
          {
            text: "The footprint of existing tree canopy when viewed from above—the bird's eye view of tree crowns (leaves, branches and stems).",
            styles: null
          },
          {
            text: "Data Source: EarthDefine",
            styles: "italic"
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
            styles: null
          },
          {
            text: "Data Source: American Community Survey 2014-2018",
            styles: "italic"
          }
        ]
      },
      {
        header: "Dependency ratio",
        content: [
          {
            text: "Seniors (age 65+) and children (0-17) as a proportion of working age adults (18-64). ",
            styles: null
          },
          {
            text: "Data Source: American Community Survey 2014-2018",
            styles: "italic"
          }
        ]
      },
    ]
  }
]

const items = [
  {
    header: "Navigate the map",
    type: "list",
    overview: null,
    content: [
      {text:  "Enter an address in the search bar", style: null},
      {text:  "Use your mouse pointer and scroll to zoom and pan the map", style: null},
      {text:  "Enter an address in the search bar", style: null},
      {text:  "Enter an address in the search bar", style: null},
    ]
  },
  {
    header: "Filter map layers",
    type: "list",
    overview: "Set one or more filters to focus your view on the map and isolate areas based one or more parameters",
    content: [
      {text:  "Click on 'Filters' to open the filter menu.", style: null},
      {text:  "Click on 'Filters' to open the filter menu.", style: null},
      {text:  "Click on 'Filters' to open the filter menu.", style: null},
      {text:  "Click on 'Filters' to open the filter menu.", style: null},
      {text:  "Click on 'Filters' to open the filter menu.", style: null},
      {text:  "Click on 'Filters' to open the filter menu.", style: null},
    ]
  }
]


export default meta;

const Template: Story<AccordionProps> = args => <Accordion {...args} />


export const Primary = Template.bind({});
Primary.args = { items, variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { items, variant: 'secondary' };

export const Nested = Template.bind({});
Nested.args = { items: nestedContent, variant: 'primary' };

export const NestedSecondary = Template.bind({});
NestedSecondary.args = { items: nestedContent, variant: 'secondary' };

