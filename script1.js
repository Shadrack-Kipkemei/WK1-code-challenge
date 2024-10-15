

let grade = parseInt(prompt("Enter student marks (0 - 100):"));
if (grade >= 0 && grade <= 100) {
    switch (true) {
        case (grade > 79):
            alert("Your grade is A");
            break
        case (grade >= 60):
            alert("Your grade is B");
            break
        case (grade >= 49):
            alert("Your grade is C");
            break
        case (grade >= 40):
            alert("Your grade is D");
            break
        default:
            alert("Your grade is E");
            
    }
}