// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Own solution
function repeatStringNumTimes(string, num){                 //1
    var stringBuilder = "";                                 //2
    for (var i = 0; i < num; i++) {                         //3
        stringBuilder += string;                            //4
        //console.log(stringBuilder);                       //4.1
    }
    return stringBuilder;                                   //5
}

console.log(repeatStringNumTimes("Om", 9));

// Notes
/*/

    //1     Initializes function that takes in two arguments: One being a string and the other an integer. 
                -The Sample Data to be multiplied (string);
                -The Multiplier (num)

    //2     Declaring a variable to caputure the multiple occurences of the sample data at a later stage.
    //3     The for loop will start at zero
            The reason why i < num will still yield 9 instances of the sample data is because javascript iteration is zero based. 
                (0 - 8 = 9 instances of iteration)
            The iteration will count upwards till it meets the loop end condition (i < num || i < 9)

    //4     The given string(sample data) will be added to the initially empty stringBuilder variable until the i < num condition is met. 
    //4.1   Om
            OmOm
            OmOmOm
            OmOmOmOm
            OmOmOmOmOm
            OmOmOmOmOmOm
            OmOmOmOmOmOmOm
            OmOmOmOmOmOmOmOm
            OmOmOmOmOmOmOmOmOm

    //5
            The return ends function execution and specifies a value to be returned to the function caller.
            Source - [https://devdocs.io/javascript/statements/return]

            In this case the return keyword returns the stringBuilder variable contents. 
        


     

  // "Never give up and good luck will find you."
  // -- Falcor
                                */