import React from 'react';
import FooterContainer from './Style';


const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p><strong>Copyright</strong> Felizardo Ntswambeni Massimbe {new Date().getFullYear()}</p>
        </FooterContainer>
    )
}

export default Footer;