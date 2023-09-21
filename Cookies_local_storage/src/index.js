function setCookies() {
    const firstname = document.getElementById('firstname');
    const email = document.getElementById('email');
    const nameValue = firstname.value;
    const emailValue = email.value;
    // expiration
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);

    document.cookie = `firstname=${nameValue}; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}`;

    alert("Cookies set Successfully")
   
}
function showCookies() {
    const cookies = document.cookie;
    const cookiesElement = document.getElementById('cookies');
    cookiesElement.innerHTML = `Cookies: ${cookies}`;
}
