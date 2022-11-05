# 10_Team_Profile_Generator

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


### PSEUDOCODE

```
#DEFINE + TEST CLASSES

create classes for team member, as well as for subclasses engineer, intern, and team manager

team members should all have attributes
    name
    ID
    email

manager
    office number

engineer
    GitHub username

intern
    school

#ON START
take in input for team manager
enter loop for engineers and interns
store it in a public json location ?

#AFTER INPUT RECEIVED
function to generate html template skeleton
function to attach the correct number of cards
functions to populate cards with information

```


# video link

https://drive.google.com/file/d/1Aq3H61Z_tULqdgqX5ZtVDTBf_OU_KoO7/view?usp=share_link


