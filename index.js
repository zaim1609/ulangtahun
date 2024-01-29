var nDrop = 400;
function randRange(minNum, maxNum){
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createRain(){
    for (i = 1; i < nDrop; i++){
        var dropLeft = randRange(0,1600);
        var dropTop = randRange(-1000,1400);

        $('.rain').append('<div class="hati" id="hati' + i  +'"></div>');
        $('#hati' + i).css('left', dropLeft);
        $('#hati' + i).css('top', dropTop);
    }
}

// const tombol = document.getElementById("tombol");
// tombol.addEventListener("click",function(){
//     console.log("halo")
    
    
    
// })

var x = document.querySelectorAll(".gambar")[0];

x.addEventListener("click",function(){
    console.log("halo") 
})
// var y = document.querySelectorAll(".jawaban")[1];

// x.addEventListener("mouseover",function() {
//     document.querySelector("img").src="images/in-love.png"
// })

var n = 0;


x.addEventListener("click",()=>{

    n+=1;
    console.log(n);
    if(n==1){
        gambarMurung();
        tulisanBar();
         var tom1 = new Audio("ulangtahun.mp3");
         tom1.play();
    }else if(n == 2){
        gambarSatuTetes();
        tulisanBara();
    }else if(n==3){
    gambarDuaTetes();
    tulisanBari();
    }else if(n==4){
    gambarNangis();
    tulisanBaro();
    }else if(n==5){
    gambarMelet();
    tulisanBare();
    // ilang();
    }else if(n==6){
    gambarMelu();
    tulisanBaree();
        // ilang();
    }else if(n==7){
        gambarh();
        tulisanh();
        // ilang();
    }else if(n==8){
        gambarx();
        tulisanx();
        document.addEventListener("DOMContentLoaded",createRain());
        ilang();
        ubahBanground();
        }
    // gambarCium();
    // tulisanBaru();
    // ubahBanground();
    // ilang();
    // var tom1 = new Audio("Finally.mp3");
    // tom1.play();
    // document.addEventListener("DOMContentLoaded",createRain());
})

// x.addEventListener("mouseout",function() {
//     document.querySelector("img").src="images/afraid.png"
// })
// var n = 0;

// y.addEventListener("click",()=> {
//     n+=1;
//     console.log(n);
//     if(n==1){
//         gambarMurung();
//         tulisanBar();
//     }else if(n == 2){
//         gambarSatuTetes();
//         tulisanBara();
//     }else if(n==3){
//     gambarDuaTetes();
//     tulisanBari();
//     }else if(n==4){
//     gambarNangis();
//     tulisanBaro();
//     }else if(n==5){
//     gambarMelet();
//     tulisanBare();
//     ilang();
//     }
//     // gambarNangis();
    
    
// })

// y.addEventListener("mouseover",function() {
//     document.querySelector("img").src="images/unamused.png"
// })

// // y.addEventListener("mouseout",function() {
// //     document.querySelector("img").src="images/afraid.png"
// // })

// // coba function

// const gambarCium = () => document.querySelector("img").src="images/kiss.png";
// const tulisanBaru = ()=> document.getElementById("haiho").innerHTML="I love You too ayang";
const ubahBanground = ()=> document.querySelector("body").style.backgroundColor="#ffb8c6";
const ilang = ()=> document.getElementById("lol").innerHTML="Selamat ulang tahunn :)";

// // yg nangis
const gambarMurung = () => document.querySelector("img").src="images/surat10.gif";
const gambarSatuTetes = () => document.querySelector("img").src="images/surat (2).gif";
const gambarDuaTetes = () => document.querySelector("img").src="images/surat (5).gif";
const gambarMelet = () => document.querySelector("img").src="images/surat (9).gif";
const gambarMelu = () => document.querySelector("img").src="images/surat (4).gif";
const gambarh= () => document.querySelector("img").src="images/ooo.gif";
const gambarx= () => document.querySelector("img").src="images/surat (3).gif";

const gambarNangis = () => document.querySelector("img").src="images/uuu.gif";
const tulisanBar = ()=> document.getElementById("haiho").innerHTML="sebagai manusia ganteng, tidak sombong, dermawan dan pokoknya perfect parah ";

const tulisanBara = ()=> document.getElementById("haiho").innerHTML="Selamat Ulang tahun inun yang manis, ditunggu traktirannya :v, tunggu ada sesuatu";
const tulisanBari = ()=> document.getElementById("haiho").innerHTML="ini kuenya coba tiup";
const tulisanBaro = ()=> document.getElementById("haiho").innerHTML="ya gak bisa lah neng, sek aku mo doa semoga inun...."; 
const tulisanBare = ()=> document.getElementById("haiho").innerHTML="tambah rajin jajanin gw";
const tulisanBaree = ()=> document.getElementById("haiho").innerHTML="disembuhkan dari penyakit encok nya biar gk kyk nenek nenek dan...";
const tulisanh = ()=> document.getElementById("haiho").innerHTML="dan semoga angan dan cita-cita nya terwujud, dan dijauhkan dari perkara2 aneh";
const tulisanx = ()=> document.getElementById("haiho").innerHTML="ini ada hadiah kecil buat kamu wkwkw, klo mo yg gede dikit kasih alamat makanya :v";

// const ubahBanground = ()=> document.querySelector("body").style.backgroundColor="#ff429a";