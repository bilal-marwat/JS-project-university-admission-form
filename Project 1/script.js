

// /// university admission form project 1

// let userName = document.getElementById("name");
// let userEmail = document.getElementById("email");
// let userDob = document.getElementById("dob");
// let userCourse = document.getElementById("course");
// let userGpa = document.getElementById("score");



// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let name = userName.value;
//     let email = userEmail.value;
//     let dob = userDob.value;
//     let course = userCourse.value;
//     let score = userGpa.value;

//     let data = {
//         name,
//         email,
//         dob,
//         course,
//         score,
//     };
//     console.log(data);
// });



// if(userName && userEmail && userDob && userCourse && userGpa){
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         let name = userName.value;
//         let email = userEmail.value;
//         let dob = userDob.value;
//         let course = userCourse.value;
//         let score = userGpa.value;

//         let data = {
//             name,
//             email,
//             dob,
//             course,
//             score,
//         };
//         console.log(data);
//     });
// }


//=========================code alert

// let name = prompt("Enter your name");
// let email = prompt("Enter your email");
// let dob = prompt("Enter your date of birth");
// let course = prompt("Enter your course");
// let score = prompt("Enter your score");

// if(name =="bilal" && email == "example.com" && dob == "01-01-2001" && course == "Computer Science" && score == "4.0"){
//     alert("You are eligible for admission");
// }else{
//     alert("You are not eligible for admission");
// }



// Selecting form fields
// const nameField = document.getElementById("name");
// const emailField = document.getElementById("email");
// const ageField = document.getElementById("dob");
// const submitButton = document.getElementById("submit-btn");


// submitButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Page reload na ho
//     validateForm();         // Validation function call
// });


function validateForm() {
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const age = parseInt(ageField.value);

    // Basic Validation
    if (name === "") {
        resultDiv.innerHTML = "Name field cannot be empty.";
        return;
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
        resultDiv.innerHTML = "Please enter a valid email address.";
        return;
    }

    if (isNaN(age) || age < 18) {
        resultDiv.innerHTML = "You must be at least 18 years old.";
        return;
    }

    // If all validations pass
    resultDiv.innerHTML = "Congratulations! You are eligible for admission.";
    resultDiv.style.color = "green"; // Optional: Success color
}




// Select the form and attach a submit event listener
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;
    const score = parseFloat(document.getElementById('score').value);

    // Validate inputs
    if (!name || !email || !dob || !course || isNaN(score)) {
        alert("Please fill in all fields correctly.");
        return;
    }
    // age eligibility check
    
    // const age = new Date().getFullYear() - new Date(dob).getFullYear();


    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }


    // if (age < 18 || score < 2.5) {
    //     // User not eligible => Redirect to "not-eligible.html"
    //     window.location.href = "not-eligible.html";
    //     return;
    //   }
    //   // Agar sab kuch theek hai => Redirect to "eligible.html"
    // window.location.href = "eligible.html";


      // page open new page

    //   if (age < 18 || score < 2.5) {
    //     // Open "Not Eligible" page in a new tab
    //     window.open.hre("not-eligible.html", "_blank",);
    //   } else {
    //     // Open "Eligible" page in a new tab
    //     window.open("eligible.html", "_blank",);
    //   }

      
    // open new widnow and show the result with student name
    let status = "";
      if (age < 18 || score < 2.5) {
        status = "not-eligible";
      } else {
        status = "eligible";
      }

      // Redirect to new page with URL parameters
      const url = `${status}.html?name=${encodeURIComponent(name)}&course=${course}&status=${status}`;
      window.open(url, "_blank"); // Open in new tab







    // Age eligibility check

    // if (age < 18) {
    //     alert("You must be at least 18 years old to apply for admission.");
    //     return;
    // }


    // GPA eligibility check
    // if (score >= 2.5) {
    //     alert(`Congratulations ${name}! You are eligible for admission to ${course}.`);
    // } else {
    //     alert(`Sorry ${name}, your GPA does not meet the eligibility criteria.`);
    // }

});

