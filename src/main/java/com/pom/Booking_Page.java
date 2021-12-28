								package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Booking_Page {
	public WebDriver driver;
	@FindBy(id = "location")
	private WebElement location;
	@FindBy(name = "hotels")
	private WebElement hotel;
	@FindBy(id = "room_type")
	private WebElement roomType;
	@FindBy(id = "room_nos")
	private WebElement roomNos;
	@FindBy(name = "datepick_in")
	private WebElement checkIn;
	@FindBy(name = "datepick_out")
	private WebElement checkOut;
	@FindBy(id = "adult_room")
	private WebElement adultsNos;
	@FindBy(className = "reg_button")
	private WebElement regBtn;

	public Booking_Page(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);

	}

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getRoomNos() {
		return roomNos;
	}

	public WebElement getCheckIn() {
		return checkIn;
	}

	public WebElement getCheckOut() {
		return checkOut;
	}

	public WebElement getAdultsNos() {
		return adultsNos;
	}

	public WebElement getRegBtn() {
		return regBtn;
	}

}
