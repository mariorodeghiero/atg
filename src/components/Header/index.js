import * as S from './styles'


const Header = ({ title, description }) => (
	<S.Wrapper>
		<S.Logo src="https://cdn.casinofeber.se/pics/logos/atg-logo.gif" alt="ATG logo" />
		<S.Title>{title}</S.Title>
		<S.Description>{description}</S.Description>
	</S.Wrapper>
)

export default Header