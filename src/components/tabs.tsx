import React, { Children, useRef } from 'react';
import { useTab, useTabList, useTabPanel, AriaTabListProps } from 'react-aria';
import { Item, useTabListState, TabListState } from 'react-stately';
// import { Accordion } from '../accordion/component';
// import { AccordionItemType } from '../accordion/types';

function Tab({ item, state } : {
  item: Record<string, any>,
  state: TabListState<unknown>,
  orientation?: string
}): JSX.Element {
    let { key, rendered } = item;
    const ref = useRef<HTMLDivElement>(null);
    let { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);
    return (
      <div
        {...tabProps}
        ref={ref}
        className={`
          border-b-4 pb-2 px-1 mr-8 capitalize text-gray-50 cursor-pointer text-lg 
          ${isSelected ? 'border-gray-50' : 'border-transparent'}
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {rendered}
      </div>
    );
  }

export function TabsComponent(props: AriaTabListProps<object>) {
  let state = useTabListState(props);
  let ref = useRef<HTMLDivElement>(null);
  let { tabListProps } = useTabList(props, state, ref);
  return (
    <div className={`tabs ${props.orientation || ''}`}>
      <div {...tabListProps} ref={ref} className="flex flex-row p-4 mb-2 bg-brand-green">
        {[...state.collection].map((item) => (
          <Tab
            key={item.key}
            item={item}
            state={state}
            orientation={props.orientation}
          />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}



function TabPanel({ state, ...props } :{
  state: TabListState<unknown>,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}
// const nestedContent:AccordionItemType[] = [
//   {
//     header: "Tree canopy measures",
//     type: "accordion",
//     elements: [
//       {
//         header: "Neighborhood tree canopy goal",
//         content: [
//           {
//             text: "The minimum percentage of tree canopy required to deliver the requisite benefits of trees to a block group, based on natural biome and population density.",
//             styles: null
//           },
//           {
//             text: "Data Source: Targets set in conjunction with the USDA Forest Service",
//             styles: "italic"
//           }
//         ]
//       },
//       {
//         header: "Tree canopy cover (%)",
//         content: [
//           {
//             text: "The footprint of existing tree canopy when viewed from above—the bird's eye view of tree crowns (leaves, branches and stems).",
//             styles: null
//           },
//           {
//             text: "Data Source: EarthDefine",
//             styles: "italic"
//           }
//         ]
//       },
//     ]
//   },
//   {
//     header: "Demographic measures",
//     type: "accordion",
//     elements: [
//       {
//         header: "Children (0 – 17)",
//         content: [
//           {
//             text: "Percentage of children, ages 0 to 17.",
//             styles: null
//           },
//           {
//             text: "Data Source: American Community Survey 2014-2018",
//             styles: "italic"
//           }
//         ]
//       },
//       {
//         header: "Dependency ratio",
//         content: [
//           {
//             text: "Seniors (age 65+) and children (0-17) as a proportion of working age adults (18-64). ",
//             styles: null
//           },
//           {
//             text: "Data Source: American Community Survey 2014-2018",
//             styles: "italic"
//           }
//         ]
//       },
//     ]
//   }
// ]

// const items:AccordionItemType[] = [
//     {
//       header: "Navigate the map",
//       type: "list",
//       content: [
//         {text:  "Enter an address in the search bar"},
//         {text:  "Use your mouse pointer and scroll to zoom and pan the map"},
//         {text:  "Enter an address in the search bar"},
//         {text:  "Enter an address in the search bar"},
//       ]
//     },
//     {
//       header: "Filter map layers",
//       type: "list",
//       overview: "Set one or more filters to focus your view on the map and isolate areas based one or more parameters",
//       content: [
//         {text:  "Click on 'Filters' to open the filter menu."},
//         {text:  "Click on 'Filters' to open the filter menu."},
//         {text:  "Click on 'Filters' to open the filter menu."},
//         {text:  "Click on 'Filters' to open the filter menu."},
//         {text:  "Click on 'Filters' to open the filter menu."},
//         {text:  "Click on 'Filters' to open the filter menu."},
//       ]
//     }
//   ]

export const Tabs = ({children, label} : {
  children: JSX.Element[],
  label: string
}) => (
  <TabsComponent aria-label={label} orientation="horizontal">
    {Children.map(children, (child, index) => (
      <Item key={index} title={child.props.title}>
        {child}
      </Item>
    ))}
    </TabsComponent>
  )