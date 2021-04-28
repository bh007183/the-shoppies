import React, { useState, useEffect } from 'react'
import {featuredMovie} from "../store/IMDB"
import { useDispatch, useSelector } from "react-redux";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();


export default function Featured() {
    const dispatch = useDispatch();
    const featuredArray = useSelector((state) => state.store.IMDB.featured.results)
    console.log(featuredArray)

    useEffect(() => {
    dispatch(featuredMovie())
              
    }, [])

           
    
    

    return (
        <>
       {featuredArray !== undefined ? <AliceCarousel style={{width: "80%"}} mouseTracking items={featuredArray.map(poster => <img style={{width: "100%"}} src={`https://image.tmdb.org/t/p/w500${poster.backdrop_path}`} onDragStart={handleDragStart} />)} /> : <></>}
            
        </>
    )
}
