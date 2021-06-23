import styled from 'styled-components';

// CSS for DisplayContainer component
const DisplayContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index:1;
    @media only screen and (min-width:768px){
        flex-direction: column-reverse;
        width: 250px;
        min-width: 250px;
        margin-right: 1rem;
    }
    
`;

export default DisplayContainer;