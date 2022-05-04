import { useState, useEffect } from 'react';

import { fetchRooms } from './services';

import "./Recommand.css"



function Recommand() {

    const [recommandRooms, setRecommandRooms] = useState();

    useEffect(
        () => {
          fetchRooms()
          .then( roomlist => {
            setRecommandRooms(roomlist);
          })
          .catch( error => {
            console.log(error);
          });
        },
        []
    );

    return (
        
        <div id='recommand' className='recommand'>
            <div className='recommand__text'>Recommand:</div>
            {!recommandRooms && (<div className="loader"></div>)}
            {recommandRooms && (
                <div className='recommand__hotels'>
                { Object.keys(recommandRooms).map( hotel => {
                    return (
                      <div className='recommand__card'>
                        <div className="recommand__card__cover">
                          <img className="recommand__card__cover-img" alt='image for hotels' src={recommandRooms[hotel].imageUrl}/>
                        </div>
                        <div className="recommand__card__content">
                          <ul key={recommandRooms[hotel].id} className='recommand__hotel__content'>
                              {/* <li className="hotel__id">
                                  {recommandRooms[hotel].id}
                              </li> */}
                              <li className="recommand__hotel__name">
                                  {recommandRooms[hotel].name}
                              </li>
                              {/* <li className="hotel__city">
                                  {recommandRooms[hotel].city}
                              </li>
                              <li className="hotel__price">
                                  {recommandRooms[hotel].price}
                              </li>
                              <li className="hotel__description">
                                  {recommandRooms[hotel].description}
                              </li> */}
                          </ul>
                        </div>
                      </div>
                    );
                  }) 
                }
                </div> 
            )}
        </div>

    );
}

export default Recommand;
