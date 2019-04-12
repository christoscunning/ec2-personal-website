// components/Navbar.js

import Link from 'next/link'

const Navbar = () => (
	<div>
		<Link href="/">
			<a className='navLink'>Home</a>
		</Link>
		<Link href="/about">
			<a className='navLink'>About</a>
		</Link>
		<Link href="/resume">
			<a className='navLink'>Resume</a>
		</Link>
		<Link href="/">
			<a className='navLink'>Projects</a>
		</Link>
		<Link href="/">
			<a className='navLink'>Blog</a>
		</Link>
	</div>
)

export default Navbar