import { IssuesContainer, StyledNavLink } from "./styles";

// Definição do tipo para as issues
interface IssueProps {
  issue: {
    id: number;
    number: number;
    title: string;
    body: string | null;
    created_at: string;
  };
}

export function Issues({ issue }: IssueProps) {
  return (
    <IssuesContainer>
      <StyledNavLink to={`/issue/${issue.number}`}>
        <div>
          <h2>{issue.title}</h2>
          <span>{new Date(issue.created_at).toLocaleDateString()}</span>
        </div>
        <p>{issue.body || "Sem descrição"}</p>
      </StyledNavLink>
    </IssuesContainer>
  );
}
