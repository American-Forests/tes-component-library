import { ReactNode } from 'react';
declare type AccordionContentVariant = 'primary' | 'secondary';
declare type AccordionContentType = 'accordion' | 'list';
declare type AccordionContent = {
    text: string;
    style?: string;
};
export interface AccordionItemType {
    header: string;
    children: ReactNode;
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
export {};
