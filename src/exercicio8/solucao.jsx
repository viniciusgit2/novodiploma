function carregar(){
    var foto =window.document.getElementById('foto')
    var data2= new Date()
    var sex=Boolean 
var hora= data2.getHours() 
var msg=window.document.getElementById('msg')
var hora=new Date()
var relogio= hora.getHours() 
msg.innerHTML=`agora é pra ser ${relogio} `
var ver=Date()
if(ver.length==0 -Number (ver)){
    window.alert("verifique os dados")

}
else{
    window.alert("ok")

}
if(sex='m'){
    innerHTML=`seu   ${sex} é masculino `
}
else{
    innerHTML=`seu   ${sex} é femenino `

}

if (relogio<12){
    foto.src="../../public/base manha.png"
    }
    else if (relogio <=12 && relogio>18){
    foto.src='../../public/tarde.png'
    }
    else if (relogio>18){
    foto.src="../../public/base noite.png"
    }
    
}
function carregar2(){

}
