import { useState, useRef } from 'react'

import './App.css'
import { puppyList } from './data/data'

function App() {
	const [puppies, setPuppies] = useState(puppyList)

	const puppyRef = useRef(false)

	return (
		<>
			<h1>Puppy List</h1>
			<ul className='puppyList'>
				{puppies.map((puppy) => (
					<li key={puppy.id} className='card'>
						<p>Puppy Name: {puppy.name}</p>
						<div
							style={
								puppyRef.current === puppy.id
									? { display: 'block' }
									: { display: 'none' }
							}>
							<p>Puppy Email: {puppy.email}</p>
							<p>Puppy Age: {puppy.age}</p>
							<p>{puppy.tricks <= 1 ? 'Trick' : 'Tricks'}</p>
							<ul>
								{puppy.tricks.map((trick) => (
									<li key={trick.id}>{trick.title}</li>
								))}
							</ul>
						</div>
						<button
							onClick={() => {
								// display the puppy info if the button is clicked and hide the puppy info if the button is clicked again
								puppyRef.current =
									puppyRef.current === puppy.id ? false : puppy.id
								setPuppies([...puppies])
							}}>
							{puppyRef.current === puppy.id ? 'Hide info' : 'Show more info'}
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default App
