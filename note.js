Why JavaScript?
    A very popular scripting language
        Used for programming web pages
        Used in visualization (D3)
    Goals:
        Identify similarities between programming languages
        Expand familiarity with programming syntax
    Officially an implementation of ECMAScript (!= Java! named to capitalize on Java''s popularity)
    JS Origins (1995)
        Developed by Brendan Eich (co-founder of Mozilla) for Netscape in 10 days
Run in the browser
A web server:
    http://slides.com/joelross/infx598s16-javascript/#/8
    "http://" = protocol (how to handle info)
    "slides.com" = host (who has info)
    "joelross/infx598s16-javascript/#/8" = path (what info you want)
    Hi "host", Id like you to send me the "path" pagesRequest --> Web Server --> Response

A Local Web Server
    Use Python to run our own web server!
    cd path/to/project
    python3 -m http.server
    "plz run this script as a module/own script"

Visual Studio Code: https://code.visualstudio.com/ <--Microsofts free texteditor
    VS Code Command Palette: Open up the command palette with F1 or cmd-shift-p for quick access to commands.

JavaScript in HTML (index.html is implicit:
Include an external script file:
    <script src="path/to/my-script.js"></script>
    script tag either goes in head or after (after page elements load, run JS)
    order of script tags --> order they are loaded on page
        <!DOCTYPE html>
        <html>
        <head>
          <!-- include here to load before page -->
          <script src="js/myscript.js"></script>
        </head>
        <body>
           ... content ...


           <!-- include here to load "after" html -->
           <script src="js/myscript.js"></script>
        </body>
        <html> 
Reloading page runs script --> view in console (effectively cmd ln)
Semicolons optional, but use them to avoid tricky bugs (used to mark "end of statement")
    console.log("Hello world");

JavaScript Variables
    Declare (scoped) variables using the var keyword.
    var x = 4; //create and assign variable
    var y = x; //create and assign variable
    x = 5;     //assign variable (no var bc already declared)


    console.log(x+', '+y); //=> 5, 4

    !Any unassigned variable has a value of undefined (like None in Python)!
    //create a variable (not assigned)
    var hoursSlept; 
    console.log(hoursSlept); //=> undefined

'use strict';
    Not a string! A JavaScript directive that puts the interpreter into strict mode, which causes it to be less forgiving of loose syntax (and the errors they cause!)
    If forget var: usestrict will create error
    'use strict';

    var personName = 'Joel Ross';

    persenName = 'Mary Poppins'; //causes an error

Variable Types
    //Numbers (no difference between int and float)
    var x = 4;   //'number'
    var y = 1.5; //'number'

    //Strings (single or double quotes)
    var message = "Hello world";

    //Booleans (lowercase)
    likesCode = true;
    hasSlept = false;

Type Conversion
    JavaScript is much "looser" with its type casting.
    What are the values of the following expressions?
    '40' + 2
    '40' - 4

    var num = 10 --> undefined
    var str = '10' --> undefined

    //comparisons: these will all be booleans (true/false)
    num == str --> true
    num === str --> false
    '' == 0 //empty String compare to 0 --> true

String Methods: We still call methods on variables using dot notation.
    //Make a new string variable for the value "The iSchool is my school"
    var motto = "The iSchool is my school";

    //Log out the string
    console.log(motto);

    //Convert the string to upper case, replacing the previous string
    //Log out the changed variable
    var motto = motto.toUpperCase();
    console.log(motto);

    //Use the slice method to extract characters 2 through 10 (inclusive) 
    //into a new variable, and log that variable
    var part = motto.slice(2,11);
    console.log(part);

    //Use the indexOf method to see if the word "cool" is in your string
    var index = motto.indexOf("cool");
    console.log(index);

Arrays: A sequence of ordered elements; a list in Python
    var names = ['John', 'Paul', 'George', 'Ringo'];
    var letters = ['a', 'b', 'c'];
    var numbers = [1, 2, 3];
    var things = ['raindrops', 2.5, true, [5, 9, 8]];
    var empty = [];

    console.log( names[1] ); //=> "Paul"
    console.log( things[3][2] ); //=> 8

    letters[0] = 'z';
    console.log( letters ); //=> ['z', 'b', 'c']

Lists vs. Arrays: JavaScript arrays are almost the same as Python lists
## Python ##
    arr = ['a', 'b', 'c']
    print(arr[0]) #'a'
    print(arr[4]) #IndexError! <--trying to access element outside of array

    arr[0] = 'a'
    arr[6] = 'f' #IndexError! <--trying to assign variable outside of array bounds
    print(arr) #['a', 'b', 'c']

    arr = ['a', 'b', 'c'] #reset
    length = len(arr) #core function! len = method
    print(length) #3

    arr.append('z')
    print(arr) #['a', 'b', 'c', 'z']

    str = ','.join(arr) //string method
    print(str); #'a,b,c,z'

/** JavaScript **/
    var arr = ['a', 'b', 'c'];
    console.log(arr[0]); //'a'
    console.log(arr[4]); //undefined <--not an indexError (get back undefined, no value, list could have element 4 in the future)

    arr[0] = 'a';
    arr[6] = 'f'; <-- creates and stores new var in that index, puts undefined vars in between (where not assigned)
    console.log(arr); //['a', 'b', 'c', , , 'f']

    arr = ['a', 'b', 'c']; //reset
    var length = arr.length; //len is a property/attribute of an array(not how many items in list, but highest index+1!
    console.log(length); //3

    arr.push('z'); //returns 4 (new length) (pushes onyo end of list)
    console.log(arr); //['a', 'b', 'c', 'z']

    var str = arr.join(','); //array method: take this string, use that as the delimiter, join them using that delimiter

var arr = [1,2,3]
arr[10] = 10
10
arr
[1, 2, 3, undefined × 7, 10]
arr.length
    console.log(str); //'a,b,c,z'

Objects: A collection of key-value pairs; a dictionary in Python
    var ages = {alice:42, bob:35, charles:13} // string is implied w/o quotes
    var extensions = {'joel':1622, 'ischool':9937}
    var numWords = {1:'one', 2:'two', 3:'three'}
    var things = {num:12, dog:'woof', list:[1,2,3]}
    var empty = {}

    console.log( ages['alice'] ); //=> 42 need quotes to acess
    console.log( things['list'][2] ); //=> 3

    ages['dave'] = 103; //assign new key
    console.log(ages['dave']); //=> 103

Accessing Properties: Can reference values using array syntax, using the "key" as the "index"
    var person = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 22,
      favorites: {
        music: 'jazz',
        food: 'pizza',
        numbers: [12, 42]
      }
    };

    var name = person['firstName']; //get value of 'firstName' key
    person['lastName'] = 'Jones'; //set value of 'lastName' key
    console.log(person['firstName']+' '+person['lastName']); //"Alice Jones"

    var topic = 'food' //
    var favFood = person['favorites'][topic]; //object in the object
                  //object           //value

    var firstNumber = person['numbers'][0]; //12
    person['numbers'].push(7); //push 7 onto the Array

