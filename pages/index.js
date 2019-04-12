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
		<h3>Christos Cunning IT Committee Application</h3>
		
		<h4>Contact Info</h4>
		<p>Name: Christos Cunning</p>
		<p>Email: <a href="mailto:christos.cunning@mail.mcgill.ca">christos.cunning@mail.mcgill.ca/</a></p>
		
		<h4>Positions of Interest</h4>
		<p>I am intersted in the positions of Webmaster, TeN Manager and Server Manager as I feel that these
		are the positions that I have experience and interest in.</p>
		
		<h4>
			What technical experience do you have that will help you succeed in the role(s) you selected?
		</h4>
		<p>
			I am a second-year computer engineering student with an interest in web development. I have experience creating and hosting websites, using HTML, CSS, and JavaScript that I have hosted using AWS. I believe this technical experience will allow me to quickly learn how the EUS system operates and how I can implement ideas to improve it. I also have experience with handling computer hardware and assembling computer components. I also created this website using Node.js and React.js!
		</p>
		
		<h4>
			What other experience or skills do you have that will help you succeed in the role(s) you selected?
		</h4>
		<p>
			Aside from technical experience, I have served as a member of the EUS Board of Governors as a Member at Large, as well as ECSESS U1 Computer Rep. Positions such as these allow me to work with others to create something greater together, something that I am excited to do with the IT Committee. A big part of the above positions is collaboration with others, something that will translate easily to any role on the IT Committee.
		</p>
		
		<h4>
			Do you have any other comments or remarks?
		</h4>
		<p>
			I am interested in joining the IT committee because I think that the mcgilleus.ca website is underutilized as a resource to the EUS, and I believe that I have valuable ideas that would help change that. For one, although the wiki holds a great wealth of, having information displayed in a more accessible way on our website could help those not has familiar with the internal workings of the EUS. Something like a quick FAQ page, (ex: What is a committee? What is council?) or a page for the Board to display completed and in progress mandates could be informative and provide insight to students of what the EUS actually does. Although the EUS also uses listservs and Facebook as forms of communication, these often can get lost in the mass amount of emails and Facebook events people get invited to. Turning the McGill EUS website into a sort of hub of information would allow students to reach out and learn more about specific parts of the society they are involved with instead of getting a list of things each week that they might be interested in. I believe that it is crucial that we expand upon it to more effectively reach members of the EUS.
		</p>
		
	</div>

export default withLayout(Page)