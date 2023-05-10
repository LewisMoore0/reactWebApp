import { useState } from 'react';

export const SubmitForm = () => {

    const [book, setBook] = useState({})
    //const [price, setPrice] = useState(0)
    //const [category, setCategory] = useState('')
    //const [author, setAuthor] = useState('')

    //async function sendData(url = "/api/books", data = bookData) {

    //}

    async function postBook() {
        const response = await fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' }
        })
    }
   
    return (
        <form onSubmit={postBook}>  
            <label>
                Book Name:
                <input type="text" name="name" onChange={ e => setBook({...book, bookName: e.target.value })}/>
            </label>
            <label>
                Price:
                <input type="number" name="price" onChange={e => setBook({...book, price: e.target.value })}/>
            </label>
            <label>
                Category:
                <input type="text" name="category" onChange={e => setBook({ ...book, category: e.target.value })}/>
            </label>
            <label>
                Author:
                <input type="text" name="author" onChange={e => setBook({ ...book, author: e.target.value })}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
