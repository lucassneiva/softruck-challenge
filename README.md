# softruck-challenge

Este projeto foi desenvolvido com as ferramentas do Reactjs em conjunto com o Google Map React.

Através da feature lucassneiva-softruck-app minha lógica foi estruturada.

O React foi escolhido por ser uma ferramenta que eu gosto muito de usar, além de ter boa performance e possibilitar a escrita de um código conciso, limpo e componentes reutilizáveis.

O Google Map React foi escolhido para dar uma melhor contextualização do marcador que estava sendo renderizado, diante sua localização geográfica, devidamente.

Em primeiro lugar, achei interessante declarar um estado, iniciando como um array vazio, que deveria ser populado através da iteração dos dados do array em suas posições específicas, tanto latitudinal quanto longitudinal, cada uma sendo salva em um estado diferente.

Através desse array populado com os dados, sequenciadamente indicando a nova posição do marcador, através das propriedades lat e lng, o mesmo seria renderizado, cada vez que houvesse uma mudança no seu respectivo estado(a cada vez que uma nova coordenada é adicionada), em um local diferente no mapa. Este dinamismo estaria acontecendo com o uso do effect.
