let flag = 1;

function f1() {
    // Send a message via WhatsApp
    const phoneNumber = "6289508545071"; // Replace with the phone number
    const message = "Iya, aku maafin";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function f() {
    const Bn = document.getElementById('Bn');
    if (flag == 1) {
        Bn.style.transform = 'translate(150px, -50px)';
        flag = 2;
    } else if (flag == 2) {
        Bn.style.transform = 'translate(-150px, -50px)';
        flag = 3;
    } else if (flag == 3) {
        Bn.style.transform = 'translate(0, 0)';
        flag = 1;
    }
}
