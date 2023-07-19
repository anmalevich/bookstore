import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BOOK_CARD_URL } from '../../API';
import { ActionsCard } from '../ActionsCard/ActionsCard';
import { Tabs } from '../Tabs/Tabs';
import './MoreDetailse.scss';


export const MoreDetailse = () => {

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
        <div className='moreDetalise'>
            <Tabs/>
            <div className='moreDetalise__info'>
                <p>{book.Quote2}</p>
                <p>{book.description}</p>
            </div>
            <ActionsCard/>
        </div>
    )
};
