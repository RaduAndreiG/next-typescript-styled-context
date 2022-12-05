import React from 'react'
import { Context, TodoContextType } from '../../utils/todosProvider'

const Display = () => {
	const test = React.useContext(Context)

	return (
		<div>
			{test.todos.map((item, index) => (
				<p key={index}>{item.text}</p>
			))}
		</div>
	)
}

export default Display
