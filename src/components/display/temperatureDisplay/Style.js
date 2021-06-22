import styled from 'styled-components';

// CSS for Navbar component
const TemperatureContainer = styled.div`
    width:300px;
    height: 60px;
    background-color:#F58A07 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:1rem;
    @media only screen and (min-width:768px){
        width: 100%;
    }
    p{
        text-align:center;
        color: #fff;
        font-size: 1.4rem;
        font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    }
    p:last-child{
        font-size: 0.8rem;
    }
`;

export default TemperatureContainer;