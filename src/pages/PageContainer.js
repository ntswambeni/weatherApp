import styled from 'styled-components';

// CSS for PageContainer component
const PageContainer = styled.main`
    margin-bottom: 80px;
    div#space-below{
        margin-bottom: 5px;
    }
    @media only screen and (min-width:768px){
            padding: 2rem 2rem 0;
        }

    @media only screen and (min-width:1333px){
            padding-right: 10%;
            padding-left: 10%;
        }    
`;

export default PageContainer;