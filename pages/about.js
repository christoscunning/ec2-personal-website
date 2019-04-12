// pages/about.js

// import our components
import withLayout from '../components/BaseLayout.js'

const Page = () =>
	<div>
		<p>This is the about page</p>
		<p>Can add more content but it must be within a div tag</p>
	</div>
	
export default withLayout(Page)

/*
export default function About () {
	return (
		<Layout>
			<p>This is the about page</p>
		</Layout>
	)
}
*/