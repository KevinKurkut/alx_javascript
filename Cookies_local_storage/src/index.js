function setCookies() {
    const firstname = document.getElementById('firstname');
    const email = document.getElementById('email');
    const nameValue = firstname.value;
    const emailValue = email.value;

    document.cookie = `firstname=${nameValue}`;
    document.cookie = `email=${emailValue}`;

    alert("Cookies set Successfully")
   
}
function showCookies() {
    const cookies = document.cookie;
    const cookiesElement = document.getElementById('cookies');
    cookiesElement.innerHTML = `Cookies: ${cookies}`;
}
