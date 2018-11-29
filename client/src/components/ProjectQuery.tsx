import { Query } from "react-apollo";

import {
  project as ProjectData,
  projectVariables as ProjectVariables,
} from "../types/project";

export class ProjectQuery extends Query<ProjectData, ProjectVariables> {}
