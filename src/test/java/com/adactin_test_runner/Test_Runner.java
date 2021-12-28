package com.adactin_test_runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.baseclass.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		
		
features = "src\\test\\java\\com\\adactin_feature_file",
glue = "com.adactin_step_definition",
monochrome = true,


plugin = {
		
		"html:Report/HtmlReport",
		"json:Report/jsonReport.json",
		"pretty"
}
		
		
	)

 

public class Test_Runner {
	public static WebDriver driver;
	
	@BeforeClass
	public static void Set_Up() {
driver= Base_Class.getBrowser("chrome");
		
		
	}
@AfterClass
public static void Tear_Down() {
	//driver.close();
	
	
}
	
	
	
}
