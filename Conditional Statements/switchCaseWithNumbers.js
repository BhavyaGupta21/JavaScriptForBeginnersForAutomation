switch ("Chrome") // It is a reserved keyword in JS and in the bracket there is the key
{
    case "Chrome":
        console.log("Chrome Started");
        break; // To break means that it will terminate the switch case else it will keep on matchign the multiple cases
        
    case "Firefox":
        console.log("Firefox Started");
        break;

    case "Safari":
        console.log("Safari Started");
        break;

    default: // If nothing matches, this will work
        console.log("Sorry");
        break;
// If we don't use break, it will do a free fall. Although it matches the above statement but still, it will execute all the cases.
}