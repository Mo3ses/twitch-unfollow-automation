# Twitch Unfollow Automation

Este repositório contém um script em JavaScript para automatizar a interação com os botões de "Unfollow" na Twitch. Ele funciona diretamente na página de canais seguidos.

## Como usar

1. **Certifique-se de que a Twitch está configurada em português.**  
   O script foi desenvolvido para reconhecer os textos e botões em português. Caso esteja usando outro idioma, altere o idioma da Twitch no rodapé da página para "Português".

2. Acesse a [página de canais seguidos na Twitch](https://www.twitch.tv/directory/following/channels).

3. Pressione `F12` para abrir o console do navegador (normalmente na aba "Console").

4. Copie o script abaixo:

   ```javascript
   // Função principal para automatizar unfollows
   function processUnfollow() {
     // Seleciona o primeiro botão de "Unfollow" disponível
     let unfollowButton = document.body.querySelector('[data-a-target="unfollow-button"]');
     
     if (unfollowButton) {
       unfollowButton.click(); // Clica no botão "Unfollow"
       console.log('Clicou no botão Unfollow. Aguardando o modal...');
       
       // Aguarda o carregamento do modal de confirmação
       setTimeout(() => {
         let confirmButton = Array.from(document.body.querySelectorAll('[data-a-target="tw-core-button-label-text"]'))
           .find(el => el.textContent.trim() === 'Sim, quero deixar de seguir');
         
         if (confirmButton) {
           confirmButton.click(); // Clica no botão de confirmação
           console.log('Confirmação de unfollow realizada com sucesso!');
           
           // Aguarda um curto período para garantir que o DOM seja atualizado
           setTimeout(() => {
             processUnfollow(); // Procura o próximo botão de "Unfollow"
           }, 1000);
         } else {
           console.warn('Botão de confirmação "Sim, quero deixar de seguir" não encontrado.');
         }
       }, 1000); // Aguarda 1 segundo para o modal carregar
     } else {
       console.log('Não há mais botões de "Unfollow" disponíveis.');
     }
   }
   
   // Inicia o processo na página da Twitch
   processUnfollow();

5. Cole o script no console e pressione Enter.

6. O script processará automaticamente os botões de "Unfollow" na página.
