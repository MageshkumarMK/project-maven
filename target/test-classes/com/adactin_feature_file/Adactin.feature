Feature: Hotel booking in Adactin application.

Scenario Outline: Login page
Given user Launching The Application
When user Enters The "<sername>" In The Username Field
And user Enters The "<assword>" In the Password Field
Then user Clicks LoginButton And It Navigates To The Search Hotel Page 

Examples:
|sername||assword|
|sp@gmail.com||454545|
|sp12@gmail.com||45454555|
|mki||454545|
|Mahesh115||qwerty@123|





Scenario: Searching the hotel
When user "byindex" in "2" The Location
And User Select The_Hotel
And User Select The Roomtype
And User Select The Number Of Rooms
And User Clears The Default Date And Enters The CheckIn Date
And User Clears The Default Date And Enters The CheckOut Date
And User Selects The Adults Per Room

And User Clicks On The Search Button And It Navigates To The Book Hotel Page

Scenario: Select the hotel in select hotel page
When user Clicks On The Select Radio Button
Then User Clicks On The Continue Button And It Navigates To The Book Hotel Page

Scenario: Book a hotel page
When user Enters The FirstName InThe FirstName Field
When user Enters The  LastName InThe LastName Field
When user Enters The Billing Address InThe Billing Address Field
When user Enters The Credit Card Number InThe CreditCard Field
When user Selects The CreditCard Type 
When user Selects The Month InThe Expiry Month Field 
When user Selects The Year InThe Expiry Year Field
When user Enters The  Cvv Number InThe Cvv Number Field
When user Clicks OnThe Book Now Button And It Navigates To The Booking Confirmation Page

Scenario: Booking Confirmation
Then user Clicks On The My Itienary Button And Navigates To The Booked Itienary Page

Scenario: Cancellation  and Logging-out
When Clicks On The OrderId
And user Clicks On The Cancel Selected Button And Alert Is Popped-up
And user CLicks Ok On The Alert Box And Booking Is Cancelled

  



