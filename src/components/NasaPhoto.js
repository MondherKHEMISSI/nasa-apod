import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = ( props ) => {
    const [photoData, setPhotoData] = useState(null);
    console.log(props.date)
    
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?date=${props.date}&api_key=${apiKey}`);
            const data = await res.json();
            setPhotoData(data);
        };
    }, []);

    if (!photoData) return <div />;

  return (
    <>
        <NavBar />

        <div className='nasa-photo'>
            {
                photoData.media_type == "image" ? <img 
                src={photoData.url}
                alt={photoData.title}
                className='photo'
                /> : 
                <iframe 
                    title='"space-video'
                    src={photoData.url}
                    frameBorder='0'
                    gesture='media'
                    allow='encrypted-media'
                    allowFullScreen
                    className='photo'
                />
            }

            <div>
                <h1>{photoData.title}</h1>
                <p className='date'>{photoData.date}</p>
                <p className='explanation'>{photoData.explanation}</p>
            </div>
        
        </div>
    </>
  )
}

export default NasaPhoto