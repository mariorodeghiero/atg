import styled from 'styled-components'

export const Wrapper = styled.header`
	width: 100%;
	max-width: 960px;
	margin: 0 auto;
	border-bottom: 1px solid var(--border-gray-light);
	-webkit-background-clip: padding-box; /* for Safari */
	background-clip: padding-box;
	display: flex;
	align-items: center;
	padding: 12px;
`

export const Title = styled.h1`
	font-size: 3.5rem;
	color: var(--yellow);
	font-style: italic;
`

export const Description = styled.h2`
	font-size: 1.5rem;
	font-weight: 400;
`
