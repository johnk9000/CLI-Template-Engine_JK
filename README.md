# HW8: Team Profile Card Generator 

### Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#Questions)

 ## Description 

In this assignment, we utilize classes and subclasses in order to generate employee profiles.  The profiles are extended by the `Engineer`, `Manager`, and `Intern` roles. 

A user will be prompted to either `Create a New Portfolio`, `Save All & Exit` or `Clear Cache`. The employee profiles is collected and written to `cache.txt` in the `/lib` directory.

 ## Installation Instructions 

Install the following the dependencies with: 
```
$ npm install inquirer fs utils
```

 ## Usage Information 
 
* Navigate to the `/lib` directory and enter the command in order to run the program 
 ```
$ node ../app.js
``` 
* `app.js` will not properly read and write to cache if you are not in the `lib` directory 
* follow the prompts and hit `Save All & Exit` in order to render the HTML

* Example of prompts:
```
$ node ../app.js

? ────────────── Create a Profile

Starting new profile
?
    What is your name?
     Eric Scott
?
    What is your badge number? 
     249810
?
    Enter e-mail address: 
     eric.scott@gmail.com
?
    -- Choose Role -- Manager
?
    Enter your office number: 
         101

? ────────────── Save All & Exit
Reading cache... there are 3 employee records saved
Cards have been rendered... Exiting...
```

 ## Contribution Guidelines 
* All contributors must hmu first.

 ## Test Instructions 
* Commit to a burner branch and generate a pull request and I'll take a look at it

## Questions
### Contact
* http://github.com/johnk9000
* johnk9000@gmail.com