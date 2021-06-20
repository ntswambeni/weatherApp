import styled from 'styled-components';

// CSS for Navbar component
const DisplayContainer = styled.div`
    display: flex;
    width: 100%;
    @media only screen and (min-width:768px){
        flex-direction: column-reverse;
    }
`;

export default DisplayContainer;