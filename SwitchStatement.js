// This lecture was about Switch Statement i will try to explain you how it's work and the most intresting things
// Below i'm posting code from lesson 

const day = 'monday';

switch(day) {
    case 'monday': // day === monday, if day = 'monday'
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break; // always remember about break;
    case 'thusday':
        console.log("Preapre theory videos");
        break;
    case 'wednesday': // you can add the same order to a lot case like in this example
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("relaxing and smoking weed");
        break;
    default:
        console.log("Not a valid day!");
}

// What's most important in this, that's is the same like IF/ELSE statement but easier with more examples, instead writing if else, you can just write
// case '(name of case)': what it must do, but remember every case need to close with break; otherwise it won't stop and for example if you take as a day = thursday, 
// and then day = monday(without break;) you will still see things from thursday. so you will see monday and thusday.
// something intresting too is that you can creat two case to do the same thing as you see in wednesday and thursday.

