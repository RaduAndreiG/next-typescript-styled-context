import type { NextPage } from 'next'
import Head from 'next/head'
import Test from '../features/Todos/Test'
import { Context } from '../utils/todosProvider'
import { useContext } from 'react'
import Display from '../features/Todos/Display'

const Home: NextPage = () => {
	// const { array, addTodo } = useTodo()
	// console.log(array)
	const { updateTodosDemo, clearAllTodos } = useContext(Context)

	// console.log(test)

	return (
		<div>
			<Head>
				<title>Test</title>
				<meta
					name='description'
					content='This is the description of the new project'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Test />
				<Display />
				<button onClick={() => updateTodosDemo()}>Update todos</button>
				<button onClick={() => clearAllTodos()}>Clear all Todos</button>
			</main>
		</div>
	)
}

export default Home
