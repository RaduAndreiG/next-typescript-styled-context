import React, { useState } from 'react'
import styled from 'styled-components'
import { Context } from '../../utils/todosProvider'

const Test = () => {
	const { updateTodos } = React.useContext(Context)
	const [titlu, setTitlu] = useState('')
	const [text, setText] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		updateTodos(titlu, text)
		setTitlu('')
		setText('')
	}

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					placeholder='Titlu'
					value={titlu}
					onChange={(e) => setTitlu(e.target.value)}
				/>
				<input
					placeholder='Text'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button>Send Data</button>
			</form>
		</div>
	)
}

const Title = styled.h1`
	display: block;
	font-size: 2rem;
`

export default Test
