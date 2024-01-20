$(document).ready(function(){

    var digitos =  {
        onChange: function(tel){
           var masks = ['(00) 0000-0000  0', '(00) 00000-0000'];
           var mask = (tel.length>14) ? masks[1] : masks[0];
         
           $('#telefone').mask(mask, digitos);  
       }
    };

    $('#telefone').mask('(00) 0000-0000  0', digitos);
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {required: true, minlength: 14},
            cpf: {required: true, minlength: 14},
            endereco: {required: true},
            cep: {required: true, minlength: 9}
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite seu e-mail',
            telefone: 'Por favor, digite seu telefone',
            cpf: 'Por favor, digite seu CPF',
            endereco: 'Por favor, digite seu endereço',
            cep: 'Por favor, digite seu CEP'
        }
    });

});