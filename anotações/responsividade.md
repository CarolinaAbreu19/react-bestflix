# Responsividade

## Layout fixo

* Os layouts fixos são aqueles onde nós definimos alturas e larguras fixas
* Por exemplo, uma imagem com `width: 300px`
  * Uma definição como essa faz com que essa imagem tenha 300px em qualquer tipo de tela
* Só que existem diversos tipo de tela, com tamanhos e densidades diferentes
* Portanto, essa abordagem geralmente não é a melhor

## Layout fluido

* Resumidamente, um layout fluido faz exatamente o que o nome diz: flui com o tamanho da tela do usuário
* Podemos afirmar também que o layout fluido faz com que o layout seja visto igual en várias telas, porém com uma adaptação para que os elementos se encaixem em diversas telas

## Layout responsivo

* Já em layouts responsivos, nós temos uma "resposta" para cada "tamanho" de dispositivo
* Geralmente os layouts responsivos possuem um princípio conhecido como "mobile first", onde o site começa a ser desenvolvido do menor dispositivo para o maior

------

## O que é um pixel?

* O pixel é uma unidade de medida
* São pequenos pontos luminosos em nossas telas, seja computador, smartphone, televisão, smart watch, etc.
* O pixel que usamos no css, abreviado para `px`, não corresponde efetivamente aos pixels do hardware do seu monitor
* Os pixels do css são carinhosamente chamados de pixel de referência e geralmente é maior que o pixel do hardware

# Medidas relativas

## Porcentagem

* A porcentagem, apesar de não ser uma medida, é uma das abordagens mais utilizadas para trabalhar com layouts responsivos e fluidos
* Ela permite definirmos tamanhos relativos a um contexto pai
* Por exemplo, se uma div tem `width: 960px`e uma div interna foi definida com `width: 50%`, a div interna (filha) terá uma largura de 480px

## Atenção!

* Quando falamos que as medidas são relativas, pensamos: relativas ao quê?
* O que define o tamanho base para as medidas relativas é o `font-size`

## Rem

* Uma das medidas relativas mais usada atualmente é o `rem`, pois ele se baseia no tamanho da fonte definida na tag `html`
* Desse modo, quando é feito uma alteração no tamanho da fonte na tag `html`, há o reflexo no restante do código

# Media queries

* A consulta de medias é uma técnica que foi adicionada ao css3
* Os media queries são maneiras de nós demarcarmos no nosso css quando vamos aplicar um estilo ou não, baseado numa regra que é escolhida por nós

```css
@media only screen and (max-width: 600px) {
  body {
    background-color: #808080;
  }
}
```
* @media: para dizer que vamos escrever uma media querie
* Only screen: as regras serão aplicadas somente para telas
* and (max-width: 600px): o css dentro das chaves será aplicado enquanto o tamanho da tela for menor que 600px

## IMPORTANTE

* Media queries devem ser adicionadas ao final do arquivo css