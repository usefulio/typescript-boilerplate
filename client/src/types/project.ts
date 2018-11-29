/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface project_project_user {
  __typename: "User";
  id: number;
  fullName: string;
}

export interface project_project {
  __typename: "Project";
  id: number;
  name: string;
  createdAt: any;
  user: project_project_user;
}

export interface project {
  project: project_project | null;
}

export interface projectVariables {
  id: number;
}
