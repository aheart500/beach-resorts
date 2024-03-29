import styled from 'styled-components'
import defaultBG from '../images/room-1.jpeg'
const styledHeader = styled.header`
min-height: 60vh;
background: url(${props => props.img ? props.img : defaultBG}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;
export default styledHeader;