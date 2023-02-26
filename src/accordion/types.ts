import { ReactNode } from 'react';
type AccordionContentVariant = 'primary' | 'secondary';
type AccordionContentType = 'accordion' | 'list';
type AccordionContent = {
  text: string;
  style?: string;
}

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
