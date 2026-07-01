function result() {

    let subjects = Number(document.getElementById("sub").value);

    if (subjects <= 0) {
        alert("Enter a valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 1; i <= subjects; i++) {

        let marks = Number(prompt("Enter marks for Subject " + i));

        total += marks;
    }

    let average = total / subjects;

    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 75)
        grade = "A";
    else if (average >= 60)
        grade = "B";
    else if (average >= 40)
        grade = "C";
    else
        grade = "F";

    document.getElementById("output").innerHTML =
        "<h3>Result</h3>" +
        "Total Marks : " + total + "<br>" +
        "Average : " + average.toFixed(2) + "<br>" +
        "Grade : " + grade;
}