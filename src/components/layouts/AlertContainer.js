import styled from 'styled-components';

// CSS for AlertContainer component
const AlertContainer = styled.div`
    position: fixed;
	bottom: 37px;
	min-width: 400px;
	z-index: 1000;
    div{
        background-color: #EBE18F;
        border-radius: 3px;
        p{
            padding:0.5rem 1rem;
            font-family: ${({theme})=> theme.fonts.primary};
            color: #000;
            font-weight:700;
        }
    }
`;

export default AlertContainer;