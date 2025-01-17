import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
	width: 100%;
	max-width: 960px;
	margin: 8rem auto 2rem auto;

	${media.lessThan('large')`
			padding: 0 2rem 0 2rem;
  	`}
`

export const SubTitle = styled.h2`
	font-size: 1.5rem;
	color: var(--gray);
	margin-bottom: 2rem;
`

export const List = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
`
