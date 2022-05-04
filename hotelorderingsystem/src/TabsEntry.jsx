import { useState } from "react";

function TabsEnrty({title, body, setBodyContent, bodyContent}) {
    // change the tabs__title by checking if the bodyContent which we are showing is the same as the clicked tab content,
    // in this way we can make sure which tab we are clicking
    const tabs__title = bodyContent === body ? "tabs__title-selected" : "tabs__title";
    return (
        
        <div className="tabs__entry">
            <button 
                className={tabs__title}
                onClick={ () => {
                  setBodyContent(body);
                }}
            >
                <span className="tabs__title-text">{title}</span>
            </button>
        </div>
    );
}

export default TabsEnrty;
