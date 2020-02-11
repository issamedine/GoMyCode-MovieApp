import React from 'react';
import './Hoc.scss'
import { Icon } from 'antd';



function Hoc(Component) {
  return function WihLoadingComponent({ isLoading}) {
    if (isLoading) return (<Component />);
    return (<div className="spin"><Icon type="loading" style={{ fontSize: 24 }} spin /></div>);
  }
}
export default Hoc;


