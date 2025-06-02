import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  background: #fff8fb;
  border-radius: 12px;

  >h2 {
    color: palevioletred;
    margin-bottom: 24px;
    text-align: center;
    font-size: 2.5rem;
  }

  >p {
    margin: 10px 0;
    font-size: 20px;

    >strong {
      color: #9c3a5f;
      font-weight: 600;
    }
  }

  >img {
    display: block;
    margin: 30px auto 0;
    max-width: 220px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(156, 58, 95, 0.2);
  }
`;


const SpecificBookPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await fetch(`http://localhost:5500/books/${id}`);
                const data = await res.json();
                setBook(data);
            } catch (error) {
                console.error('Failed to fetch book:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!book) return <p>Book not found.</p>;

    return (
        <StyledSection>
            <h2>{book.title}</h2>
            <img src={book.imageUrl} alt={book.title} style={{ maxWidth: '200px' }} />
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Genres:</strong> {book.genres?.join(', ') || 'N/A'}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p><strong>Publish Date:</strong> {book.publishDate}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <p><strong>Copies Available:</strong> {book.amountOfCopies}</p>
        </StyledSection>
    );
};

export default SpecificBookPage;
