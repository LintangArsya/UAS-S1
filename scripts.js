let memulai = confirm("Apakah Anda Mau Bermain Angka Boom !!")


while(memulai == true){
    const bot = Math.floor(Math.random() * 10) + 1;
    console.log(bot)
    let user = parseInt(prompt("Masukkan Angka Tebakkan Anda Rangenya 1-10 !"));
    if(bot == user){
        alert(` BOOM!!!!, ANDA KENA HUKUMAN. karena angka boom adalah ${user}`)
        konfirmasi =confirm("Mau Lanjut ?")
    }else if(user < bot){
        alert(`ANGKA BOOM DIATAS ${user} !!!`)
        konfirmasi =confirm("Mau Lanjut ?")
    }else if(user > bot){
        alert(`ANGKA BOOM DIBAWAH ${user} !!!`)
        konfirmasi =confirm("Mau Lanjut ?")
    }else{
        
    }


    while(user != bot && konfirmasi == true){
        user = parseInt(prompt("Masukkan Angka Tebakkan Anda Rangenya 1-10  !!"));
        if(bot == user){
            alert(` BOOM!!!!, ANDA KENA HUKUMAN. karena angka boom adalah ${user}`)
            konfirmasi =confirm("Mau Lanjut ?")
        }else if(bot < user){
            alert(`ANGKA BOOM DIATAS ${user} !!!`)
            konfirmasi =confirm("Mau Lanjut ?")
        }else if(bot > user){
            alert(`ANGKA BOOM DIBAWAH ${user} !!!`)
            konfirmasi =confirm("Mau Lanjut ?")
        }else{
            
        }

        console.log(user)
    }

    if(konfirmasi == false){
        confirm("sampai jumpa lagi") 
    }
}
