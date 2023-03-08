import React, { FC } from 'react';
import { PlusIcon, MinusIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { Accordion as AccessibleAccordion, AccordionItem as Item } from "@szhsin/react-accordion";

import { ReactNode } from 'react';
type AccordionContentVariant = 'primary' | 'secondary';
type AccordionContentType = 'accordion' | 'list';
type AccordionContent = {
  text: string;
  style?: string;
}

export interface AccordionItemType {
  header: string;
  variant?: AccordionContentVariant;
  type?: AccordionContentType;
  overview?: string;
  elements?: AccordionItemType[];
  content?: AccordionContent[];
  nested?: Boolean;
}


export interface AccordionProps {
  items: AccordionItemType[];
  variant?: AccordionContentVariant;
}


const AccordionItem: FC<AccordionItemType & {children: ReactNode}> = ({ 
  header, 
  variant, 
  nested,
  ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className={
        `text-brand-green-dark justify-between items-center border-b-brand-green rounded-sm flex flex-row w-full h-full p-4 
        ${variant === 'secondary' && 'text-sm'}
        ${nested && "text-[#333335] text-sm font-semibold"}
      `}>
        {header}
        {(variant === 'primary' && !nested) && 
          <div className='flex text-brand-green justify-center items-center border-brand-green border-2 w-4 h-4 rounded-sm'>
            {isEnter ? <MinusIcon/> : <PlusIcon />}
          </div>
        }
        {(variant === 'secondary' || nested) && 
          <div className={`text-brand-green w-4 h-4 transition-transform duration-200 ease-in-out ${isEnter && "rotate-180"}`}>
            <ChevronDownIcon />
         </div>
        }
      </div>
    )}
    className={`
      border-b-[3px] border-b-brand-green justify-between
      ${variant === 'secondary' && 'border-b border-b-[#E0E0E0]'}
      ${nested && "border-b-[0px] border-t border-t-slant-200"}
    `}
    buttonProps={{
      className: 'text-brand-green-dark justify-between items-center border-none border-b-brand-green flex flex-row w-full hover:bg-brand-green hover:bg-opacity-5'
    }}
    contentProps={{
      className: "transition-height duration-200 ease-in-out"
    }}
    panelProps={{ className: "p-0" }}
  />
);

export const Accordion: FC<AccordionProps> = ({
  items,
  variant
}) => (
  <AccessibleAccordion transition transitionTimeout={200}>
    {items && items.map(item => (
      item.type === "accordion" ? 
      (<AccordionItem header={item.header} variant={variant}>
          {item.elements?.map((element) => (
            <AccessibleAccordion  transition transitionTimeout={200}>
              <AccordionItem header={element.header} nested>
                {element.content?.map(c => (
                  <p className={`text-sm pl-6 my-4 text-gray-600 ${c.style}`}>{c.text}</p>
                ))}
              </AccordionItem>
            </AccessibleAccordion>
          ))}
        </AccordionItem>
      ) : item.type === "list" ? (
        <AccordionItem header={item.header}  variant={variant}>
          {item.overview && <p className="pl-4 py-4 text-sm text-gray-600">{item.overview}</p>}
          <ol  className="pl-4">
            {item.content?.map((c, index) => (
              <li className={`pb-4 ${c.style}`}>
                <div className="w-5 h-5 font-semibold text-sm rounded-full inline-block mr-2 text-center bg-brand-green bg-opacity-20">{index + 1}</div>
                <span className="text-sm text-gray-600">{c.text}</span>
                
              </li>
            ))}
          </ol>
        </AccordionItem>
      ) : (
        <AccordionItem header={item.header} variant={variant}>
          {item.content?.map(c => (
            <p className={c.style}>{c.text}</p>
          ))}
        </AccordionItem>
      )
    ))}
  </AccessibleAccordion>
);
