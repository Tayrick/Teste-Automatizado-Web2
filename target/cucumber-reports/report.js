$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Admin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Admin",
  "description": "",
  "id": "admin",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Admin"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"\u003cusuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"\u003cperfil\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"\u003cnomeFuncionario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"\u003csituacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "admin;pesquisar-usuario;",
  "rows": [
    {
      "cells": [
        "usuario",
        "perfil",
        "nomeFuncionario",
        "situacao"
      ],
      "line": 20,
      "id": "admin;pesquisar-usuario;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "Christine Tarabay",
        "Enabled"
      ],
      "line": 21,
      "id": "admin;pesquisar-usuario;;2"
    },
    {
      "cells": [
        "Alice.Duval",
        "ESS",
        "Alice Duval",
        "Enabled"
      ],
      "line": 22,
      "id": "admin;pesquisar-usuario;;3"
    },
    {
      "cells": [
        "Joe.Root",
        "ESS",
        "Joe Root",
        "Enabled"
      ],
      "line": 23,
      "id": "admin;pesquisar-usuario;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 4084285200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_do_sistema()"
});
formatter.result({
  "duration": 3290960800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 3884761400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"Admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Christine Tarabay\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1503496000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 1048895900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 353549200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Christine Tarabay",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 283996800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 337957700,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 735245200,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 225757300,
  "status": "passed"
});
formatter.after({
  "duration": 766654800,
  "status": "passed"
});
formatter.before({
  "duration": 1705696100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_do_sistema()"
});
formatter.result({
  "duration": 2619448300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 3565882000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Alice.Duval\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Alice Duval\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1514658900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice.Duval",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 997938400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 386943200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice Duval",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 235577200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 302633900,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 702906800,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 236840900,
  "status": "passed"
});
formatter.after({
  "duration": 738004600,
  "status": "passed"
});
formatter.before({
  "duration": 1629836000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_do_sistema()"
});
formatter.result({
  "duration": 2613385600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 3459418000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Joe.Root\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Joe Root\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1412108300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe.Root",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 239413900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 1032571700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe Root",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 258271900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 270058500,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 664142600,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 259699100,
  "status": "passed"
});
formatter.after({
  "duration": 1162866800,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o Login, exibindo pagina contendo o Dashborad.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1600336900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_do_sistema()"
});
formatter.result({
  "duration": 2673292900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o Login, exibindo pagina contendo o Dashborad.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 205141900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 287994000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 3231229700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_Login_exibindo_pagina_contendo_o_Dashborad()"
});
formatter.result({
  "duration": 116246000,
  "status": "passed"
});
formatter.after({
  "duration": 746506500,
  "status": "passed"
});
});