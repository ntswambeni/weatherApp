import styled from 'styled-components';

// CSS for Navbar component
const SearchContainer = styled.div`
   
    div{
        width: 100%;
        display: flex;
        input[type="text"]{
            height: 40px;
            width: 100%;
        }
        button[type="submit"]{
            background-color:#F58A07 ;
            color: #fff;
            width: 130px;
            font-size: 1.7rem;
            padding-bottom: 5px;
            font-style: italic;
        }
    }
`;

export default SearchContainer;