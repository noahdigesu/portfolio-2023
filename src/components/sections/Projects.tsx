import "./Projects.scss";

import Project from "../cards/Project";
import Filter from "../buttons/Filter";

function Projects() {
	return (
		<div className="section-projects" id="work">
			<div className="top">
				<h2 className="title-section">Work</h2>
				<div className="filters">
					<Filter text="Design 🎨" active={true} />
					<Filter text="Code 👨‍💻" active={false} />
					<Filter text="Articles 🗞" active={false} />
				</div>
			</div>

			<div className="projects">
				<Project
					name="Smoothey Signup"
					year={2023}
					background_color="#3D396D"
					image="smoothey_sign_up"
					scheme="light"
					url=""
				/>
				<Project
					name="Testing dashboard"
					year={2022}
					background_color="#F4FAFF"
					image="testing_dashboard"
					scheme="dark"
					url=""
				/>
			</div>
		</div>
	);
}

export default Projects;
