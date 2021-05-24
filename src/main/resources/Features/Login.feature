#language: pt
@Login @End2End
  Funcionalidade: Login

    Contexto:
      Dado que o usuario esteja na pagina do sistema

    @RealizarLogin @SmokeTest
    Esquema do Cenario: Realizar Login com Sucesso
      Quando informar o campo Username como "<usuario>"
      E informar o campo Password como "<senha>"
      E clicar no botao Login
      Entao o sistema devera autorizar o Login, exibindo pagina contendo o Dashborad.

      Exemplos:
      | usuario | senha |
      | Admin | admin123 |

