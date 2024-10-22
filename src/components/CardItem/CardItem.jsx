import propTypes from 'prop-types';
import "./CardItem.scss";

export default CardItem;

function CardItem(props) {
    const { rate, price, speed, selected, onClick } = props;
    return (
        <div
            className={`${getClassNames(rate)} ${selected && 'card--selected'}`}
            onClick={() => onClick(rate)} >
            <h1 className='card__title'>Безлимитный <span>{price}</span></h1>
            <div className='card__price-block'>
                <span className='card__text-top'>руб</span>
                <p className='card__price'>{price}</p>
                <span className='card__text-bottom'>/мес</span>
            </div>
            <p className='card__speed'>до {speed} Мбит/сек</p>
            <p className='card__info'>Объем включенного трафика не ограничен</p>
        </div>
    )
}

CardItem.propTypes = {
    rate: propTypes.string,
    price: propTypes.number,
    speed: propTypes.number,
    selected: propTypes.bool,
    onClick: propTypes.func
}

function getClassNames(rateName) {
    switch (rateName) {
        case 'minimum':
            return 'card card--first';
        case 'standart':
            return 'card card--second';
        case 'maximum':
            return 'card card--third';
        case 'vip':
            return 'card card--fourth';
    }
}