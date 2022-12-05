import React, { useState, useEffect } from 'react'
import { LocalStorage } from './constants'
import { useImmer } from 'use-immer'
import { v4 as uuidv4 } from 'uuid'

export interface Todo {
	id: string
	title: string
	text: string
	done: boolean
}

export interface TodoContextType {
	todos: Todo[]
	updateTodosDemo: () => void
	clearAllTodos: () => void
	updateTodos: (title: string, text: string) => void
}

const Context = React.createContext<TodoContextType>({
	todos: [],
	updateTodosDemo: () => {},
	clearAllTodos: () => {},
	updateTodos: () => {},
})

const ContextProvider = ({ children }: any) => {
	const [todos, setTodos] = useImmer<Todo[]>([])

	useEffect(() => {
		const todosData = JSON.parse(
			localStorage.getItem(LocalStorage.todo) || JSON.stringify([])
		)

		setTodos(todosData)
	}, [])

	const saveTodosToLocalStorage = (todos: Todo[]) => {
		localStorage.setItem(LocalStorage.todo, JSON.stringify(todos))
	}

	const updateTodosDemo = () => {
		const newTodo = {
			id: uuidv4(),
			title: 'TestTitle',
			text: 'TestText',
			done: false,
		}

		setTodos((draft) => {
			draft.push(newTodo)
			saveTodosToLocalStorage(draft)
		})
	}

	const updateTodos = (title: string, text: string) => {
		const newTodo = {
			id: uuidv4(),
			title,
			text,
			done: false,
		}
		setTodos((draft) => {
			draft.push(newTodo)
			saveTodosToLocalStorage(draft)
		})
	}

	const clearAllTodos = () => {
		setTodos([])
		localStorage.removeItem(LocalStorage.todo)
	}

	return (
		<Context.Provider
			value={{
				todos,
				updateTodosDemo,
				clearAllTodos,
				updateTodos,
				// deleteAllTodos,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }
