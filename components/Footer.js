// components/Footer.js

// This is the Link API
import Link from 'next/link'
// import bootstrap css for website
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css';

const Footer = () => (
	<div id="footer">
		<div className="row" style={{paddingTop:20 }}>
			<div className="col-sm-3"></div>
			<div className="col-sm-3">
				<p className="footertext">Website created by Christos Cunning</p>
			</div>
			<div className="col-sm-3">
			{/* add cool little external link buttons */}
				<div className="row">
					<div className="col-sm-2"></div>
					<div className="col-sm-2">
						<Link href="http://www.github.com/christoscunning">
							<a>
								<img src='/static/github-favicon.jpg' className="footerCircleLink"/>
							</a>
						</Link>
					</div>
					<div className="col-sm-2">
						<Link href="http://www.linkedin.com/in/christoscunning">
							<a>
								<img src='/static/linkedin-favicon.png' className="footerCircleLink"/>
							</a>
						</Link>
					</div>
					<div className="col-sm-2">
						<Link href="https://twitter.com/christoscunn">
							<a>
								<img src='/static/twitter-favicon.png' className="footerCircleLink"/>
							</a>
						</Link>
					</div>
					<div className="col-sm-2">
					{/* Can add another link here later if I want */}
					</div>
					<div className="col-sm-2"></div>
				</div>
			</div>			
			<div className="col-sm-3"></div>
		</div>
		
	</div>
)

export default Footer