Can assign values to any key without initializing! Any unassigned key is undefined
    var person = {
      firstName: 'Alice',
      lastName: 'Smith',
    };

    person['middleInitial'] = 'Q'
    person['luggageCombo'] = [1,2,3,4,5]


    person['favorites']['color'] = 'blue'; //TypeError!

    person['favorites'] === undefined; //true

    person['favorites'] = {}; //initialize as empty object
    person['favorites']['color'] = 'blue';

Can also reference values using dot notation (like attributes of Python class objects)
    var person = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 22,
      favorites: {
        music: 'jazz',
        food: 'pizza',
        numbers: [12, 42]
      }
    };

    var name = person.firstName; //get value of 'firstName' key
    person.lastName = 'Jones'; //set value of 'lastName' key
    console.log(person.firstName+' '+person.lastName); //"Alice Jones"

    var topic = 'food'
    var favFood = person.favorites.food; //object in the object
                  //object         //value

    var firstNumber = person.numbers[0]; //12
    person.numbers.push(7); //push 7 onto the Array

Conditionals
    //general syntax
    if(boolean_expression){ <--block defined by {}
       //statements    
    }
    if(temperature < 60) {
       console.log("Wear a hat");
       console.log("And a jacket");
    }

    /** JavaScript **/
    if(temperature < 60) {
       console.log("Wear a jacket");
    }
    else if(temperature > 90) {
       console.log("Wear sunscreen");
    }
    else if(temperature == 72) {
       console.log("Perfect weather!");
    }
    else {
       console.log("Wear a t-shirt");
    }

