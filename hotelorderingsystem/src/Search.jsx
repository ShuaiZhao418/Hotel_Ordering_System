import { useState, useEffect } from 'react';

import { fetchRoom } from './services';
import { fetchAddOrder } from './services';
import Recommand from './Recommand'
import "./Search.css"


function Search() {
  const [searchResult, setSearchResult] = useState();
  const [city, setCity] = useState('No');
  const [moveInDate, setMoveInDate] = useState('');
  const [moveOutDate, setMoveOutDate] = useState('');
  const [errorInfo, setErrorInfo] = useState('');
  const [selectErrorInfo, setSelectErrorInfo] = useState('');
  const [moveInErrorInfo, setMoveInErrorInfo] = useState('');
  const [moveOutErrorInfo, setMoveOutErrorInfo] = useState('');

  function getRoomsByCity(city) {
    if (city !== "No" && moveInDate !== '' && moveOutDate !== '') {
      fetchRoom(city)
      .then( roomlist => {
        setSearchResult(roomlist);
        })
      .catch( error => {
        console.log(error);
      })
    } else {
      setErrorInfo('Please fill in complete info!');
    }
  }

  function checkCityInput(city) {
      if (city === 'No') {
        setSelectErrorInfo('Please a city!');
      } else {
        setSelectErrorInfo('');
      }
  }

  function checkMoveInInput(moveInErrorInfo) {
    if (moveInErrorInfo === '') {
      setMoveInErrorInfo('Please a Move-in Date!');
    } else {
      setMoveInErrorInfo('');
    }
  }

  function checkMoveOutInput(moveOutErrorInfo) {
    if (moveOutErrorInfo === '') {
      setMoveOutErrorInfo('Please a Move-out Date!');
    } else {
      setMoveOutErrorInfo('');
    }
  }

  function setResult() {
    setSearchResult();
    setErrorInfo('');
    setCity('No');
  }

  function orderRoom(roomId) {
    fetchAddOrder(roomId)
    .then( roomlist => {
      console.log("success");
      getRoomsByCity(city);
      })
    .catch( error => {
      console.log(error);
    })
  }

  return (
    <div className="search">
      {!searchResult && (
      <div className="search__hotel-search">
        <form className='search__form' onSubmit={(e) => e.preventDefault()}>
            <div className='error__message'>
              {errorInfo}
            </div>
            <span className="search__city__span">City:</span>
            <select className="search__city__select" onChange={(e) => setCity(e.target.value)} required>
              <option value="No">Please Select</option>
              <option value="Seattle">Seattle</option>
              <option value="London">London</option>
              <option value="New York">New York</option>
              <option value="LA">LA</option>
            </select>
            <div className='error__message'>
              {selectErrorInfo}
            </div>
            <span className="move__in__span">Start Date:</span>
            <input className="move__in__input" id="move-in-date" type="date" onChange={(e) => setMoveInDate(e.target.value)} required></input>
            <div className='error__message'>
              {moveInErrorInfo}
            </div>
            <span className="move__out__span">End Date:</span>
            <input className="move__out__input" id="move-out-date" type="date" onChange={(e) => setMoveOutDate(e.target.value)} required></input>
            <div className='error__message'>
              {moveOutErrorInfo}
            </div>
            <button 
              className='search__button__search'
              onClick={ 
                () => {
                  getRoomsByCity(city);
                  checkCityInput(city);
                  checkMoveInInput(moveInDate);
                  checkMoveOutInput(moveOutDate);
                }
              }
            >Search</button>
        </form>
      </div>
      )}

      {searchResult && (
        <div className='hotels'>
        { Object.keys(searchResult).map( hotel => {
            return (
              <div className='card'>
                <div className="card__cover">
                  <img className="card__cover-img" alt='serach page background' src={searchResult[hotel].imageUrl}/>
                </div>
                <div className="card__content">
                  <ul key={searchResult[hotel].id} className='hotel__content'>
                      {/* <li className="hotel__id">
                          {searchResult[hotel].id}
                      </li> */}
                      <li className="hotel__name">
                          {searchResult[hotel].name}
                      </li>
                      <li className="hotel__city">
                          {searchResult[hotel].city}
                      </li>
                      <li className="hotel__description">
                          {searchResult[hotel].description}
                      </li>
                      <li className="hotel__price">
                          {searchResult[hotel].price}       
                      </li>
                      <div className="hotel__detail">
                        {/* the button will be disabled when the left quantity below 0 */}
                        <button className="hotel__detail__button" 
                                disabled={searchResult[hotel].quantity === 0}
                                onClick={
                                  () => orderRoom(searchResult[hotel].id)
                                }>
                          Order
                        </button>
                      </div>
                  </ul>
                </div>
                  
              </div>
                
            );
          }) 
        }
          <div className='hotels__title'>
            <div className='hotels__result'>
              <span className='hotels__result-span'>Result:</span>
            </div>
            <div className='hotels__return'>
              <button 
                className='hotels__return-button'
                onClick={ 
                  () => setResult()
                }>
                Search Again
              </button>
            </div>
          </div>
        </div>  
        )
      }
      <div className="search__hotel-recommand">
        <Recommand/>
      </div>
    </div>
  );
}

export default Search;
