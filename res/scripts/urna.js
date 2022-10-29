let nome = document.querySelector('#nome')
let partido = document.querySelector('#partido')
let vice = document.querySelector('#vice')
let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let fotoPresidente = document.querySelector('#fotoPresidente')
let fotoVice = document.querySelector('#fotoVice')
let info = document.querySelector('#info')
const linha = document.querySelector('.linha')
const urna = document.querySelector('#urna')
const painelCandidatos = document.querySelector('#painelCandidatos')
const principal = document.querySelector('#principal')
const resultadoFinal = document.querySelector('#resultado-final')
let percentualVencedor = document.querySelector('#percentualVencedor')
let percentualDerrotado = document.querySelector('#percentualDerrotado')
let percentualBrancosENulos = document.querySelector('#percentualBrancosENulos')
let fotoVencedor = document.querySelector('#fotoVencedor')
let nomeVencedor = document.querySelector('#nomeVencedor')
let partidoVencedor = document.querySelector('#partidoVencedor')
let fotoDerrotado = document.querySelector('#fotoDerrotado')
let nomeDerrotado = document.querySelector('#nomeDerrotado')
let partidoDerrotado = document.querySelector('#partidoDerrotado')



let num
let nums
let nums1
let nums2
let votosCand1 = 0
let votosCand2 = 0
let votosBrancosOuNulos = 0
let votoBranco = null

const um = () => {num = '1'; validar()}
const dois = () => {num = '2'; validar()}
const tres = () => {num = '3'; validar()}
const quatro = () => {num = '4'; validar()}
const cinco = () => {num = '5'; validar()}
const seis = () => {num = '6'; validar()}
const sete = () => {num = '7'; validar()}
const oito = () => {num = '8'; validar()}
const nove = () => {num = '9'; validar()}
const zero = () => {num = '0'; validar()}

const candidato1 = {
    nome: 'Deodoro da Fonseca',
    partido: 'PPP',
    vice: 'Floriano Peixoto',
    fotoPresidente: './res/images/fotosCandidatos/partido1/deodoro-da-fonseca.jpg',
    fotoVice: './res/images/fotosCandidatos/partido1/floriano-peixoto.jpg',
}

const candidato2 = {
    nome: 'Prudente de Morais',
    partido: 'PRF',
    vice: 'Manuel Vitorino',
    fotoPresidente: './res/images/fotosCandidatos/partido2/prudente-de-morais.jpg',
    fotoVice: './res/images/fotosCandidatos/partido2/manuel-vitorino.jpg',
}

function validar(){
    if(n1.childNodes.length == 0){
        n1.innerHTML = num
        n1.setAttribute('class', 'n1-para')
        n2.setAttribute('class', 'n2-pisca')
        nums1 = num    
    }else if(n2.childNodes.length == 0){
        n2.innerHTML = num
        n2.setAttribute('class', 'n2-para')
        nums2 = num
    }else{
        console.log('todos os campos preenchidos')
    }
    nums = nums1 + nums2
    exibir()
}

function exibir(){
    if(nums == '22'){
        nome.innerHTML = candidato1.nome
        partido.innerHTML = candidato1.partido
        vice.innerHTML = candidato1.vice
        fotoPresidente.src = candidato1.fotoPresidente
        fotoPresidente.style.display = 'block'
        fotoVice.style.display ='block'
        fotoVice.src = candidato1.fotoVice
        info.style.display ='block'
        linha.style.display ='block'

    }else if(nums == '13'){
        nome.innerHTML = candidato2.nome
        partido.innerHTML = candidato2.partido
        vice.innerHTML = candidato2.vice
        fotoPresidente.src = candidato2.fotoPresidente
        fotoPresidente.style.display = 'block'
        fotoVice.style.display ='block'
        fotoVice.src = candidato2.fotoVice
        info.style.display ='block'
        linha.style.display ='block'
    }
}

function limpar(){
    nome.innerHTML = ''
    partido.innerHTML = ''
    vice.innerHTML = ''
    fotoPresidente.src = ''
    fotoPresidente.style.display = 'none'
    fotoVice.style.display ='none'
    fotoVice.src = ''
    info.style.display ='none'
    linha.style.display ='none'
    n1.innerHTML = ''
    n2.innerHTML = ''
    nums = null
    nums1 = null
    nums2 = null
    votoBranco = null
    n1.setAttribute('class', 'n1-pisca')
}

function branco(){
    alert('Voto branco: Aperte CONFIRMAR para concluir o voto em branco ou CORRIGE para retornar')
    votoBranco = 'ativo'
}

function corrige(){
    limpar()
}

