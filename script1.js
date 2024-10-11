

let grade = parseInt(prompt("Enter student marks (0 - 100):"));
if (grade >= 0 && grade <= 100) {
    switch (true) {
        case (grade > 79):
            alert("Your grade is A");
            
        case (grade >= 60):
            alert("Your grade is B");
            
        case (grade >= 49):
            alert("Your grade is C");
            
        case (grade >= 40):
            alert("Your grade is D");
            
        default:
            alert("Your grade is E");
    }
}