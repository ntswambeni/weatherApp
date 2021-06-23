import styled from 'styled-components';

// CSS for CityName component
const CityName = styled.div`
    font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    color:#fff;
    letter-spacing: 1px;
    font-size:1.2rem;
    font-weight:700;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.632rem;
    text-align: center;
    position: relative;
    z-index:1;
    @media only screen and (min-width:768px){
            width: 250px;
            min-width: 250px;
            margin-right: 1rem;
        }
`;

export default CityName;