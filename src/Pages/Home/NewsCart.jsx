import React from 'react';
import { Link } from 'react-router-dom';

const NewsCart = ({news}) => {
    const {title,image_url,details,_id} = news
    return (
        <div className='border p-4 space-y-3'>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <img className='mx-auto' src={image_url} alt="" />
                {
                    details.length>200 ?
                    <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className='text-orange-500 font-semibold'>Read more...</Link></p> :
                    <p>{details}</p> 
                }
        </div>
    );
};

export default NewsCart;