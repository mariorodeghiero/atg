import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 960px;
`

export const Content = styled.div`
	position: absolute;
	top: 20.5%;
	width: 100%;
	max-width: 960px;
	height: 16rem;
	display: grid;
	padding: 0 1.5rem 0 1.5rem;
	${media.greaterThan('medium')`
			font-size: 3.5rem;
			padding: 0;
  	`}

	${media.between('small', 'large')`
			padding: 0 1.5rem 0 1.5rem;
  	`}
`

export const Title = styled.h1`
	font-size: 2rem;
	color: var(--white);

	${media.greaterThan('medium')`
			font-size: 3.5rem;
  	`}
`
