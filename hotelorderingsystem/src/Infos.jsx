import './Infos.css'

function Infos() {
  const info = {
    'Name' : 'Shuai Zhao',
    'Tel' : '425-123-4567',
    'Hometown' : 'Shanghai',
    'Order History' : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Pellentesque id ex ultrices, dignissim velit vel, ullamcorper erat.",
        "Praesent maximus est id sem auctor condimentum.",
        "Duis varius risus eget rutrum vestibulum.",
        "Fusce sodales ex sit amet bibendum ornare.",
        "Phasellus aliquam lectus eget gravida sollicitudin."]
  };
  return (
    <div className="infos">
        <div className='info'>
            <div className="info__line"></div>
            <ul className="info__items">
                <li className="info__item">
                    <div className="info__top">
                        <div className="info__circle"></div>
                        <div className="info__title">
                            <span>Name:</span>
                        </div>
                    </div>
                    <div class="info__content">
                        {info.Name}
                    </div>
                </li>
            </ul>
        </div>
        <div className='info'>
            <div className="info__line"></div>
            <ul className="info__items">
                <li className="info__item">
                    <div className="info__top">
                        <div className="info__circle"></div>
                        <div className="info__title">
                            <span>Telephone:</span>
                        </div>
                    </div>
                    <div className="info__content">
                        {info.Tel}
                    </div>
                </li>
            </ul>
        </div>
        <div className='info'>
            <div className="info__line"></div>
            <ul className="info__items">
                <li className="info__item">
                    <div className="info__top">
                        <div className="info__circle"></div>
                        <div className="info__title">
                            <span>Hometown:</span>
                        </div>
                    </div>
                    <div className="info__content">
                        {info.Hometown}
                    </div>
                </li>
            </ul>
        </div>
        <div className='info'>
            <div className="info__line"></div>
            <ul className="info__items">
                <li className="info__item">
                    <div className="info__top">
                        <div className="info__circle"></div>
                        <div className="info__title">
                            <span>Order History:</span>
                        </div>
                    </div>
                    <div className="info__content">
                        {info['Order History']}
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  );
}

export default Infos;
