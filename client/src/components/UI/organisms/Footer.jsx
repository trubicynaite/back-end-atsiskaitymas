import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const StyledFooter = styled.footer`
    height: 120px;
    background-color: #4d2733;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 20px;

    >p, a {
        color: #eda5bd;
        margin: 0;
    }

    >a {
        text-decoration: none;
        margin: 0 10px;
        &:hover {
            text-decoration: underline;
        }
    }
.salygos {
    display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
}

.social {
        display: flex;
        gap: 15px;
        margin-top: 8px;

        a {
            color: #eda5bd;
            font-size: 1.4rem;

            &:hover {
                color: #d36c8c;
            }
        }
    }
    .info{
        color: #eda5bd;
    }
`
const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; 2025 Back-End Atsiskaitymas. All rights reserved.</p>
            <div className='salygos'>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="social">
                <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" ><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" ><FaLinkedinIn /></a>
            </div>
            <div className="info">
                <p>Mūsų adresas: Back-End gatvė 2, Vilnius</p>
                <p>Darbo laikas: <br />I–V: 9:00–16:00<br />VI–VII: nedirbame</p>
            </div>
        </StyledFooter>
    );
}

export default Footer;
