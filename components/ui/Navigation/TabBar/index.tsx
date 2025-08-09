import React from 'react';
import styles from './TabBar.module.css';

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
    <div className={styles.container} role="tablist" aria-label="Tabs" data-testid="tabbar">
      {items.map((item, index) => {
        const isActive = item.key === activeKey;
        const className = [
          styles.tab,
          isActive ? styles.active : '',
          index === 0 ? styles.first : '',
          index === items.length - 1 ? styles.last : '',
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


