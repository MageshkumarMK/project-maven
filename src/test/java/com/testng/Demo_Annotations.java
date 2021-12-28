package com.testng;
import org.testng.annotations.Test;

public class Demo_Annotations {
	
	@Test
	private void flipkart() {
		System.out.println("flipkart");

	}
	
	@Test(enabled= false)
	
	private void amazon() {
		System.out.println("amazon");

	}
	
	@Test(priority=-1)
	private void myntra() {
		System.out.println("myntra");

	}
	
	@Test
	private void primeVideo() {
		System.out.println("primevideo");

	}
	@Test
	private void netFlix() {
		System.out.println("netflix");

	}
	@Test
	private void zee5() {
		System.out.println("zee5");
		

	}
	@Test(priority=1)
	private void disneyHotstar() {
		System.out.println("disneyhostar");

	}
	@Test	(priority=2)
	private void youtube() {
		System.out.println("youtube");

	}
	
	
	
	
	
	

}
