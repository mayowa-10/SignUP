document. getElementById( 'signupForm').addEventListener ('submit', function(event) {
    event.preventDefault();
    const username = document. getElementById( 'username' ).value;
    const email = document.getElementById(' email' ).value;
    const password = document.getElementById( 'password' ).value;
    const confirmPassword = document.getElementById(' confirmPassword').value;
    const phone = document.getElementById(' phone' ).value;
    const dob = document. getElementById(' dob').value;
    const gender = document-getElementById( 'gender').value;
    const country = document.getElementById(' country').value;
    const terms = document-getElementById(' terms').checked;
    if (password !== confirmPassword) {
        alert ("Passwords do not match!"); 
        return;
    }
    if (!terms) {
        alert("You must agree to the terms and conditions.");
        return;
    }
    alert( 'Sign up successful! Welcome, ${username}!');
});