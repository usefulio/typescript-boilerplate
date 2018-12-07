// ====================================================
// Documents
// ====================================================

export namespace Project {
  export type Variables = {
    id: number;
  };

  export type Query = {
    __typename?: "Query";

    project: Project | null;
  };

  export type Project = {
    __typename?: "Project";

    id: number;

    name: string;

    createdAt: DateTime;

    user: User;
  };

  export type User = {
    __typename?: "User";

    id: number;

    fullName: string;
  };
}

export namespace Projects {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    projects: Projects[] | null;
  };

  export type Projects = {
    __typename?: "Project";

    id: number;

    name: string;

    createdAt: DateTime;

    user: User;
  };

  export type User = {
    __typename?: "User";

    id: number;

    fullName: string;
  };
}

export namespace Session {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    session: Session | null;
  };

  export type Session = {
    __typename?: "Session";

    a: string;

    b: string;

    c: string;
  };
}

export namespace SetSessionVariable {
  export type Variables = {
    name: string;
    value: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    setSessionVariable: string | null;
  };
}

export namespace SignIn {
  export type Variables = {
    email: string;
    password: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    token: string | null;
  };
}

export namespace User {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    user: User | null;
  };

  export type User = {
    __typename?: "User";

    fullName: string;

    organization: Organization;
  };

  export type Organization = {
    __typename?: "Organization";

    name: string;
  };
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;
