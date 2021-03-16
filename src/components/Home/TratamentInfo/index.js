import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Container, Content, TreatmentsBg, Description, TreatmentsBgBox } from "./styles";

function TratamentInfo() {
  const { tratamento } = useStaticQuery(graphql`
    fragment squareImage on File {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      tratamento: file(relativePath: { eq: "home/tratamentos/tratamentos3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Content>
        <TreatmentsBgBox>
          <TreatmentsBg fluid={tratamento.childImageSharp.fluid} />
        </TreatmentsBgBox>
        <Description>
          <h2>Tratamentos</h2>
          <p>
            Minha abordagem é baseada na associação da clínica médica geral à medicina chinesa
            clássica. O uso da acupuntura, das ervas medicinais (fitoterapia), da alimentação, de
            exercícios físicos e respiratórios, da meditação e da observação e correção de hábitos
            de vida fazem parte da visao global do ser humano da Medicina Tradicional Chinesa, mas
            tudo isso pode e deve ser associado à boa prática médica considerando o histórico do
            paciente, o exame físico, os exames complementares e o uso de medicações. Assim, a
            junção das duas medicinas contempla a complexidade do tratamento .
          </p>
        </Description>
      </Content>
    </Container>
  );
}

export default TratamentInfo;
