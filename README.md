# 03: Password Generator 

#### Requirement:

- Generate a random password includes char(uppercase and lowercase), number,and symbol.
- Atleast one character should be selected.
- Length of the password should be in between any of 8 to 128 characters long.
- Whenever user click in the generate button,option should be prompt in the screen and selected by the user's choice.
-  After selecting option user will get a random password.
- After generating a random password, password should be copied in the clipboard.

### Implimentation Details:
- First creating variable in which have to perform operation.
- Then created a function, using Math.Random method generating random char, number and symbol.
- Generated a eventlistener on generate button.
- Inside listener created requirement (length, char, symbol,and number).
- When fullfil all the requriment call a function generate password.
- Generatepassword function where  password generate.
- Inside generatepassword call method buildselectedrequirement,which has all the users requirement(Ex -length of the passwored,
either number,symbol or char) can be selected.
- Generatepassword has one more method getRandominteger,which return random index.
- And here random password should be generated.


### ClipBoard:

#### .html:

- created a button called "copie to clipboard" with Id " clipBoard".
- created an unordered list and inside pasted both the button's ('Generate Password' and 'Copie to clipBoard'
').

#### css:
 made display as a inline and liststyletype none.
 
 #### .js:
- Added a eventlistener to clipboard.

 

