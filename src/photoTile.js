import React from 'react';

export const PhotoTile = React.memo((props) => {
    // console.log(id);
    return (
        <div key={props.id} onClick={()=>props.handleModal(props.id)} className="tile">
            <img className="image-tile" src={props.src} />
        </div>
    );
  });