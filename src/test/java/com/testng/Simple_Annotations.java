package com.testng;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Simple_Annotations {

	@Test(invocationCount = 5)
	private void button1() {
System.out.println("first button deployed");
	}
	@AfterMethod
	private void logout() {
System.out.println("logged-out");
	}
	@BeforeMethod
	private void log_In() {
System.out.println("logged-in");
	}
	@Test
	private void button2() {
System.out.println("second button deloyed");
	}
	@Test
	private void button3() {
System.out.println("third button deployed");
	}
	
	
}
