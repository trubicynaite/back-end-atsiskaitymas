import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookCard from '../components/UI/molecules/BookCard';

const StyledSection = styled.section`
    padding: 20px;
    text-align: center;
    min-height: calc(100vh - 80px - 140px);

    > h2 {
        color: palevioletred;
        font-size: 40px;
    }

    .books {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`;

const Books = () => {

    const [books, setBooks] = useState([]);
    const [fromYear, setFromYear] = useState('');
    const [toYear, setToYear] = useState('');
    const [inStock, setInStock] = useState(false);
    const [sortRating, setSortRating] = useState('');

    const fetchBooks = async () => {
        try {
            const queryParams = new URLSearchParams();

            if (fromYear) queryParams.append('fromYear', fromYear);
            if (toYear) queryParams.append('toYear', toYear);
            if (inStock) queryParams.append('inStock', 'true');
            if (sortRating) queryParams.append('sortRating', sortRating);

            const response = await fetch(`http://localhost:5500/books?${queryParams.toString()}`);
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Failed to fetch books:', error);
        }
    };

    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledSection>
            <h2>Our Books</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchBooks();
                }}
            >
                <label>
                    From Year:
                    <input type="number" value={fromYear} onChange={(e) => setFromYear(e.target.value)} />
                </label>
                <label>
                    To Year:
                    <input type="number" value={toYear} onChange={(e) => setToYear(e.target.value)} />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={inStock}
                        onChange={(e) => setInStock(e.target.checked)}
                    />
                    In Stock
                </label>
                <label>
                    Sort by Rating:
                    <select value={sortRating} onChange={(e) => setSortRating(e.target.value)}>
                        <option value="">None</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
                <button type="submit">Apply Filters</button>
            </form>

            <div className="books">
                {books.length === 0 ? (
                    <p>Loading books...</p>
                ) : (
                    books.map(book => (
                        <BookCard key={book._id} book={book} />
                    ))
                )}
            </div>
        </StyledSection>
    );
};

export default Books;
