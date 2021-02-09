import * as S from './styles'
import HighlightOff from '@material-ui/icons/HighlightOff';

const FailedMessage = () => (
  <S.Wrapper>
    <HighlightOff style={{ fontSize: 32, color: "var(--red)", textAlign: "center" }}/>
    <S.Title>Something went wrong !</S.Title>
    <S.Description>Please try again using v4, v64, v65 or v75.</S.Description>
  </S.Wrapper>
)

export default FailedMessage