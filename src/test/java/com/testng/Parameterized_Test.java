package com.testng;

import org.testng.annotations.Test;
import org.testng.annotations.Parameters;

public class Parameterized_Test {

	@Test
	@Parameters({"username","password"})
	private void credentials(String username, String password) {

		System.out.println("Username  :"  +username);
		System.out.println("Password   :" +password);
	}

}
