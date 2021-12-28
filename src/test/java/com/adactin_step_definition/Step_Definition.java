package com.adactin_step_definition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import com.adactin_test_runner.Test_Runner;
import com.baseclass.Base_Class;
import com.sdp.Page_Object_Manager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends Base_Class {

	public static WebDriver driver = Test_Runner.driver;
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);

	@Given("^user Launching The Application$")
	public void user_Launching_The_Application() throws Throwable {
		getUrl("https://adactinhotelapp.com/");
	}

//	@When("^user Enters The Username In The Username Field$")
//	public void user_Enters_The_Username_In_The_Username_Field() throws Throwable {
//		inputValueElement(pom.getSp().getUsernme(),"Mahesh115");
//	}
	
	@When("^user Enters The \"([^\"]*)\" In The Username Field$")
	public void user_Enters_The_In_The_Username_Field(String username) throws Throwable {
		inputValueElement(pom.getSp().getUsernme(), username);
	} 

//	@When("^user Enters The Password In the Password Field$")
//	public void user_Enters_The_Password_In_the_Password_Field() throws Throwable {
//		inputValueElement(pom.getSp().getPasswd(),"qwerty@123" );
//		
//	}
	@When("^user Enters The \"([^\"]*)\" In the Password Field$")
	public void user_Enters_The_In_the_Password_Field(String password) throws Throwable {
		inputValueElement(pom.getSp().getPasswd(), password );
	}

	@Then("^user Clicks LoginButton And It Navigates To The Search Hotel Page$")
	public void user_Clicks_LoginButton_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable {
		clickOnElement(pom.getSp().getLoginBtn());
		maxi();
		impWait(10, TimeUnit.SECONDS);

	}

