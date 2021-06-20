import styled from 'styled-components';

// CSS for Navbar component
const DateContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4) ;
    padding-left:1rem;
    padding-right: 1rem;
    text-align: center;
    font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    color: #fff;    
    P:first-child{
        text-transform: capitalize;
        font-size:1.5rem;
    }
    P:last-child{
        font-size: 1rem;
    }
`;

export default DateContainer;