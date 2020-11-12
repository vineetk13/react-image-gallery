import React, { useEffect, useState } from 'react';

import {fetchPhoto} from './apiHandle';

const Modal = (props) => {
    const [currentImg, setCurrentImg] = useState(null);
    useEffect(()=>{
        fetchFromApi(props.id);
    },[])
    const handleNext = () => {
        let i = props.photos.findIndex((img)=>currentImg.id===img.id);
        if(i<props.photos.length){
            var nextId = props.photos[++i].id;
            fetchFromApi(nextId);
        }
    }
    const handlePrev = () => {
        let i = props.photos.findIndex((img)=>currentImg.id===img.id);
        if(i>0){
            var prevId = props.photos[--i].id;
            fetchFromApi(prevId);
        }
    }
    const fetchFromApi = async (id) => {
        const fetchedPhoto = await fetchPhoto(id);
        setCurrentImg(fetchedPhoto);
    }
    return (
        <div className="modal" style={{
            transform:props.open ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.open ? 1 : 0
        }}>
            <span className="close-btn" onClick={props.handleModal}>&#10060;</span>
            <div className="imgc">
            {currentImg!==null && currentImg.urls!==undefined ? <img className="modal-img" src={currentImg.urls.small} /> : null}
            </div>
            <button onClick={handlePrev} className="prev-btn">&larr;</button>
            <button onClick={handleNext} className="next-btn">&rarr;</button>
        </div>
    )
}

export default Modal;