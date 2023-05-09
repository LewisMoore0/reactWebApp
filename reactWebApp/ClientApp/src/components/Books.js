import React, { Component, useState, useEffect } from 'react';
import { FetchData } from './FetchData';

export const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const response = await fetch("/api/books");
            const data = await response.json();
            setBooks(data)
            setLoading(false)
        } catch (error) {
            return error
        }
    };

    useEffect(() => {
        fetchData()
    })

    const renderBookNames = (books) => {
        return (
            <ul>
                <li>Something</li>
            </ul>
        
        )}

    let contents = loading === true ? <p><em>Loading...</em></p> : {renderBookNames}


    return (
        <div>
            
        </div>
    )
}