function confirma(){
    if(n1.childNodes.length == 0 && votoBranco == null){
        alert('Preencha para votar!')
    }else{
        if(nums == '22'){
            votosCand1++
        }else if(nums == '13'){
            votosCand2++
        }else if(votoBranco = 'ativo'){
            votosBrancosOuNulos++
        }else{
            votosBrancosOuNulos++
        }
        alert('Voto computado!')

        const totVotos = votosCand1 + votosCand2 + votosBrancosOuNulos
        this.percentualCand1 = (votosCand1 * 100) / totVotos
        this.percentualCand2 = (votosCand2 * 100) / totVotos
        this.percentualBrancosOuNulos = (votosBrancosOuNulos * 100) / totVotos
        limpar()

        if(this.percentualCand1 > this.percentualCand2){
            percentualVencedor.innerHTML = `${this.percentualCand1.toFixed(1)}%`
            percentualDerrotado.innerHTML = `${this.percentualCand2.toFixed(1)}%`
            percentualBrancosENulos.innerHTML = `${this.percentualBrancosOuNulos.toFixed(1)}%`
            fotoVencedor.src = candidato1.fotoPresidente
            nomeVencedor.innerHTML = candidato1.nome
            partidoVencedor.innerHTML = candidato1.partido
            fotoDerrotado.src = candidato2.fotoPresidente
            nomeDerrotado.innerHTML = candidato2.nome
            partidoDerrotado.innerHTML = candidato2.partido
        }else{
            percentualVencedor.innerHTML = `${this.percentualCand2.toFixed(1)}%`
            percentualDerrotado.innerHTML = `${this.percentualCand1.toFixed(1)}%`
            percentualBrancosENulos.innerHTML = `${this.percentualBrancosOuNulos.toFixed(1)}%`
            fotoVencedor.src = candidato2.fotoPresidente
            nomeVencedor.innerHTML = candidato2.nome
            partidoVencedor.innerHTML = candidato2.partido
            fotoDerrotado.src = candidato1.fotoPresidente
            nomeDerrotado.innerHTML = candidato1.nome
            partidoDerrotado.innerHTML = candidato1.partido
        }
    }
}

//Guia de ver candidatos
function verCadidatos(){
    urna.style.display = 'none'
    painelCandidatos.style.display = 'block'
}

function retornarUrna(){
    urna.style.display = 'flex'
    painelCandidatos.style.display = 'none'
}

let mostrarInfoCand1 = document.querySelector('#card-candidato-1-info')
let mostrarInfoCand2 = document.querySelector('#card-candidato-2-info')
let voltarInfoNormalCand1 = document.querySelector('#card-candidato-1')
let voltarInfoNormalCand2 = document.querySelector('#card-candidato-2')

let revelarInformacoesCand1 = _ => {
    voltarInfoNormalCand1.style.display = 'none'
    mostrarInfoCand1.style.display = 'flex'
}

let retornarInformacoesCand1 = _ => {
    voltarInfoNormalCand1.style.display = 'flex'
    mostrarInfoCand1.style.display = 'none'
}

let revelarInformacoesCand2 = _ => {
    voltarInfoNormalCand2.style.display = 'none'
    mostrarInfoCand2.style.display = 'flex'
}

let retornarInformacoesCand2 = _ => {
    voltarInfoNormalCand2.style.display = 'flex'
    mostrarInfoCand2.style.display = 'none'
}

//Guia de finalizar votação
function finalizarVotacao(){
    if(votosCand1 == votosCand2 || (votosCand1 == 0 && votosCand2 == 0)){
        alert('Candidatos empatados e/ou não votados, continue a votação!')
    }else{
        let perc1Final = this.percentualCand1
        let perc2Final = this. percentualCand2
        let percVencFinal
        let percDerrotFinal
        if(perc1Final > perc2Final){
            percVencFinal = perc1Final
            percDerrotFinal = perc2Final
        }else{
            percVencFinal = perc2Final
            percDerrotFinal = perc1Final
        }
        encherBarraVenc(percVencFinal)
        encherBarraDerrot(percDerrotFinal)
        principal.style.display = 'none'
        resultadoFinal.style.display = 'block' 
    }
}

let dezV = document.querySelector('#dezV')
let vinteV = document.querySelector('#vinteV')
let trintaV = document.querySelector('#trintaV')
let quarentaV = document.querySelector('#quarentaV')
let cinquentaV = document.querySelector('#cinquentaV')
let sessentaV = document.querySelector('#sessentaV')
let setentaV = document.querySelector('#setentaV')
let oitentaV = document.querySelector('#oitentaV')
let noventaV = document.querySelector('#noventaV')
let cemV = document.querySelector('#cemV')

let dezD = document.querySelector('#dezD')
let vinteD = document.querySelector('#vinteD')
let trintaD = document.querySelector('#trintaD')
let quarentaD = document.querySelector('#quarentaD')
let cinquentaD = document.querySelector('#cinquentaD')
let sessentaD = document.querySelector('#sessentaD')
let setentaD = document.querySelector('#setentaD')
let oitentaD = document.querySelector('#oitentaD')
let noventaD = document.querySelector('#noventaD')
let cemD = document.querySelector('#cemD')

