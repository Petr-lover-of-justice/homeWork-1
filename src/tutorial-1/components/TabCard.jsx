import React from 'react';
function TabCard({ tab, TabClick }) {
  return (
    <>
      <input id="tab-two" type="checkbox" name="tabs" />
      <label htmlFor="tab-two" onClick={TabClick}>
        {tab.title}
      </label>
      <div className="tab-content">
        <p>{tab.description}</p>
      </div>
    </>
  );
}

export default TabCard;
