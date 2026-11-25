var person = "Enrolled Member";
var authorization;

switch (person) {
    case "Employee":
        authorization = "Dietary Services";
        break;
    case "Enrolled Member":
        authorization = "Dietary Services and one-to-one interaction with a dietician";
        break;
    case "Subscriber":
        authorization = "Partial access to Dietary Services";
        break;
    case "Non-Subscriber":
        authorization = "Enroll or at least subscribe";
        break;
    default:
        authorization = "Unknown role";
}

console.log(authorization);