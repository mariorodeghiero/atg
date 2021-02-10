import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.form`
    height: 7rem;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
    color: var(--black);
    border-radius: 0.675rem;
    margin-top: 6.5rem;

    box-shadow: 2px 20px 30px 3px rgba(0, 0, 0, 0.10);
`
export const Search = styled.div`
    display: flex;
    width: 100%;
`

export const Input = styled.input`
    border: none;
    outline: 0;
    font-size: 2rem;
    color: var(--black);
    margin-left: 1rem;
    width: 90%;

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        -webkit-transition-delay: 9999s;
        transition-delay: 9999s;
    }
`
export const Button = styled.button`
    background-color: var(--blue);
    color: var(--white);
    padding: 1rem 1.25rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }

		${media.greaterThan('medium')`
			padding: 1.5rem 2.25rem;
  	`}
`
