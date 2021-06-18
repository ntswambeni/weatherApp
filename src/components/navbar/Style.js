import styled from 'styled-components';

// CSS for Navbar component
const NavbarWraper = styled.div`
background-color: ${({theme})=>{
    return theme.colors.primary;
}};
color:#fff;
text-align: center;

h1{
    font-family: ${({theme})=>{
        return theme.fonts.script;
    }};
    font-size: 2.5rem;  
    padding: 0.7rem;
}
@media only screen and (min-width:768px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
}
`;

export default NavbarWraper;