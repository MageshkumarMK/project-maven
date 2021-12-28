package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Signin_Page {
	public WebDriver driver;
	public Signin_Page(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver,this);
		
	}
@FindBy(id="username")
private WebElement usernme;

@FindBy(name ="password")
private WebElement passwd;
@FindBy(className  ="login_button")
private WebElement loginBtn;

public WebDriver getDriver() {
	return driver;
}
public WebElement getUsernme() {
	return usernme;
}
public WebElement getPasswd() {
	return passwd;
}
public WebElement getLoginBtn() {
	return loginBtn;
}

}
 