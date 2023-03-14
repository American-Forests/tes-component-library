import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  AccordionItemType,
  HelpWidget,
  HelpWidgetData,
  HelpWidgetProps,
} from '../src';

const meta: Meta = {
  title: 'Features/Help widget',
  component: HelpWidget,
};

export default meta;

const Template: Story<HelpWidgetProps> = args => <HelpWidget {...args} />;

const nestedContent: AccordionItemType[] = [
  {
    header: 'Tree canopy measures',
    type: 'accordion',
    elements: [
      {
        header: 'Neighborhood tree canopy goal',
        content: [
          {
            text:
              'The minimum percentage of tree canopy required to deliver the requisite benefits of trees to a block group, based on natural biome and population density.',
          },
          {
            text:
              'Data Source: Targets set in conjunction with the USDA Forest Service',
            style: 'italic',
          },
        ],
      },
      {
        header: 'Tree canopy cover (%)',
        content: [
          {
            text:
              "The footprint of existing tree canopy when viewed from above—the bird's eye view of tree crowns (leaves, branches and stems).",
          },
          {
            text: 'Data Source: EarthDefine',
            style: 'italic',
          },
        ],
      },
    ],
  },
  {
    header: 'Demographic measures',
    type: 'accordion',
    elements: [
      {
        header: 'Children (0 – 17)',
        content: [
          {
            text: 'Percentage of children, ages 0 to 17.',
          },
          {
            text: 'Data Source: American Community Survey 2014-2018',
            style: 'italic',
          },
        ],
      },
      {
        header: 'Dependency ratio',
        content: [
          {
            text:
              'Seniors (age 65+) and children (0-17) as a proportion of working age adults (18-64). ',
          },
          {
            text: 'Data Source: American Community Survey 2014-2018',
            style: 'italic',
          },
        ],
      },
    ],
  },
];

const items: AccordionItemType[] = [
  {
    header: 'Navigate the map',
    type: 'list',
    // overview: null,
    content: [
      { text: 'Enter an address in the search bar' },
      { text: 'Use your mouse pointer and scroll to zoom and pan the map' },
      { text: 'Enter an address in the search bar' },
      { text: 'Enter an address in the search bar' },
    ],
  },
  {
    header: 'Filter map layers',
    type: 'list',
    overview:
      'Set one or more filters to focus your view on the map and isolate areas based one or more parameters',
    content: [
      { text: "Click on 'Filters' to open the filter menu." },
      { text: "Click on 'Filters' to open the filter menu." },
      { text: "Click on 'Filters' to open the filter menu." },
      { text: "Click on 'Filters' to open the filter menu." },
      { text: "Click on 'Filters' to open the filter menu." },
      { text: "Click on 'Filters' to open the filter menu." },
    ],
  },
];

const data: HelpWidgetData[] = [
  {
    sectionTitle: 'Quick Start',
    sectionContent: items,
  },
  {
    sectionTitle: 'Data Glossary',
    sectionContent: nestedContent,
  },
];

export const Primary = Template.bind({});
Primary.args = { data: data };
