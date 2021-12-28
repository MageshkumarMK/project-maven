package com.testng;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class Data_Provider {
	@Test(dataProvider="data")
	private void credentials(String username, int password) {
		System.out.println("username :"+username);
		System.out.println("password :"+password);
	}


@DataProvider
private Object[][] data(){
	return new Object[][] {
		{"harvey",4567},
		{"mike",9876},
		{"jessica", 987}
		
	};

}
}