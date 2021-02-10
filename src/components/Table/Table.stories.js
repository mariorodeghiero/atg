/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import CollapsibleTable from '.'
import { races } from '../../mock/mock'

export default {
	title: 'Components/CollapsibleTable',
	component: CollapsibleTable
}

export const collapsibleTable = () => <CollapsibleTable races={races} />
