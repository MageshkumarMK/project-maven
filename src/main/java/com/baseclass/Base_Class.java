package com.baseclass;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class Base_Class {
	public static WebDriver driver; // null

	public static WebDriver getBrowser(String type) {
		if (type.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "//Driver//chromedriver.exe");
			driver = new ChromeDriver();
		} else if (type.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "//geckoDriver.exe");
			driver = new FirefoxDriver();

		}
		return driver;

	}

	public static void clickOnElement(WebElement element) {
		element.click();

	}

	public static void inputValueElement(WebElement element, String value) {
		element.sendKeys(value);

	}

	public static void getUrl(String url) {
		driver.get(url);

	}

	public static void close() {
		driver.close();

	}

	public static void quit() {
		driver.quit();

	}
	public static void maxi() {
		driver.manage().window().maximize();

	}
	public static void impWait(int time,TimeUnit unit) {
		driver.manage().timeouts().implicitlyWait(time, unit);
		

	}
public static void erase(WebElement element) {
	element.clear();
	

}

public static void dropdown(WebElement element, String type, String value) {
	Select s = new Select(element);
	if (type.equalsIgnoreCase("byValue")) {
		s.selectByValue(value);
		
	}
	else if (type.equalsIgnoreCase("byVisibleText")) {
		s.selectByVisibleText(value);
		
		
		
	}
	else if (type.equalsIgnoreCase("byIndex")) {
		int data=Integer.parseInt(value);
		s.selectByIndex(data);
		
	}
	

}
public static void popUp(String type) {
	Alert a= driver.switchTo().alert();
	if (type.equalsIgnoreCase("ok")) {
		a.accept();
		
	}else if (type.equalsIgnoreCase("cancel")) {
		a.dismiss();
		
	}

}
}
