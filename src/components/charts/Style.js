import styled from 'styled-components';

// CSS for Navbar component
const ChartContainer = styled.div`
    font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    background-color:#fff ;
    position: relative;
    z-index:1;  
    h2{
        padding: 0.5rem 1rem;
        font-weight: 600;
        font-size: 1.2rem;
        text-align: center;
    }
`;

export default ChartContainer;