package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Payment_Page {
	public WebDriver driver;
	@FindBy(id="radiobutton_0")
	private WebElement rdioBtn;
	@FindBy(id="continue")
	private WebElement cntinueBtn;
	@FindBy(xpath="//*[@id=\"first_name\"]")
	private WebElement fname;
	@FindBy(xpath="//*[@id=\"last_name\"]")
	private WebElement lname;
	@FindBy(xpath="/html/body/table[2]/tbody/tr[2]/td/form/table/tbody/tr[14]/td[2]/textarea")
	private WebElement address;
	@FindBy(css="#cc_num")
	private WebElement ccNo;
	
	@FindBy(id="cc_type")
	private WebElement ccType;
	@FindBy(id="cc_exp_month")
	private WebElement ccMonth;
	@FindBy(id="cc_exp_year")
	private WebElement ccYear;
	@FindBy(id="cc_cvv")
	private WebElement cvvNo;
	@FindBy(id="book_now")
	private WebElement bkNowBtn;
	@FindBy(id="my_itinerary")
	private WebElement bookingList;
	@FindBy(xpath="//*[@id=\"booked_form\"]/table/tbody/tr[2]/td/table/tbody/tr[6]/td[1]")
	private WebElement btn;
	@FindBy(css="#booked_form > table > tbody > tr:nth-child(3) > td > input:nth-child(1)")
	private WebElement btn2;
	
public Payment_Page(WebDriver driver2) {
this.driver=driver2;
PageFactory.initElements(driver, this);
}

public WebDriver getDriver() {
	return driver;
}

public WebElement getRdioBtn() {
	return rdioBtn;
}

public WebElement getCntinueBtn() {
	return cntinueBtn;
}

public WebElement getFname() {
	return fname;
}

public WebElement getLname() {
	return lname;
}

public WebElement getAddress() {
	return address;
}

public WebElement getCcNo() {
	return ccNo;
}

public WebElement getCcType() {
	return ccType;
}

public WebElement getCcMonth() {
	return ccMonth;
}

public WebElement getCcYear() {
	return ccYear;
}

public WebElement getCvvNo() {
	return cvvNo;
}

public WebElement getBkNowBtn() {
	return bkNowBtn;
}

public WebElement getBookingList() {
	return bookingList;
}

public WebElement getBtn() {
	return btn;
}

public WebElement getBtn2() {
	return btn2;
}

}
