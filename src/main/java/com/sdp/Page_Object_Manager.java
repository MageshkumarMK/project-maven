package com.sdp;

import org.openqa.selenium.WebDriver;

import com.pom.Booking_Page;
import com.pom.Payment_Page;
import com.pom.Signin_Page;

public class Page_Object_Manager { 
	public WebDriver driver;
	
private	Signin_Page sp;

private	Booking_Page bp;
private	Payment_Page pp;

public Page_Object_Manager(WebDriver driver2) {
	this.driver=driver2;
}
public WebDriver getDriver() {
	
	return driver;
}

public Signin_Page getSp() {
	if (sp==null) {
		sp=new Signin_Page(driver);
		
	}
	return sp;
}

public Booking_Page getBp() {
	if (bp==null) {
		bp=new Booking_Page(driver); 
	}
	return bp;
}

public Payment_Page getPp() {
	if (pp==null) {
		pp=new Payment_Page(driver);
		
	}
	return pp;
}


}
