import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding-bottom: 12rem;

	${media.lessThan('large')`
			padding-left: 1.5rem;
			padding-right: 1.5rem;
 `}
`
export const SubTitle = styled.h2`
	font-size: 1.5rem;
	color: var(--gray);
	margin-bottom: 2.5rem;
`
export const TableWrapper = styled.div`
	margin-top: 4rem;
	padding: 0 1rem 0 1rem;
	${media.lessThan('large')`
		padding: 0;
	`}
`
