import React, { Component, useState, useEffect } from 'react';

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
        return books.map((book) => {
            return <li> {book.bookName} </li>
        })
    }

    return (
        <div>
            {loading === true ? <p><em>Loading...</em></p> : renderBookNames(books)}
        </div>
    )
}