import styled from 'styled-components';

// CSS for Footer component
const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    z-index: 3;
    background-color: ${({theme})=>{
        return theme.colors.primary
    }};
    width: 100%;
    p{  
        font-family: ${({theme})=>{
            return theme.fonts.primary
        }};
        color: #fff;
        padding: 0.5rem 1rem;
        font-weight: 300;
        strong{
            font-weight: 600;
        }
    }
`;

export default FooterContainer;
