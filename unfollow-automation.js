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
  
  // Inicia o processo
  processUnfollow();
  