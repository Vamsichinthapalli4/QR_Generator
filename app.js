const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const OnGernaeratesubmit = (e) =>{
    e.preventDefault();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    ClearUI();
    if(url == ''){
        alert('Please Enter Url')
    }else{
        showSpinner();
        setTimeout(() =>{
            hideSpinner();
            GenerateQRCode(url,size);
            setTimeout(() =>{
//                 var imgElement = document.querySelector('#banner img');
// var imgSrc = imgElement.getAttribute('src');

                const saveurl = document.querySelector('#qrcode img').src;
                createSaveBtn(saveurl);
            },50)
        },1000)
    }
};
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block'
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none'
}
hideSpinner();

const GenerateQRCode = (url,size) => {
  const qrcode = new QRCode('qrcode',{
    text:url,
    width:size,
    height:size
  })
}
const  ClearUI = () => {
    qr.innerHTML= '';
    const svaelink = document.getElementById('save-btn');
    if(svaelink)
    svaelink.remove();
}
const createSaveBtn = (saveurl) =>{
    const link = document.createElement('a');
    link.id = 'save-btn';
    link.classList='bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href=saveurl;
    link.download ='qrcode';
    link.innerHTML= 'Save Image';
    document.getElementById('generated').append(link)
}
form.addEventListener('submit',OnGernaeratesubmit);