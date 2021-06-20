import styled from 'styled-components';

// CSS for Navbar component
const SearchContainer = styled.div`
    font-family: ${({theme})=>{
            return theme.fonts.primary;
        }};
    div{
        width: 100%;
        display: flex;
        
        input[type="text"]{
            height: 45px;
            width: 100%;
            padding-right: 1rem;
            padding-left: 1rem;
        }
        button[type="submit"]{
            background-color:#F58A07 ;
            color: #fff;
            width: 130px;
            font-size: 1.7rem;
            padding-bottom: 8px;
            font-style: italic;
        }
    }
    div#feedback{
        padding: 0.5rem 1rem;
        color: #F58A07;
        background-color: rgba(0, 0, 0, 0.4);
        font-weight: 600;
        letter-spacing: 1px;
    }
`;

export default SearchContainer;