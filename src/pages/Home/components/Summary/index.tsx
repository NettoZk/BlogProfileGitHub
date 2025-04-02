import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";


export function Summary() {

  // "https://api.github.com/users", "/lucaspedronet"
  // "https://api.github.com/search"
  // "https://api.github.com/repos/lucaspedronet/TudoLista/issues"

  return (
    <SummaryContainer>
      <img src="../src/assets/avatar.png" />
      <section>
        <SummaryHeader>
          <h1>Adeuvaldo Neto Fernandes Paiva</h1>
          <a href="#" target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>Software Engineering</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>NettoZk</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>Brasil Banco</span>
          </div>

          <div>
            <Users size={18} />
            <span>100000</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}
