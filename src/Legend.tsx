import React, { FC } from 'react';

export interface LegendProps {
  title: string;
}

export interface ContinuousLegendProps extends LegendProps {
  type: 'continuous';
  startLabel: string;
  endLabel: string;
  gradient: string;
}

export interface DiscreteLegendProps extends LegendProps {
  type: 'discrete';
  labels: string[];
  colors: string[];
}

export const Legend: FC<
  ContinuousLegendProps | DiscreteLegendProps
> = props => {
  const { title, type } = props;
  return (
    <div className="flex flex-col items-center p-4">
      <div className="p-2 text-xs text-gray-700 font-semibold">{title}</div>
      {type === 'continuous' ? (
        <ContinuousLegend {...props} />
      ) : (
        <DiscreteLegend {...props} />
      )}
    </div>
  );
};

const ContinuousLegend: FC<ContinuousLegendProps> = ({
  startLabel,
  endLabel,
  gradient,
}) => {
  return (
    <div className="w-full flex flex-row items-center">
      <div className="text-xs text-gray-700 px-2">{startLabel}</div>
      <div
        className="h-4 flex-grow rounded-sm border-[1px] border-gray-500"
        style={{ backgroundImage: gradient }}
      />
      <div className="text-xs text-gray-700 px-2">{endLabel}</div>
    </div>
  );
};

const DiscreteLegend: FC<DiscreteLegendProps> = ({ labels, colors }) => {
  return (
    <div className="grid grid-rows-3 grid-flow-col">
      {labels.map((label, i) => (
        <div key={label} className="flex items-center">
          <div
            className="w-4 h-4 rounded-sm border-[1px] border-gray-500 flex-shrink-0"
            style={{ backgroundColor: colors[i] }}
          />
          <div className="pl-2 text-xs text-gray-700 flex-shrink">{label}</div>
        </div>
      ))}
    </div>
  );
};
// tailwind class for 3 items per row grid
