/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projects
// ====================================================

export interface projects_projects_user {
  __typename: "User";
  id: number;
  fullName: string;
}

export interface projects_projects {
  __typename: "Project";
  id: number;
  name: string;
  createdAt: any;
  user: projects_projects_user;
}

export interface projects {
  projects: projects_projects[] | null;
}
