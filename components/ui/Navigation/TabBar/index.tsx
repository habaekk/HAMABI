import React from 'react';

export type TabBarItem = {
  key: string;
  label: string;
};

export type TabBarProps = {
  items: TabBarItem[];
  activeKey: string;
  onChange: (key: string) => void;
};

const TabBar: React.FC<TabBarProps> = ({ items, activeKey, onChange }) => {
  return (
    <div className="grid h-12 w-full grid-flow-col auto-cols-fr" role="tablist" aria-label="Tabs" data-testid="tabbar">
      {items.map((item, index) => {
        const isActive = item.key === activeKey;
        const className = [
          'relative appearance-none border-0 bg-white text-black flex items-center justify-center text-xl cursor-pointer',
          index > 0 ? 'border-l border-black' : '',
          isActive ? 'bg-[#FFA982] shadow-inner' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={className}
            onClick={() => onChange(item.key)}
            data-testid={`tab-${item.key}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;


