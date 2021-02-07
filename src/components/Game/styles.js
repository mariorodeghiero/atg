import styled from 'styled-components'

export const ListItem = styled.li`
    list-style-type: none;
    width: 14rem;
    height: 10rem;
    background-color: var(--blue);
    padding: 1rem;
    margin: 2rem 1rem;
    color: var(--white);
    border-radius: 0.5rem;
    border: ${props => props.active ? "2px solid var(--yellow)" : "none"};

    :hover {
        border: 2px solid var(--yellow);
        cursor: pointer;
    }
`
export const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    line-height: 5rem;
`

export const Time = styled.p`
    font-size: 1.25rem;
    text-align: center;
    line-height: 2.7rem;
    width: 100%;
`
