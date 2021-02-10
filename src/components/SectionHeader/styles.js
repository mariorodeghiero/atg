import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
	height: 29rem;
	background-color: var(--blue);

	${media.greaterThan('medium')`
			height: 34.5rem;
  	`}
`
