import propTypes from 'prop-types';
import CardItem from "../CardItem/CardItem";
import { useState } from 'react';
import "./CardsContainer.scss";

export default CardsContainer;

function CardsContainer({ rates }) {
    const [selectedCard, setSelected] = useState(null);

    const handleSelectChange = (id) => {
        setSelected(id);
    }

    return (
        <div className="cards-container">
            {rates.map((rate) =>
                <CardItem
                    key={rate.id}
                    rate={rate.id}
                    price={rate.price}
                    speed={rate.speed}
                    selected={selectedCard === rate.id}
                    onClick={handleSelectChange} />)
            }
        </div>
    )
}

CardsContainer.propTypes = {
    rates: propTypes.array
}