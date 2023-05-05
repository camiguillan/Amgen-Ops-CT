import * as React from 'react';
import './layout.scss';

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout ({children} : LayoutProps) {
    return (
    <div className="Layout">
     
      {children}
    </div>
  );
  
}



