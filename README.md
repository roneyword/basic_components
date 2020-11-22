### Comandos

| Comando         | O que faz?                  | Observação                     |
| --------------- | --------------------------- | ------------------------------ |
| `npm install`   | Instala pacotes necessários | **Execute isso primeiro!**     |
| `npm start`     | Inicia o desenvolvimento    | Acesse `http://localhost:1234` |
| `npm run build` | Faz build do site           | Resultado na pasta `dist`      |

<!-- ====================================================================
- header
- carousel default
- carousel fadein
OBS. Precisa utilizar a estrutura HTML do modal -->
<!-- ====================================================================

<!-- ====================================================================
btn base
<!-- ====================================================================
DESCRIÇÃO: Necessita do mixins @mixin btn-base($bg: white, $color: white)
VARIAVEIS: background($bg), color($color).
TAGS: a, button
EXEMPLO: button {@include btn-base(yellow, black);}
<!-- ====================================================================

<!-- ====================================================================
btn redes sociais
<!-- ====================================================================
DESCRIÇÃO: Necessita do mixins '@mixin btn-rounded($bg, $color: white, $size: 50px)'
VARIAVEIS: background($bg), color($color), size($size)
TAGS: a, button
EXEMPLO: button {@include btn-rounded(purple, null, 50px);}
<!-- ====================================================================

<!-- ====================================================================
Modais
<!-- ====================================================================
DESCRIÇÃO: Necessita passar o efeito necessario no data-efect e o target(modal que ira abrir ao clicar) data-target.
VARIAVEIS: data-efect, data-target.
TAGS: a, button.
EXEMPLO: <button data-effect="fadeIn" data-target="modal1">fadeIn 😎</button>
OBS. Precisa utilizar a estrutura HTML do modal -->
<!-- ====================================================================

<!-- ====================================================================
Toast
<!-- ====================================================================
DESCRIÇÃO: Necessita invocar a função e passar os parametros
VARIAVEIS: type = "success, title="sucesso", text="Parabens", time=7000.
EXEMPLO: toast("error","Erro no campo","campo vazio",10000);
TAGS: Não precisa o mesmo é criado dinamicamente pelo js
<!-- ====================================================================

<!-- ====================================================================
Accordion
<!-- ====================================================================
DESCRIÇÃO: accordion padrão, só mostra o conteudo apos clicar em um dos "titulos", para fechar devera clicar novamente
ARQUIVOS: accordion.js, accordion.scss e estrutura HTML.
VARIAVEIS: Não utiliza.
EXEMPLO: Estrura HTML.
TAGS: Precisa utilizar a estrutura HTML do accordion.
<!-- ====================================================================
