export interface GithubDataRepositoriesNode {
  node: {
    name: string;
    url: string;
    description: string;
    primaryLanguage: {
      name: string;
      color: string;
    };
  };
}

interface GithubDataRepositories {
  edges: GithubDataRepositoriesNode[];
}

export interface GithubDataQuery {
  githubData: {
    data: {
      user: {
        repositories: GithubDataRepositories;
      };
    };
  };
}
