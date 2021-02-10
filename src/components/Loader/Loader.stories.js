import React from 'react'
import Loader from '.'

export default {
	title: 'Components/Loader',
	component: Loader
}

export const loaderWithLogo = () => <Loader showLogo />

export const loaderDefault = () => <Loader />
