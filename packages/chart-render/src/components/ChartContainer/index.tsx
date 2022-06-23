import classNames from 'classnames';
import React, { CSSProperties, FC, memo, ReactNode } from 'react';
import './index.less';

const ChartContainer: FC<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}> = ({ children, className, style }) => (
  <div className={classNames('cr-chart-container', className)} style={style}>
    {children}
  </div>
);

export default memo(ChartContainer);
