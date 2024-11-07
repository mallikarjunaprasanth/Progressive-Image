import React, { memo, useState } from 'react';
import { Image } from 'react-bootstrap';


const ProgressiveImage = ({ lowQty, HightQty, alt, id }) => {
    const [load, setLoad] = useState({});

    const handleLoad = (id) => {
        setLoad(prev => ({ ...prev, [id]: true }))
    }

    return (
        <>
            <Image style={{ display: !load[id] ? "block" : "none"  ,height :200  , objectFit: 'contain',}} className='w-100'   src={lowQty} alt={alt} />
            <Image style={{ display: load[id] ? "block" : "none" ,height :200  , objectFit: 'contain',}} className='w-100'   src={HightQty} onLoad={() => handleLoad(id)} alt={alt} />
        </>
    )
}

export default memo(ProgressiveImage);