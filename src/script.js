const contactButton = document.getElementById("contact-button");

contactButton.addEventListener("click", ()=>{
    const classContact = document.querySelector(".main__section-profile");

    classContact.style.display = "none"
    classContact.innerHTML = `<div class="main__section-profile-social">
    <div class="main__section-profile-contact">
        <p>SHARE</p>
        <img src="../images/icon-facebook.svg" alt="facebook">
        <img src="../images/icon-pinterest.svg" alt="pinterest">
        <img src="../images/icon-twitter.svg" alt="twitter">
    </div>
    <div class="main__section-profile-share">
        <div class="social-media-img"></div>
    </div>
    </div>`
})