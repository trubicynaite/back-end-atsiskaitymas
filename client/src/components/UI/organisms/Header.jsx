import { NavLink } from "react-router";
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 80px;
  padding: 0 30px;
  background-color: #4d2733;

  display: flex;
  justify-content: space-between;
  align-items: center;

  >div{
    height: 60px;
        width: 60px;
        overflow: hidden;
        border-radius:10px;
    >img{
       width: 120%;
       height: 120%;
       object-fit: cover;
       transform: translate(-8%, -8%);
    }
  }
  > nav{

    > ul{
      margin: 0;
      padding: 0;
      list-style-type: none;

      display: flex;
      gap: 10px;

      > li{

        > a{
          text-decoration: none;
          color: #eda5bd;
          font-size: 40px;

          &:hover{
            color: pink;
          }
          &.active{
            color: white;
          }
        }
      }
    }
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src="https://ih1.redbubble.net/image.5220812152.9756/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="https://ih1.redbubble.net/image.5220812152.9756/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;