import styled from "styled-components";

const StyledSection = styled.section`
    padding: 20px;
    text-align: center;
    min-height: calc(100vh - 80px - 140px);

    >h2{
        color: palevioletred;
    }
    
    >p{
        font-size: large;
    }
`

const Home = () => {
    return (
        <StyledSection>
            <h2>Welcome to BookLover – Your Gateway to Inspiring Reads!</h2>
            <p>At BookLover, we bring you a thoughtfully curated collection of literature — from timeless classics to the latest bestsellers. Whether you're searching for gripping fiction, insightful non-fiction, or books to spark young imaginations, we have something for every reader.</p>
            <p>Our shelves are filled with stories and knowledge that fuel curiosity, creativity, and growth — all at prices that make building your personal library easy and enjoyable.</p>
            <p>Browse our store and find your next great read today!</p>
        </StyledSection >
    );
}

export default Home;