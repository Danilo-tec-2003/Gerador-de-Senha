export default function geradorSenha() {
    let senha: string = ''

    let caracteres: string = 'Aa@BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxWwYyZz01111222233334445556789#$'
    let tamanhoSenha = 8

    for(let index = 0; index  <8; index++) {
    senha += caracteres.charAt(
     Math.floor( Math.random() * caracteres.length)  
    )
    }

    return senha
}