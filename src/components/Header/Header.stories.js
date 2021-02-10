/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Header from '.'

export default {
	title: 'Components/Header',
	component: Header
}

export const header = () => (
	<div style={{ backgroundColor: '#2A4F9F' }}>
		<Header title="ATG" />
	</div>
)
