import { Query } from "react-apollo";

import { Project } from "../types";

export class ProjectQuery extends Query<Project.Query, Project.Variables> {}
