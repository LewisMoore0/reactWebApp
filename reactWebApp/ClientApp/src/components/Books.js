import React, { Component, useState, useEffect } from 'react';
import { SubmitForm } from './SubmitForm';

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
            return <ul>
                <li><b>{book.bookName}:</b> Price - ${book.price}, Author - {book.author} </li>
            </ul>
        })
    }

    return (
        <wrapper>
            <div>
                {loading === true ? <p><em>Loading...</em></p> : renderBookNames(books)}
            </div>
        </wrapper>
    )
}