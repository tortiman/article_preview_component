document.addEventListener("DOMContentLoaded", function() {
    console.log('entrada en el js1');
    const shareButton = document.getElementById("button-social");
    const social=document.getElementById('social');
    shareButton.addEventListener("click", () => {
        console.log('click');
        social.style.opacity=1;
        social.style.visibility='visible';
    });
});