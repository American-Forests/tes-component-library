import React, { FC } from 'react';

interface KeyProps {
  title: string;
}

export interface ContinuousKeyProps extends KeyProps {
  type: 'continuous';
  startLabel: string;
  endLabel: string;
  gradient: string;
}

export interface DiscreteKeyProps extends KeyProps {
  type: 'discrete';
  labels: string[];
  colors: string[];
}

const Key: FC<KeyProps & { children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col items-center p-4" data-testid="key">
      {children}
      <div className="p-2 text-xs text-gray-400">{title}</div>
    </div>
  );
};

export const ContinuousKey: FC<ContinuousKeyProps> = ({
  title,
  startLabel,
  endLabel,
  gradient,
}) => {
  return (
    <Key title={title}>
      <div className="w-full flex flex-row items-center">
        <div className="text-xs text-gray-500 font-semibold px-2">
          {startLabel}
        </div>
        <div
          className="h-4 flex-grow rounded-sm border-[1px] border-gray-500"
          style={{ background: gradient }}
        />
        <div className="text-xs text-gray-500 font-semibold px-2">
          {endLabel}
        </div>
      </div>
    </Key>
  );
};

export const DiscreteKey: FC<DiscreteKeyProps> = ({
  title,
  labels,
  colors,
}) => {
  return (
    <Key title={title}>
      <div className="flex flex-col">
        {labels.map((label, i) => (
          <div key={label} className="flex items-center p-1">
            <div
              className="w-4 h-4 rounded-sm border-[1px] border-gray-500 flex-shrink-0"
              style={{ background: colors[i] }}
            />
            <div className="text-xs text-gray-700 pl-1">{label}</div>
          </div>
        ))}
      </div>
    </Key>
  );
};