function encherBarraVenc(perc){
    if(perc > 0 && perc <= 10){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 20){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 30){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 40){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            quarentaV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            quarentaV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 50){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            quarentaV.style.background = 'green'
            cinquentaV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            quarentaV.style.background = 'red'
            cinquentaV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 60){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            quarentaV.style.background = 'green'
            cinquentaV.style.background = 'green'
            sessentaV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            quarentaV.style.background = 'red'
            cinquentaV.style.background = 'red'
            sessentaV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 70){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            quarentaV.style.background = 'green'
            cinquentaV.style.background = 'green'
            sessentaV.style.background = 'green'
            setentaV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            quarentaV.style.background = 'red'
            cinquentaV.style.background = 'red'
            sessentaV.style.background = 'red'
            setentaV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 80){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            quarentaV.style.background = 'green'
            cinquentaV.style.background = 'green'
            sessentaV.style.background = 'green'
            setentaV.style.background = 'green'
            oitentaV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            quarentaV.style.background = 'red'
            cinquentaV.style.background = 'red'
            sessentaV.style.background = 'red'
            setentaV.style.background = 'red'
            oitentaV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else if(perc <= 90){
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            quarentaV.style.background = 'green'
            cinquentaV.style.background = 'green'
            sessentaV.style.background = 'green'
            setentaV.style.background = 'green'
            oitentaV.style.background = 'green'
            noventaV.style.background = 'green'
            cemV.style.background = 'antiquewhite'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            quarentaV.style.background = 'red'
            cinquentaV.style.background = 'red'
            sessentaV.style.background = 'red'
            setentaV.style.background = 'red'
            oitentaV.style.background = 'red'
            noventaV.style.background = 'red'
            cemV.style.background = 'antiquewhite'
        }
    }else{
        if(this.percentualCand1 > this.percentualCand2){
            dezV.style.background = 'green'
            vinteV.style.background = 'green'
            trintaV.style.background = 'green'
            quarentaV.style.background = 'green'
            cinquentaV.style.background = 'green'
            sessentaV.style.background = 'green'
            setentaV.style.background = 'green'
            oitentaV.style.background = 'green'
            noventaV.style.background = 'green'
            cemV.style.background = 'green'
        }else{
            dezV.style.background = 'red'
            vinteV.style.background = 'red'
            trintaV.style.background = 'red'
            quarentaV.style.background = 'red'
            cinquentaV.style.background = 'red'
            sessentaV.style.background = 'red'
            setentaV.style.background = 'red'
            oitentaV.style.background = 'red'
            noventaV.style.background = 'red'
            cemV.style.background = 'red'
        }
    }
}

function encherBarraDerrot(perc){
    if(perc == 0){
        
    }else if(perc <= 10){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 20){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 30){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 40){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            quarentaD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            quarentaD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 50){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            quarentaD.style.background = 'green'
            cinquentaD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            quarentaD.style.background = 'red'
            cinquentaD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 60){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            quarentaD.style.background = 'green'
            cinquentaD.style.background = 'green'
            sessentaD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            quarentaD.style.background = 'red'
            cinquentaD.style.background = 'red'
            sessentaD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 70){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            quarentaD.style.background = 'green'
            cinquentaD.style.background = 'green'
            sessentaD.style.background = 'green'
            setentaD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            quarentaD.style.background = 'red'
            cinquentaD.style.background = 'red'
            sessentaD.style.background = 'red'
            setentaD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 80){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            quarentaD.style.background = 'green'
            cinquentaD.style.background = 'green'
            sessentaD.style.background = 'green'
            setentaD.style.background = 'green'
            oitentaD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            quarentaD.style.background = 'red'
            cinquentaD.style.background = 'red'
            sessentaD.style.background = 'red'
            setentaD.style.background = 'red'
            oitentaD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else if(perc <= 90){
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            quarentaD.style.background = 'green'
            cinquentaD.style.background = 'green'
            sessentaD.style.background = 'green'
            setentaD.style.background = 'green'
            oitentaD.style.background = 'green'
            noventaD.style.background = 'green'
            cemD.style.background = 'antiquewhite'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            quarentaD.style.background = 'red'
            cinquentaD.style.background = 'red'
            sessentaD.style.background = 'red'
            setentaD.style.background = 'red'
            oitentaD.style.background = 'red'
            noventaD.style.background = 'red'
            cemD.style.background = 'antiquewhite'
        }
    }else{
        if(this.percentualCand1 < this.percentualCand2){
            dezD.style.background = 'green'
            vinteD.style.background = 'green'
            trintaD.style.background = 'green'
            quarentaD.style.background = 'green'
            cinquentaD.style.background = 'green'
            sessentaD.style.background = 'green'
            setentaD.style.background = 'green'
            oitentaD.style.background = 'green'
            noventaD.style.background = 'green'
            cemD.style.background = 'green'
        }else{
            dezD.style.background = 'red'
            vinteD.style.background = 'red'
            trintaD.style.background = 'red'
            quarentaD.style.background = 'red'
            cinquentaV.style.background = 'red'
            sessentaV.style.background = 'red'
            setentaD.style.background = 'red'
            oitentaD.style.background = 'red'
            noventaD.style.background = 'red'
            cemD.style.background = 'red'
        }
    }
}