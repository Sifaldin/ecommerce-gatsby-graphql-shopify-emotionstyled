import styled from 'styled-components'

export const ImageThumbnailWrapper = styled.dev`
cursor: pointer;
border: 4px solid ${props => (props.isActive ? 'blue': '#eee')};
`