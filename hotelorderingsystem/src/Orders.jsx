import { useState, useEffect } from 'react';

import { fetchSession } from './services';
import { fetchOrders } from './services';
import { fetchDeleleOrder } from './services';

import './Orders.css'

function Orders() {

  const [orderList, setOrderList] = useState();
  const [currentOrderId, setCurrentOrderId] = useState('');

  
  useEffect(
      () => {
        fetchSession()
        .then( username => {
            getOrders();
        })
        .catch( error => {
          console.log(error);
        });
      },
      []
  );
  // Get all todos
  function getOrders() {
      fetchOrders()
      .then( orderlist => {
        let size = Object.keys(orderlist);

        if (size.length === 0) {
            setOrderList("empty");
        } else {
            setOrderList(orderlist);
        }
      })
        .catch( error => {
          console.log(error);
      })
  }

  // delete one todo
  function deleleOrder(id) {
      fetchDeleleOrder(id)
      .then( () => {
            getOrders();
      })
      .catch( error => {
          console.log(error);
      });
  }

  //  set currentid
  function setCurrentId(id) {
    if (currentOrderId === '') {
        setCurrentOrderId(id);
    } else if (currentOrderId === id){
        setCurrentOrderId('');
    } else if(currentOrderId !== id) {
        setCurrentOrderId(id);
    }
  }

  return (
    <div className="orders">
      {!orderList && (<div className="loader"></div>)}
      {orderList && (
             <div className='orders__show'>
                <div className='orders__content'>
                {orderList === "empty" && 
                    <div className='orders__hint'>
                        Please make an order!
                    </div>
                }
                {orderList !== "empty"&& (Object.keys(orderList).map( order => {
                    return (
                    <div className='order'>
                        <div className='order__title'>
                            <ul key={orderList[order].id} className='order__title-text'>
                                <li className="order__name">
                                    {orderList[order].name}
                                </li>
                                <li className="order__price">
                                    {orderList[order].price}       
                                </li>
                                <button 
                                    className="order__delete"
                                    onClick={() => deleleOrder(orderList[order].id)}>
                                    Cancel
                                </button>
                            </ul>
                            <div className='order__title-show'>
                                <ul key={orderList[order].id} className='order__title-text'>
                                    <li className="order__city">
                                        {orderList[order].city}
                                    </li>
                                     <button 
                                        className='order__title-button'
                                        onClick={() => setCurrentId(orderList[order].id)}>
                                        {currentOrderId === orderList[order].id ? '▲' : '▼'}
                                    </button>
                                </ul>
                            </div>
                        </div>
                        <div className={currentOrderId === orderList[order].id ? 'order__body-done' : 'order__body'}>
                            <div className="order__cover">
                                <img className="order__cover-img" alt='images for hotels' src={orderList[order].imageUrl}/>
                            </div>
                            <div className="order__content">
                                <ul key={orderList[order].id} className='order__content-text'>
                                    {/* <li className="order__id">
                                        {orderList[order].id}
                                    </li> */}
                                    <span className="order__description-span"> 
                                        Description
                                    </span>
                                    <li className="order__description">
                                        {orderList[order].description}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    
                );
                    }) )
                }
                </div>        
            </div>
      )}
    </div>
  );
}

export default Orders;
