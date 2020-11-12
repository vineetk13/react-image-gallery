import React,{useState, useEffect} from 'react';

import Masonry from './masonry';
import {PhotoTile} from './photoTile';
import Modal from './modal';

const FeedContainer = () => {
    const [results, setResults] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalId, setModalId] = useState("");
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        fetch("https://api.unsplash.com/photos/random?client_id=CSEtI7CL_AudzbRDMgR2_aOUdVapCfwcvRwLCyNyap0&count=25")
        .then(res=>res.json())
        .then(ans=>setResults([...ans]))
        .catch(err=>console.log(err));
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    useEffect(()=>{
        if(!isFetching) return;
        fetch("https://api.unsplash.com/photos/random/?client_id=CSEtI7CL_AudzbRDMgR2_aOUdVapCfwcvRwLCyNyap0&count=30")
        .then(res=>res.json())
        .then(ans=>setResults(prevState=>([...prevState,...ans])));
    },[isFetching])


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        // console.log('Fetching more list items...');
        setIsFetching(true);
    }

    const handleModal = (id) => {
        setModalId(id);
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="masonry-container">
            {isModalOpen && <Modal photos={results} id={modalId} open={isModalOpen} handleModal={handleModal} />}
            <Masonry brakePoints={[350, 500, 750]}>
                {results.map((image)=>{
                    return (
                    <PhotoTile src={image.urls.small} id={image.id} handleModal={handleModal} />
                    ) 
                })
                }
            </Masonry>
        </div>
    )
}

export default FeedContainer;
