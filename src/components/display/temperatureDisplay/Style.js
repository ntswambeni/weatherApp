import styled from 'styled-components';

// CSS for Navbar component
const TemperatureContainer = styled.div`
    width:200px;
    height: 60px;
    background-color:#F58A07 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:1rem;
    padding-right: 1rem;
    @media only screen and (min-width:768px){
        width: 100%;
    }
    p{
        color: #fff;
        font-size: 1.6rem;
        font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    }
`;

export default TemperatureContainer;