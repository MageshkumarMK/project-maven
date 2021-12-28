package com.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class Configuration_Reader {
	public static Properties p;

	public Configuration_Reader() throws Throwable {

		File f = new File(
				"C:\\Users\\mahesh mk\\eclipse-workspace\\Maven_Project\\src\\main\\java\\com\\properties\\Configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);

	}

	public String getUrl() {

		String url = p.getProperty("url");
		return url;

	}

	public String getUsername() {

		String username = p.getProperty("username");
		return username;

	}

	public String getPassword() {

		String password = p.getProperty("password");
		return password;

	}

	public String getVisibleText() {
		String visibletext = p.getProperty("visibletext");
		return visibletext;
	}

	public String getIndex() {
		String index = p.getProperty("index");
		return index;

	}

	public String getValue() {
		String value = p.getProperty("value");
		return value;

	}

	public String getLocation() {
		String location = p.getProperty("location");
		return location;

	}

	public String getRoomType() {
		String roomtype = p.getProperty("RoomType");
		return roomtype;

	}

	public String get1() {
		String one = p.getProperty("1");
		return one;

	}

	public String get2() {
		String two = p.getProperty("2");
		return two;

	}

	public String get3() {
		String three = p.getProperty("3");
		return three;

	}

	public String get12() {
		String tweleve = p.getProperty("12");
		return tweleve;

	}

	public String getCheckIn() {
		String CheckIn = p.getProperty("CheckIn");
		return CheckIn;

	}

	public String getCheckOut() {
		String CheckOut = p.getProperty("CheckOut");
		return CheckOut;

	}

	public String getFname() {
		String Fname = p.getProperty("Fname");
		return Fname;

	}

	public String getLname() {
		String Lname = p.getProperty("Lname");
		return Lname;

	}

	public String getAddress() {
		String Address = p.getProperty("Address");
		return Address;

	}

	public String getCcno() {
		String ccno = p.getProperty("ccno");
		return ccno;

	}

	public String getCvvno() {
		String cvvno = p.getProperty("cvvno");
		return cvvno;

	}
}
