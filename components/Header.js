// components/Header.js

import Link from 'next/link'
import Navbar from './Navbar.js'

import '../css/header.css';

const Header = () => (
	<div id='header-div'>
		<div id='navbar-div'>
			<Navbar />
		</div>
	</div>
)

export default Header