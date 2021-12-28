package com.maven;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import com.baseclass.Base_Class;
import com.helper.File_Reader_Manager;
import com.sdp.Page_Object_Manager;

public class Runner_ClassTestNG extends Base_Class {
	public static WebDriver driver = Base_Class.getBrowser("chrome");
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);

	static Logger log = Logger.getLogger(Runner_ClassTestNG.class);

	@Test(priority = 0) 
	private void logger() {

		PropertyConfigurator.configure("log4j.properties");
	}
	String[] data= {"http://adactinhotelapp.com/"};
	
	@DataProvider(name="URL")
	private String[] data() {
		return data;
		

	}

	@Test(priority = 1,dataProvider = "URL")
	private void url(String url) throws Throwable {
		//String url = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUrl();
		getUrl(url);
		// signin_page

	}

	@Test(priority = 2)
	@Parameters({"username","password"})
	private void login(String name,String pwrd ) throws Throwable {
		log.info("singin started info");
		//String username = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUsername();
		inputValueElement(pom.getSp().getUsernme(), name);
		//String password = File_Reader_Manager.getInstanceFRM().getInstanceCR().getPassword();
		inputValueElement(pom.getSp().getPasswd(), pwrd);
		clickOnElement(pom.getSp().getLoginBtn());
		maxi();
		impWait(5, TimeUnit.SECONDS);
	}

	// booking_page
	@Test(priority = 3)
	private void booking_Page() throws Throwable {
		log.info("booking started info");
		String visibleText = File_Reader_Manager.getInstanceFRM().getInstanceCR().getVisibleText();
		String location = File_Reader_Manager.getInstanceFRM().getInstanceCR().getLocation();
		dropdown(pom.getBp().getLocation(), visibleText, location);
		String index = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIndex();

		String get2 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get2();
		dropdown(pom.getBp().getHotel(), index, get2);
		String value = File_Reader_Manager.getInstanceFRM().getInstanceCR().getValue();
		String roomType = File_Reader_Manager.getInstanceFRM().getInstanceCR().getRoomType();
		dropdown(pom.getBp().getRoomType(), value, roomType);

		dropdown(pom.getBp().getRoomNos(), index, get2);
		erase(pom.getBp().getCheckIn());
		String checkIn = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCheckIn();
		inputValueElement(pom.getBp().getCheckIn(), checkIn);
		erase(pom.getBp().getCheckOut());
		String checkOut = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCheckOut();
		inputValueElement(pom.getBp().getCheckOut(), checkOut);
		dropdown(pom.getBp().getAdultsNos(), index, get2);
		clickOnElement(pom.getBp().getRegBtn());

		impWait(15, TimeUnit.SECONDS);
		log.info("payment initiated info");
	}

	// payment_page
	
	@Test(priority = 4)
	private void payment_Page() throws Throwable {

		String index = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIndex();
		clickOnElement(pom.getPp().getRdioBtn());
		clickOnElement(pom.getPp().getCntinueBtn());
		String fname = File_Reader_Manager.getInstanceFRM().getInstanceCR().getFname();
		inputValueElement(pom.getPp().getFname(), fname);
		String lname = File_Reader_Manager.getInstanceFRM().getInstanceCR().getLname();
		inputValueElement(pom.getPp().getLname(), lname);
		String address = File_Reader_Manager.getInstanceFRM().getInstanceCR().getAddress();
		inputValueElement(pom.getPp().getAddress(), address);
		String ccno = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCcno();
		inputValueElement(pom.getPp().getCcNo(), ccno);
		String get1 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get1();
		dropdown(pom.getPp().getCcType(), index, get1);
		String get3 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get3();
		dropdown(pom.getPp().getCcMonth(), index, get3);
		String get12 = File_Reader_Manager.getInstanceFRM().getInstanceCR().get12();
		dropdown(pom.getPp().getCcYear(), index, get12);
		String cvvno = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCvvno();
		inputValueElement(pom.getPp().getCvvNo(), cvvno);
		clickOnElement(pom.getPp().getBkNowBtn());
		clickOnElement(pom.getPp().getBookingList());
		clickOnElement(pom.getPp().getBtn());
		clickOnElement(pom.getPp().getBtn2());
		popUp("ok");

	}

}
