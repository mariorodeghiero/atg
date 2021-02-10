import Input from '../Input'
import * as S from './styles'

const SectionSearch = ({ description }) => (
	<S.Wrapper>
		<S.Content>
			<S.Title>{description}</S.Title>
			<Input />
		</S.Content>
	</S.Wrapper>
)

export default SectionSearch
