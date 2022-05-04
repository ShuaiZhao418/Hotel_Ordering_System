import Tabs from './Tabs';
import './About.css'

function About() {
  const faqs = {
    'Topic' : 'Topic: This is a hotel ordering website. People can register by a username, then they can search available hotels by cities, move-in time and move-out time. Below the search interface, it shows some recommand hotels with photos and hotel names. When we search, it will loads the search results. It will shows some basic introductions about the hotel. If user wants to order, they can click the order button, then it will appear in HOME -> My Orders. The button will be disabled if the rooms of the apartemnt is not enough Then you can see the personal infomation and orders in HOME. In orders, you can also cancel the order by clicking the Cancel button. You can check some introductions in ABOUT and privacy policy in PRIVACY.',
    'Function' : 'Function: 1. We have the login and logout function which can implement an authorization function for each user. 2. We have search function, which can allow users to search available hotels by city. 3. When it shows available hotels, users can order the hotel. Then the available quantity of the hotel will decrease one. If the quantity decrease to zero, the hotel is not allowed to order. 4. User can see their personal infomation and orders. They can also cancel the order. When they cancel, the order will disappear from my orders and the quantity of the apartment will add one, which mean it is available for others. 5. You can check some introductions in ABOUT and privacy policy in PRIVACY.',
  };
  return (
    <div className="about">
      <Tabs entries={faqs}/>
    </div>
  );
}

export default About;
