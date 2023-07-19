import { FC, useEffect, useState } from 'react';
import filledStar from '../../icons/FilledStar.svg';
import emptyStar from '../../icons/EmptyStar.svg';

import './Rating.scss';
import axios from 'axios';
import { BOOK_CARD_URL } from '../../API';
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';

// interface IRating {
//     rating: number;
// }

export const Rating = () => {
    const [book,setBook] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios
            .get(`${BOOK_CARD_URL}/${id}`)
            .then (res => {
            console.log(res.data)
            setBook(res.data)
            
        }).catch(err => console.log(err))
    }, [id])


    return (
        <div className='rating'  key={book?.id}>
            <ReactStars
                count={5}
                value = {3.22}
                size={24}
                color1={'#cccccc'}
                color2={'#FFFF00'}
                edit={false}
            />
        </div>
    )
};
