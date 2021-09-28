janela . alerta ( "Bem vindo aos eventos do mês de Setembro!" ) ;
deixe  dataDoEvento  =  janela . prompt ( "Por favor, informe o dia do evento:" ) ;
const  diaDeHoje  =  new  Date ( ) ;  // Pega a data de hoje no formato MM / DD / AA
let  diaAtual  =  diaDeHoje . getDate ( ) ;  // Pega apenas o dia da data informada
if ( dataDoEvento  <  diaAtual )  {
    let  idadeParticipante  =  janela . prompt ( "Por favor, digite sua idade:" ) ;
    if ( idadeParticipante > 18 ) {
        let  Palestras  =  [ 'Manoel' ,  'Guilherme' ,  'Luis' ]  // Array
        janela . confirm ( "Iremos agora para o menu de Palestras, por favor digite o nome do palestrante que deseja acompanhar" )                                
        deixe  PalestrasNaTela  =  janela . pronto ( Palestras )               
        if ( PalestrasNaTela  ==  'Manoel' ) {
            janela . alerta ( "Cadastro realizado com sucesso, aguarde até a data da palestra" ) ;                                        
        } else  if ( PalestrasNaTela  ==  'Guilherme' ) {
            janela . alerta ( "Palestra cheia" )
        } else  if ( PalestrasNaTela  ==  'Luiz' ) {
            janela . alerta ( "Cadastro realizado com sucesso, aguarde até a data da palestra" )
        }
        else  {
            janela . alerta ( "Nenhuma palestra localizada" )
        } 

    } else {
        janela . alerta ( "Cadastro não permitido pela idade" )
    }         

} else {
    janela . alerta ( "Evento não autorizado por dados inválida" )
}

