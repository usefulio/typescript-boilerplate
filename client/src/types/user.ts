/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: user
// ====================================================

export interface user_user_organization {
  __typename: "Organization";
  name: string;
}

export interface user_user {
  __typename: "User";
  fullName: string;
  organization: user_user_organization;
}

export interface user {
  user: user_user | null;
}
