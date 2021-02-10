import React from 'react'
import * as S from './styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GameDataActions from '../../store/ducks/game-data/actions'
import moment from 'moment'

const Game = ({
	id,
	startTime,
	getGameDataRequest,
	betType,
	gameSelected,
	setGameSelected
}) => {
	const onFetchRace = () => {
			setGameSelected(id)
			getGameDataRequest(id)
	}

	return (
		<S.ListItem onClick={() => onFetchRace()} active={gameSelected === id}>
			<S.Title active={gameSelected === id}>{betType}</S.Title>
			<S.Time active={gameSelected === id}>
				{moment(startTime).format('D MMM YYYY, hh:mm')}
			</S.Time>
		</S.ListItem>
	)
}

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(GameDataActions, dispatch)

export default connect(null, mapDispatchToProps)(Game)
