import React, { useState } from 'react';

const Tabs = ({ children, headers }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const jsxHeaders = headers.map((text, index) => (
        <div
            key={text}
            onClick={() => setSelectedTab(index)}
            className={index === selectedTab ? 'selected' : ''} >{text}</div>
    ))
    return (
        <div className="tabs">
            <div className="headers"> {jsxHeaders} </div>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs;