Logical Operators: JavaScript does not have Python''s and, or, and not operators.
    // conjunction
    bool_one && bool_two //and (two ampersands)

    // disjunction
    bool_one || bool_two //or (two pipes)

    // negation
    !bool_one //not (exclamation point)

    //combining!
    A || !B      //A or not B
    !A && B      //not A and also B
    !(A && B)    //not (A and B both)
    (!A) || (!B) //not A or not B

    3 < x && x < 5 //not as cool as python

While Loops
    //general syntax
    while(boolean_expression){
       //statements
    }

    var count = 5;
    while(count > 0){
       console.log(count);
       count = count - 1;
    }
    console.log("Blastoff!");

For Loops
    ## Python ##
    for item in collection:
        print(item)

    ## Python ##
    for index in range(len(array)):
        print(array[index])
    
    JavaScript doesn''t have the "for in" syntax (but there are alternatives)
    var i = 0;
    while(i < array.length){
       console.log(array[i]);
       i++; //shortcut for i=i+1 <--two operations! addition and assignment
    }

    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }

Defining a Function
    //general syntax
    function methodName(params){ <--ALL params are optional, comma-separated
        //...statements
    }
    function sayHello(name) {
       console.log('Hello '+name);
       console.log('Nice to meet you!');
    }
    ## Python ##
    def say_hello(name):
        return "Hello, "+name

optional-ness of params: If a func has a param, that doesn't mean it got a value.
If a func doesn't have a param, that doesn't mean it didn't get a value.
    function sayHello(name) 
    {
        return "Hello, "+name;
    }

    //expected; parameter is assigned a value
    sayHello("Joel"); //"Hello, Joel"

    //paramer not assigned value (left undefined)
    sayHello(); //"Hello, undefined"

    //extra parameters (values) are not assigned
    //to variables, so are ignored
    sayHello("Joel","y'all"); //"Hello, Joel"

Functions are Objects
    Functions are a type of value (just like Number, String, Array).
    Anywhere you can put an Array, you can put a Function.

    //assign array to variable
    var myArray = ['a','b','c'];

    var other = myArray;

    //access value in other
    console.log( other[1] ); //print 'b'

    //assign function to variable
    function sayHello(name) { 
       console.log("Hello, "+name);
    }

    var other = sayHello;

    //prints "Hello, everyone"
    other('everyone'); 

Anonymous Variables: An anonymous variable is a value to which we don''t assign a name/label (variable) to
    var array = [1,2,3]; //named variable (not anonymous)
    console.log(array); //pass in named var

    console.log( [4,5,6] ); //pass in anonymous value

    //named function
    function sayHello(person){ 
       console.log("Hello, "+person); 
    }

    //anonymous function (no name!)
    function(person) {
       console.log("Hello, "+person);
    }

    //anonymous function (value) assigned to variable
    var sayHello = function(person) {
       console.log("Hello, "+person);
    }

Functions are Objects: So they can be assigned as values to variables