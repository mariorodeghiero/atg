import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 7rem;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    color: var(--black);
    border-radius: 0.675rem;
    margin-top: 6.5rem;
`
export const Search = styled.div`
    display: flex;
`

export const Input = styled.input`
    border: none;
    outline: 0;
    font-size: 2rem;
    color: var(--black);
    margin-left: 1rem;
`
export const Button = styled.button`
    background-color: var(--blue);
    color: var(--white);
    padding: 1.5rem 2.25rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }
`