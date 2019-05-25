// pages/index.js
// #df4647 is the red color of the EUS

// This is the Link API
import Link from 'next/link'
// import bootstrap css for website
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import our components
import withLayout from '../components/BaseLayout.js'

const Page = () => 
	<div>
		
		<div className="container">
		<div className="row">
			<div className="col-sm-0"></div>
			<div className="col-sm-12">
					<div className="row" id="content">
						<div className="col-sm-6">
							<img src="/static/me-oldfbpp.jpg" id="portrait"></img>
						</div>
						<div className="col-sm-6">
						
							<div id="intro-div">
								<p id="intro-text">Hi, I'm Christos Cunning, a student currently studying Computer Engineering at McGill University and a passionate software developer in my spare time. Currently seeking a Summer 2019 internship. I also enjoy playing hockey, ultimate and <a id="no-link" href="https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/">video games</a> in my spare time.</p>
								
								<p id="contact-title">Contact Me:</p>
								<a href="mailto:christos.cunning@mail.mcgill.ca">christos.cunning@mail.mcgill.ca</a>
							</div>
								
						</div>
					</div>	
			</div>
			<div className="col-sm-0"></div>
		</div>
		</div>
		
		<style jsx>{`
		.container {
			width: 100%;
		}
		
		body {
			min-height: 50em;
		}
		
		#portrait {
			height: 15em;
			width: 15em;
			margin: 1em;
			border: 8px;
			border-style: double;
			border-radius: 50%;
		}
		
		#intro-text {
			font-weight: bold;
			witdth: 100%;
			text-align: left;
			font-size: 1em;
			
			
		}
		
		#intro-div {
			transform: translate(0, 25%);
		}
		
		#wide-content {
			width: 75%;
		}
		
		#no-link {
			color:inherit;
			text-decoration:none;
		}
		
		p {
			cursor:text;
		}
		`}</style>
		
	</div>

export default withLayout(Page)