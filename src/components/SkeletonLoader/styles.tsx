'use client'

import styled from 'styled-components'

export const Container = styled.div`
	height: 600px;
	width: 100%;
	display: flex;
	gap: 50px;
	justify-content: space-between;
	margin-top: 60px;
`

export const MainImage = styled.div`
	height: 500px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.loader.lightGrey};
`

export const SliderImage = styled.div`
	height: 60px;
	width: 60px;
	background-color: ${({ theme }) => theme.colors.loader.lightGrey};
`

export const SliderImages = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
`

export const NameSection = styled.div`
	height: 20%;
	width: 60%;
	background-color: ${({ theme }) => theme.colors.loader.lightGrey};
`

export const OptionsSection = styled.div`
	height: 80%;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.loader.lightGrey};
`

export const Images = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	gap: 10px;
`

export const Data = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 340px;
	gap: 40px;
`
