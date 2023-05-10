import { useState } from 'react';

export const SubmitForm = () => {

    const [book, setBook] = useState({})

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
                Book Name:<br></br>
                <input type="text" name="name" onChange={ e => setBook({...book, bookName: e.target.value })}/>
            </label><br></br>
            <label>
                Price:<br></br>
                <input type="number" name="price" onChange={e => setBook({...book, price: e.target.value })}/>
            </label><br></br>
            <label>
                Category:<br></br>
                <input type="text" name="category" onChange={e => setBook({ ...book, category: e.target.value })}/>
            </label><br></br>
            <label>
                Author:<br></br>
                <input type="text" name="author" onChange={e => setBook({ ...book, author: e.target.value })}/>
            </label><br></br>
            <input type="submit" value="Submit" />
         </form>
        
    )
}
