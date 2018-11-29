import { Query } from "react-apollo";

import { projects as ProjectsData } from "../types/projects";

export class ProjectsQuery extends Query<ProjectsData> {}
