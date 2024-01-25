import { useState } from 'react'

import './App.css'
import { puppyList } from './data/data'

function App() {
	const [puppies, setPuppies] = useState(puppyList)

	return (
		<>
			<h1>Puppy List</h1>
			<ul>
				{puppies.map((puppy) => (
					<li key={puppy.id}>{puppy.name}</li>
				))}
			</ul>
		</>
	)
}

export default App
