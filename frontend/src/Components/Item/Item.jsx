import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item' key={props.id}>
            <img src={props.image} alt="" />
            <Link to={`/product/${props.id}`}><p>{props.name}</p></Link>
            <p>{props.category}</p>
            <div className="address">
                {props.address}
            </div>
        </div>
    );
}

export default Item;