//	@When("^user Select The Location$")
//	public void user_Select_The_Location() throws Throwable {
//		dropdown(pom.getBp().getLocation(), "byindex", "2");
//	}
	
	@When("^user \"([^\"]*)\" in \"([^\"]*)\" The Location$")
	public void user_in_The_Location(String a, String b) throws Throwable {
		dropdown(pom.getBp().getLocation(), a, b);
	}


	@When("^User Select The_Hotel$")
	public void user_Select_The_Hotel() throws Throwable {
		dropdown(pom.getBp().getHotel(), "byvisibletext", "Hotel Sunshine");
	}

	@When("^User Select The Roomtype$")
	public void user_Select_The_Roomtype() throws Throwable {
		dropdown(pom.getBp().getRoomType(), "byindex", "2");
	}

	@When("^User Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {
		dropdown(pom.getBp().getRoomNos(), "byindex", "2");
	}

	@When("^User Clears The Default Date And Enters The CheckIn Date$")
	public void user_Clears_The_Default_Date_And_Enters_The_CheckIn_Date() throws Throwable {
		erase(pom.getBp().getCheckIn());
		inputValueElement(pom.getBp().getCheckIn(), "12/12/21");
	}

	@When("^User Clears The Default Date And Enters The CheckOut Date$")
	public void user_Clears_The_Default_Date_And_Enters_The_CheckOut_Date() throws Throwable {
		erase(pom.getBp().getCheckOut());
		inputValueElement(pom.getBp().getCheckOut(), "15/12/21");
	}

	@When("^User Selects The Adults Per Room$")
	public void user_Selects_The_Adults_Per_Room() throws Throwable {
		dropdown(pom.getBp().getAdultsNos(), "byvalue", "2");
	}

	@When("^User Clicks On The Search Button And It Navigates To The Book Hotel Page$")
	public void user_Clicks_On_The_Search_Button_And_It_Navigates_To_The_Book_Hotel_Page() throws Throwable {
		clickOnElement(pom.getBp().getRegBtn());
		impWait(15, TimeUnit.SECONDS);
	}

	@When("^user Clicks On The Select Radio Button$")
	public void user_Clicks_On_The_Select_Radio_Button() throws Throwable {
		clickOnElement(pom.getPp().getRdioBtn());
	}

	@Then("^User Clicks On The Continue Button And It Navigates To The Book Hotel Page$")
	public void user_Clicks_On_The_Continue_Button_And_It_Navigates_To_The_Book_Hotel_Page() throws Throwable {
		clickOnElement(pom.getPp().getCntinueBtn());
		impWait(5, TimeUnit.SECONDS);
	}

	@When("^user Enters The FirstName InThe FirstName Field$")
	public void user_Enters_The_FirstName_InThe_FirstName_Field() throws Throwable {
		inputValueElement(pom.getPp().getFname(), "Mahesh");
	}

	@When("^user Enters The  LastName InThe LastName Field$")
	public void user_Enters_The_LastName_InThe_LastName_Field() throws Throwable {
		  
		inputValueElement(pom.getPp().getLname(), "Kumar");
	}

	@When("^user Enters The Billing Address InThe Billing Address Field$")
	public void user_Enters_The_Billing_Address_InThe_Billing_Address_Field() throws Throwable {
		inputValueElement(pom.getPp().getAddress(), "8 California");
	}

	@When("^user Enters The Credit Card Number InThe CreditCard Field$")
	public void user_Enters_The_Credit_Card_Number_InThe_CreditCard_Field() throws Throwable {
		inputValueElement(pom.getPp().getCcNo(),"1234567891234567");
	}

	@When("^user Selects The CreditCard Type$")
	public void user_Selects_The_CreditCard_Type() throws Throwable {
		dropdown(pom.getPp().getCcType(), "byindex", "1");

	}

	@When("^user Selects The Month InThe Expiry Month Field$")
	public void user_Selects_The_Month_InThe_Expiry_Month_Field() throws Throwable {
		dropdown(pom.getPp().getCcMonth(), "byindex", "3");
	}

	@When("^user Selects The Year InThe Expiry Year Field$")
	public void user_Selects_The_Year_InThe_Expiry_Year_Field() throws Throwable {
		dropdown(pom.getPp().getCcYear(), "byindex", "12");
	}

	@When("^user Enters The  Cvv Number InThe Cvv Number Field$")
	public void user_Enters_The_Cvv_Number_InThe_Cvv_Number_Field() throws Throwable {
		inputValueElement(pom.getPp().getCvvNo(), "12");
	}

	@When("^user Clicks OnThe Book Now Button And It Navigates To The Booking Confirmation Page$")
	public void user_Clicks_OnThe_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirmation_Page() throws Throwable {
		clickOnElement(pom.getPp().getBkNowBtn());
	}

	@Then("^user Clicks On The My Itienary Button And Navigates To The Booked Itienary Page$")
	public void user_Clicks_On_The_My_Itienary_Button_And_Navigates_To_The_Booked_Itienary_Page() throws Throwable {
		clickOnElement(pom.getPp().getBookingList());
	}

	@When("^Clicks On The OrderId$")
	public void clicks_On_The_OrderId() throws Throwable {
		clickOnElement(pom.getPp().getBtn());
	}

	@When("^user Clicks On The Cancel Selected Button And Alert Is Popped-up$")
	public void user_Clicks_On_The_Cancel_Selected_Button_And_Alert_Is_Popped_up() throws Throwable {
		clickOnElement(pom.getPp().getBtn2());
	}

	@When("^user CLicks Ok On The Alert Box And Booking Is Cancelled$")
	public void user_CLicks_Ok_On_The_Alert_Box_And_Booking_Is_Cancelled() throws Throwable {
		popUp("ok");
	}

	// @Then("^user Clicks On The Logout Button And It Navigates To The Sucessfully
	// Logged Out Page$")
	// public void
	// user_Clicks_On_The_Logout_Button_And_It_Navigates_To_The_Sucessfully_Logged_Out_Page()
	// throws Throwable {

	// }

}
