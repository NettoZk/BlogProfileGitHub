import { useEffect, useState } from "react";
import axios from "axios";
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside } from "./styles";
import { Issues } from "./components/Issues";

// Definição do tipo para as issues
interface Issue {
  id: number;
  number: number;
  title: string;
  body: string | null;
  created_at: string;
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await axios.get(
          "https://api.github.com/search/issues?q=repo:lucaspedronet/BlogProfileGitHub"
        );
        setIssues(response.data.items);
      } catch (error) {
        console.error("Erro ao buscar issues:", error);
      }
    }

    fetchIssues();
  }, []);

  return (
    <HomeContainer>
      <Summary />
      <br />
      <IssuesAside>
        {issues.map((issue) => (
          <Issues key={issue.id} issue={issue} />
        ))}
      </IssuesAside>
    </HomeContainer>
  );
}
