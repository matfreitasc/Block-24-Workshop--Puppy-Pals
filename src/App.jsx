import { useState } from 'react'

import './App.css'
import { puppyList } from './data/data'
import puppyCursor from '/dog-face-color-icon.svg'

export default function App() {
	const [puppies, setPuppies] = useState(puppyList)
	const [featPupId, setFeatPupId] = useState(null)
	const featuredPup = puppies.find((pup) => pup.id === featPupId)

	return (
		<div className='App'>
			<h1>Puppy List</h1>
			{featPupId && (
				<div className='featuredPuppy'>
					<h2>Featured Puppy</h2>
					<hr />
					<h3>{featuredPup.name}</h3>
					<ul>
						<li>Age: {featuredPup.age}</li>
						<li>Email: {featuredPup.email}</li>
					</ul>
				</div>
			)}
			<hr />
			{puppies.map((puppy) => {
				return (
					<p
						onClick={() => {
							setFeatPupId(puppy.id)
						}}
						key={puppy.id}
						style={{ cursor: 'url(' + puppyCursor + '), auto' }}>
						{puppy.name}
					</p>
				)
			})}
		</div>
	)
}
