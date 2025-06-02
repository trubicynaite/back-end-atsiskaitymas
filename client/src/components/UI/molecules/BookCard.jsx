import styled from 'styled-components';
import { Link } from 'react-router';

const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    width: 250px;
    overflow: hidden;

    >img {
        width: 100%;
        height: 340px;
        object-fit: cover;
    }

    >div.card-content {
        padding: 15px;
        text-align: left;

        >h3 {
            margin: 0 0 10px;
            font-size: 1.1rem;
            color: palevioletred;
        }

        >p {
            margin: 5px 0;
        }
    }
`;

const ReadMoreButton = styled(Link)`
  margin-top: 10px;
  padding: 6px 12px;
  background-color: palevioletred;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #d45d7d;
  }
`;

const BookCard = ({ book }) => {
    return (
        <StyledCard inStock={book.amountOfCopies > 0}>
            <img src={book.imageUrl} alt='cover' />
            <div className="card-content">
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Rating:</strong> {book.rating}</p>
                <p><strong>Publish Date:</strong> {book.publishDate}</p>
                <p><strong>Genres:</strong> {book.genres?.join(', ')}</p>
                <p><strong>In stock:</strong> {book.amountOfCopies > 0 ? 'Yes' : 'No'}</p>
                <p>{book.description.slice(0, 70)}...</p>
                <ReadMoreButton to={`/books/${book._id}`}>Read More</ReadMoreButton>
            </div>
        </StyledCard>
    );
};

export default BookCard;
