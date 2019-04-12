// components/BaseLayout.js

import Header from './Header'
import Footer from './Footer'

import '../css/base-layout.css';

const withLayout = Page => {
	return () => (
		<div id="page-wrapper">
			<div id='base-container'>
				<Header />
				<div id='content'>
					<Page />
				</div>
				<div id='base-footer'>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default withLayout