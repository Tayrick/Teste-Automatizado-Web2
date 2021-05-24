package stepdefinitions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;
import pageobjects.LoginPage;

public class LoginSteps {
    WebDriver driver;

    @Dado("^que o usuario esteja na pagina do sistema$")
    public void que_o_usuario_esteja_na_pagina_do_sistema() throws Throwable {
        Hooks.abrirUrl("http://opensource-demo.orangehrmlive.com/");
        driver = Hooks.getDriver();
    }

    @Dado("^que o usuario esteja logado$")
    public void que_o_usuario_esteja_logado() throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.preencherUsuario("Admin");
        lp.preencherSenha("admin123");
        lp.clickBotaoLogin();
    }

    @Quando("^informar o campo Username como \"([^\"]*)\"$")
    public void informar_o_campo_Username_como(String arg1) throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.preencherUsuario(arg1);
    }

    @Quando("^informar o campo Password como \"([^\"]*)\"$")
    public void informar_o_campo_Password_como(String arg1) throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.preencherSenha(arg1);
    }

    @Quando("^clicar no botao Login$")
    public void clicar_no_botao_Login() throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.clickBotaoLogin();
    }

    @Entao("^o sistema devera autorizar o Login, exibindo pagina contendo o Dashborad\\.$")
    public void o_sistema_devera_autorizar_o_Login_exibindo_pagina_contendo_o_Dashborad() throws Throwable {
        LoginPage lp = new LoginPage(driver);
        lp.validarDashboard();
    }
}
