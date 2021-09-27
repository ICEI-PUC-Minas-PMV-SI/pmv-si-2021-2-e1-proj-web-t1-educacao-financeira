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
|Usuário do sistema  | Indicações de Cursos de finanças         | Obter novos conhecimentos             |
|Usuário do sistema  | Indicações de Podcasts de finanças         | Obter novos conhecimentos             |
|Usuário do sistema  | Indicações de Livros de finanças         | Obter novos conhecimentos             |
|Usuário do sistema  | Ter acesso a Vídeos de finanças          | Obter novos conhecimentos             |
|Usuário do sistema  | Indicações de Planilhas de finanças      | Auxiliar na gestão financeira         |
|Usuário do sistema  | Indicações de App's de finanças          | Auxiliar na gestão financeira         |
|Usuário do sistema  | Comentar sobre os conteúdos              | Interagir com outros usuários da plataforma                                                               |
|Usuário do sistema  | Ter acesso aos principais influenciadores                                        | Aprender mais sobre o assunto                                     |
|Usuário do sistema  | Poder avaliar se gostei ou não de um determinado conteúdo                        | Passar feedback ao conteúdo disponibilizado                       |
|Administrador       | Disponibilizar conteúdos diversificados sobre educação financeira                | Usuários leigos em busca de novos conhecimentos                   |
|Administrador       | Ordenar conteúdos de acordo com a popularidade                                   | Priorizar a exibição dos conteúdos com maior quantidade de likes  |

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
|RF-001| O sistema deve listar Cursos tangentes à educação financeira. | ALTA |
|RF-002| O sistema deve listar Podcasts  com conteúdo relacionado à educação financeira.  | ALTA |
|RF-003| O sistema deve listar acervo com indicações de livros relacionados à educação financeira. | ALTA 
|RF-004| O sistema deve disponibilizar indicações de vídeos acerca do conteúdo de finanças. | ALTA |
|RF-005| O sistema deve disponibilizar um campo para o usuário registrar comentários sobre os conteúdos da plataforma. | ALTA |
|RF-006| O sistema deve listar os principais influenciadores digitais que ministram conteúdo de educação financeira. | ALTA |
|RF-007| O sistema deve oferecer a ferramenta “like” para o usuário fazer avaliação dos conteúdos disponibilizados na plataforma.| ALTA |
|RF-008| O sistema deve permitir, a partir do registro de comentários, o usuário interagir com outros usuários da plataforma. | MÉDIA |
|RF-009| O software dever permitir o administrador organizar os conteúdos de finanças de acordo com o índice de popularidade, interesse e avaliação. | BAIXA |
|RF-010| O sistema deve listar os principais App´s utilizados para a obtenção de conhecimento, gestão e controle de finanças. | BAIXA |
|RF-011| O usuário deve ser capaz de visualizar e acessar sugestões de planilhas de gestão financeira. | BAIXA |
|RF-012| O usuário deve ser capaz de pesquisar os cursos de educação financeira a partir da palavra-chave desejada. | BAIXA |
|RF-013| 
|RF-005|
|RF-011| 

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
|03| Todos cursos e demais materiais de apoio do projeto devem partir de fontes confiáveis |
|04| A equipe não irá desenvolver nenhum material educativo                                |
