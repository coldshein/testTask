import React from 'react';
import { formatPhone } from '../pages/utils/format/format';

const CardItem = ({name, email, phone, position, photo}) => {
    return (
        <div class="card-item">
            <div class="card-image">
                <img src={photo} alt="" />
            </div>
            <p class="card-title">{name}</p>
            <p>{position}</p>
            <p>{email}</p>
            <p>{formatPhone(phone)}</p>
        </div>
    );
}

export default CardItem;