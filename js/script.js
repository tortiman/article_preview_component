document.addEventListener("DOMContentLoaded", function() {
    console.log('entrada en el js1');
    const shareButton = document.getElementById("button-social");
    const social=document.getElementById('social');
    shareButton.addEventListener("click", () => {
        console.log('click');
        social.style.transition='opacity 1.3s, visibility 0.3s, transform 0.3s';
        social.style.opacity=1;
        social.style.visibility='visible';
    });
});