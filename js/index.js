const input = document.querySelector('#url_input');
const button = document.querySelector('#generate_code_button');
const qrcode = new QRCode("qrcode");

button.addEventListener('click', ()=>{
    //validate URL
    const val = input.value;
    if(val.length > 0){
        generateQRCode(val);
    } else {
        input.focus();
        alert('Enter a valid URL');
    }
});

const generateQRCode = (val) => {
    qrcode.makeCode(val);
}
