import { useState } from "react";

import TabsEnrty from './TabsEntry';

import './Tabs.css'

function Tabs({entries}) {
    const [ bodyContent, setBodyContent ] = useState('Topic: This is a hotel ordering website. People can register by a username, then they can search available hotels by cities, move-in time and move-out time. Below the search interface, it shows some recommand hotels with photos and hotel names. When we search, it will loads the search results. It will shows some basic introductions about the hotel. If user wants to order, they can click the order button, then it will appear in HOME -> My Orders. The button will be disabled if the rooms of the apartemnt is not enough Then you can see the personal infomation and orders in HOME. In orders, you can also cancel the order by clicking the Cancel button. You can check some introductions in ABOUT and privacy policy in PRIVACY.');
    return (
        <div className="tabs">
            <div className="tabs__titles">
            {
                Object.keys(entries).map( title => {
                    return (
                      <TabsEnrty key={title} title={title} body={entries[title]} setBodyContent = {setBodyContent} bodyContent={bodyContent}/>
                    );
                })
            }
            </div>
            <div className="tabs__body">{bodyContent}</div>
        </div>
    )
}

export default Tabs;