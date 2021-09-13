# Especificações do Projeto

Com o aumento da busca de conteúdos relacionados a Educação Financeira e a grande quantidade e variedade de conteúdo sobre o tema que é possível encontrar através de buscas pela internet, a nossa aplicação web surge com a ideia de organizar essa variedade de conteúdo, afim de que um usuário iniciante, em Educação Financeira, possa ter uma maior facilidade em saber que tipo de conteúdo consumir para que possa ser despertado o interesse sobre esse assunto.

Com isso, pretendemos mostrar os conteúdos que são mais relevantes e importantes inicialmente, apresentar os cursos gratuitos que estão disponíveis e divulgar vídeos, materiais e redes sociais de influenciadores que são relevantes sobre o tema.

<!--
Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto. -->

## Personas

Nathalia tem 19 anos, é universitária estudante de engenharia. Pensa que além de crescimento profissional precisa buscar meios de encontrar estabilidade financeira e sente que é necessário procurar conteúdos relacionados à este assunto. Vê que sua família nunca buscou este tipo de educação e por isso nunca conseguiu administrar de maneira adequada as próprias finanças. Ouve de pessoas próximas que o assunto de finanças é confuso e complicado demais para entender e aplicar na prática. Preocupada com seu futuro e sem pessoas próximas especializadas no assunto, Nathália busca referências na internet sobre educação financeira.

<!-- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja. -->

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Acessar conteúdos de finanças      | Aprender mais sobre o assunto          |
|Usuário do sistema  | Escolher a plataforma de acesso ao conteúdo                    | Ter mais comodidade                                     |
|Usuário do sistema  | Ter disponível acesso a conteúdos a qualquer momento           | Ter liberdade em escolher quando será o acesso          |
|Usuário do sistema  | Poder avaliar se gostei ou não de um determinado conteúdo      | Passar feedback ao conteúdo disponibilizado             |
|Usuário do sistema  | Escolher o conteúdo do qual mais me identifico                 | Obter novos conhecimentos                               |
|Usuário do sistema  | Poder ter a acesso a bons conteúdos de diferentes e confiáveis fontes sobre educação financeira                          |                                 Ter uma vida financeira saudável e poder compartilhar novos conhecimentos com outras pessoas                                                    |
|Administrador       | Disponibilizar acesso aos usuários 24 horas por dia                 | Acessarem os conteúdos disponibilizados no sistema |
|Administrador       | Disponibilizar conteúdos diversificados sobre educação financeira   | Usuários leigos em busca de novos conhecimentos    |

<!-- Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/) -->

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário seja conduzido para o software adequado a partir das informações desejadas. |ALTA |
|RF-002| Disponibilizar abas para que o usuário possa navegar, ler sínteses e fazer uma tomada de decisão sobre qual informação almeja obter.  | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|--
|RNF-001| O sistema deve ter suporte para rodar em dispositivos iOS e Android. | MÉDIA | 
|RNF-002| As requisições do usuário devem ser processadas em até 5 segundos.|  BAIXA |
|RNF-003| O FinHub deve estar disponível 24  horas por dia para todos os usuários. |  BAIXA |
|RNF-004| O sistema não armazenará nenhuma informação pessoal dos usuários.|  BAIXA |
|RNF-005| As normas éticas, morais e  legais, tais como a LEI Nº 9.610, de 1998 e a LEI Nº 13.709, de 2018 devem ser respeitadas integralmente pelo sistema. |  BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                             |
|--|---------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre                                 |
|02| O projeto contemplará apenas conteúdos relacionados ao mundo das finanças             |
|03| Os cursos que estarão no projeto devem ser gratuitos                                  |
|04| Todos cursos e demais materiais de apoio do projeto devem partir de fontes confiáveis |
|05| A equipe não irá desenvolver nenhum material educativo                                |
