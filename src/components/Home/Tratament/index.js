import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";

import { Container, Tratamento, TratamentoImg, TratamentoInfo } from "./styles";

function Tratament() {
  const { acupuntura, infertilidade, meditacao, menteCorpo } = useStaticQuery(graphql`
    fragment testeImg on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      acupuntura: file(relativePath: { eq: "home/tratamentos/acupuntura.png" }) {
        ...testeImg
      }
      infertilidade: file(relativePath: { eq: "home/tratamentos/infertilidade.png" }) {
        ...testeImg
      }
      meditacao: file(relativePath: { eq: "home/tratamentos/meditacao.png" }) {
        ...testeImg
      }
      menteCorpo: file(relativePath: { eq: "home/tratamentos/mente-e-corpo.png" }) {
        ...testeImg
      }
    }
  `);
  return (
    <Container>
      <Tratamento side="right" type="acupuntura">
        <TratamentoImg fluid={acupuntura.childImageSharp.fluid} />
        <TratamentoInfo>
          <h3>Acupuntura</h3>
          <p>
            A acupuntura é uma modalidade terapêutica que engloba, através da colocação de agulhas
            em diferentes partes do corpo, o tratamento e a prevenção de doenças e a promoção da
            saúde.
          </p>
          <Link to="/acupuntura">
            <span>Leia mais</span>
          </Link>
        </TratamentoInfo>
      </Tratamento>
      <Tratamento side="left" type="infertilidade">
        <TratamentoImg fluid={infertilidade.childImageSharp.fluid} />
        <TratamentoInfo>
          <h3>Infertilidade</h3>
          <p>
            A infertilidade é um problema que pode acometer até 25% dos casais em algum momento do
            seu relacionamento. Um problema desta magnitude requer atenção especial e várias
            alternativas de tratamento.
          </p>
          <Link to="/infertilidade">
            <span>Leia mais</span>
          </Link>
        </TratamentoInfo>
      </Tratamento>
      <Tratamento side="right" type="meditacao">
        <TratamentoImg fluid={meditacao.childImageSharp.fluid} />
        <TratamentoInfo>
          <h3>Meditação</h3>
          <p>
            A meditação é hoje uma das melhores formas de trazer o paciente como ser ativo e central
            do seu processo de cura e recuperação de doenças e desequilíbrios da mente e do corpo.
          </p>
          <Link to="/meditacao">
            <span>Leia mais</span>
          </Link>
        </TratamentoInfo>
      </Tratamento>
      <Tratamento side="left" type="menteCorpo">
        <TratamentoImg fluid={menteCorpo.childImageSharp.fluid} />
        <TratamentoInfo>
          <h3>Mente e Corpo</h3>
          <p>
            A ligação entre mente e corpo ou, até mesmo, a unidade funcional mente-corpo é objeto de
            grande interesse nos dias de hoje. Existem fortes evidências, por exemplo, de que
            fatores de estresse podem contribuir para o surgimento de doenças do coração ou do
            aparelho digestivo.
          </p>
          <Link to="/mente-e-corpo">
            <span>Leia mais</span>
          </Link>
        </TratamentoInfo>
      </Tratamento>
    </Container>
  );
}

export default Tratament;
