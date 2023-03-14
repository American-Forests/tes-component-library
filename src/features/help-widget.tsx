import React, { FC } from 'react';
import { Accordion, AccordionItemType } from '../components/accordion';
import { Tabs } from '../components/tabs';
import { Button } from '../components/button';
import { QuestionMarkIcon, Cross1Icon } from '@radix-ui/react-icons';

const Portal: FC<HelpWidgetProps> = ({ data }) => {
  return (
    <div className="w-[360px] rounded-xl h-[500px] absolute bottom-16 left-4 shadow overflow-hidden">
      <Tabs label="help widget">
        {data.map((d, i) => (
          <div title={d.sectionTitle} key={i}>
            <Accordion items={d.sectionContent} variant="primary" />
          </div>
        ))}
      </Tabs>
    </div>
  );
};

export interface HelpWidgetProps {
  data: HelpWidgetData[];
}

export type HelpWidgetData = {
  sectionTitle: string;
  sectionContent: AccordionItemType[];
};

export const HelpWidget: FC<HelpWidgetProps> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleWidget = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen && <Portal data={data} />}
      <Button
        onClick={toggleWidget}
        variant="rounded"
        Icon={isOpen ? Cross1Icon : QuestionMarkIcon}
        className="absolute bottom-4 left-4"
      />
    </>
  );
};
