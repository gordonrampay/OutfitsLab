import React, { useState } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onToggle: (value: string) => void;
  type?: 'checkbox' | 'radio';
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  onToggle,
  type = 'checkbox'
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center mb-2 font-medium text-gray-800"
      >
        {title}
        <span className="text-sm">{isExpanded ? '−' : '+'}</span>
      </button>
      {isExpanded && (
        <div className="space-y-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded"
            >
              <input
                type={type}
                checked={selectedOptions.includes(option.value)}
                onChange={() => onToggle(option.value)}
                className="mr-2 w-4 h-4"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};