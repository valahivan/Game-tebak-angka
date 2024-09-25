const btnCari = document.querySelector('.btn');
btnCari.addEventListener('click', function(){
    const input = document.getElementById('angka-input');
    const angka = Math.floor(Math.random() * 10 + 1);

    console.log(angka);
    if(input.value == ''){
        Swal.fire({
            icon: 'error',
            text: 'Isi dulu atuh panjul!'
        });
        return;
    };

    input.value = parseInt(input.value);
    if(input.value > 10){
       Swal.fire({
           icon: 'error',
           text: 'Eits angka tidak boleh lebih besar dari 10 atuh panjul!'
       });
    }else if(input.value < angka){
        Swal.fire({
            icon: 'warning',
            text: 'Terlalu rendah!'
        });
    }else if(input.value > angka){
        Swal.fire({
            icon: 'warning',
            text: 'Terlalu tinggi'
        });
    }else if(input.value == angka){
        Swal.fire({
            icon: 'success',
            text: 'Benar angka yang dicari adalah ' + angka
        });
    }else{
        Swal.fire({
            icon: 'error',
            text: 'Yeh.. masukan angka bukan huruf atuh panjul!'
        });
    };

    input.value = '';
});