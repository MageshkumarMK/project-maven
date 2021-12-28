package com.maven;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import com.baseclass.Base_Class;
import com.helper.File_Reader_Manager;
import com.pom.Booking_Page;
import com.pom.Payment_Page;
import com.pom.Signin_Page;

public class Runner_Class extends Base_Class {
	public static WebDriver driver=Base_Class.getBrowser("chrome"); 
	public static Signin_Page a=new Signin_Page(driver);
	public static Booking_Page b=new Booking_Page(driver);
	public static Payment_Page c=new Payment_Page(driver);
	
static Logger log = Logger.getLogger(Runner_Class.class);
	public static void main(String[] args) throws Throwable {
		PropertyConfigurator.configure("log4j.properties");

	 String url = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUrl();
		getUrl(url);
		//signin_page
		log.info("singin started info");
		String username = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUsername();
		inputValueElement(a.getUsernme(),username);
		String password = File_Reader_Manager.getInstanceFRM().getInstanceCR().getPassword();
		inputValueElement(a.getPasswd(), password);
		clickOnElement(a.getLoginBtn());
		maxi();
		impWait(5, TimeUnit.SECONDS);
		//booking_page
		log.info("booking started info");
		String visibleText = File_Reader_Manager.getInstanceFRM().getInstanceCR().getVisibleText();
		String location = File_Reader_Manager.getInstanceFRM().getInstanceCR().getLocation();
		dropdown(b.getLocation(),visibleText , location);
		String index = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIndex();
		String get1 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get1();
		String get2 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get2();
		dropdown(b.getHotel(), index, get2);
		String value = File_Reader_Manager.getInstanceFRM().getInstanceCR().getValue();
		String roomType = File_Reader_Manager.getInstanceFRM().getInstanceCR().getRoomType();
		dropdown(b.getRoomType(), value, roomType);
		
		dropdown(b.getRoomNos(), index, get2);
		erase(b.getCheckIn());
		String checkIn = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCheckIn();
		inputValueElement(b.getCheckIn(), checkIn);
		erase(b.getCheckOut());
		String checkOut = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCheckOut();
 		inputValueElement(b.getCheckOut(), checkOut);
		dropdown(b.getAdultsNos(), index, get2);
		clickOnElement(b.getRegBtn());
		
		   impWait(15, TimeUnit.SECONDS);
		   log.info("payment initiated info");
		   //payment_page
		clickOnElement(c.getRdioBtn());
		clickOnElement(c.getCntinueBtn());
		String fname = File_Reader_Manager.getInstanceFRM().getInstanceCR().getFname();
		inputValueElement(c.getFname(), fname);
		String lname = File_Reader_Manager.getInstanceFRM().getInstanceCR().getLname();
		inputValueElement(c.getLname(), lname);
		String address = File_Reader_Manager.getInstanceFRM().getInstanceCR().getAddress();
		inputValueElement(c.getAddress(),address);
		String ccno = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCcno();
		inputValueElement(c.getCcNo(), ccno);

		dropdown(c.getCcType(), index, get1);
		String get3 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get3();
		dropdown(c.getCcMonth(), index, get3);
		String get12 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get12();
		dropdown(c.getCcYear(), index, get12);
		String cvvno = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCvvno();
		inputValueElement(c.getCvvNo(), cvvno);
		clickOnElement(c.getBkNowBtn());
		clickOnElement(c.getBookingList());
		clickOnElement(c.getBtn());
		clickOnElement(c.getBtn2());
		popUp("ok");
		

	}

}		

		
