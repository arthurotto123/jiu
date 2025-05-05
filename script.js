



let timerInterval;

        function addPoints(buttonId) {
            let pointsElement;
            let pointsToAdd;

            switch (buttonId) {
                case 1:
                    pointsElement = document.getElementById('points1');
                    pointsToAdd = 2;
                    break;
                case 2:
                    pointsElement = document.getElementById('points1');
                    pointsToAdd = 3;
                    break;
                case 3:
                    pointsElement = document.getElementById('points1');
                    pointsToAdd = 4;
                    break;
                case 4:
                    pointsElement = document.getElementById('points2');
                    pointsToAdd = 2;
                    break;
                case 5:
                    pointsElement = document.getElementById('points2');
                    pointsToAdd = 3;
                    break;
                case 6:
                    pointsElement = document.getElementById('points2');
                    pointsToAdd = 4;
                    break;
            }

            const currentPoints = parseInt(pointsElement.textContent);
            pointsElement.textContent = currentPoints + pointsToAdd;
        }

        function resetPoints() {
            document.getElementById('points1').textContent = 0;
            document.getElementById('points2').textContent = 0;
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = "Tempo: 0:00";
            document.getElementById('finalMessage').textContent = ""; // Limpa a mensagem final
        }

        function startTimer() {
            const tempoUsuario = parseInt(document.getElementById('tempoUsuario').value);
            
            if (isNaN(tempoUsuario) || tempoUsuario <= 0) {
                alert("Por favor, insira um tempo válido em minutos.");
                return;
            }
        
            let timeRemaining = tempoUsuario * 60; // transforma em segundos
            const timerElement = document.getElementById('timer');
        
            clearInterval(timerInterval); // Garante que não existam múltiplos cronômetros
            timerInterval = setInterval(() => {
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timerElement.textContent = `Tempo: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    declareWinner();
                }
        
                timeRemaining--;
            }, 1000);
        }

        function declareWinner() {
            const points1 = parseInt(document.getElementById('points1').textContent);
            const points2 = parseInt(document.getElementById('points2').textContent);
            const finalMessage = document.getElementById('finalMessage');
        
            // Limpa o conteúdo anterior da mensagem final
            finalMessage.innerHTML = "";
        
            let message = "";
            let imageSrc = "";
            
        
            if (points1 > points2) {
                message = "Lutador Azul é o vencedor!";
                imageSrc = "imgs/ChatGPT_Image_19_de_abr._de_2025__00_18_11-removebg-preview (1).png"; 
            } else if (points2 > points1) {
                message = "Lutador Vermelho é o Preto!";
                imageSrc = "imgs/ChatGPT_Image_19_de_abr._de_2025__00_24_56-removebg-preview.png"; 
            } else {
                message = "Empate por pontuação!";
                imageSrc = "imgs/empate.png"; 
            }
        
            // Adiciona a mensagem de texto
            const textElement = document.createElement("p");
            textElement.textContent = message;
            finalMessage.appendChild(textElement);
        
            // Adiciona a imagem
            const imageElement = document.createElement("img");
            imageElement.src = imageSrc;
            imageElement.alt = message;
            imageElement.style.width = "200px";
            imageElement.style.height = "200px" // 
            imageElement.style.marginTop = "10px";
            finalMessage.appendChild(imageElement);
        }


       // muda o tema de fundo, alternando entre a imagem escura e a clara.

        let tema1 = "imgs/Linhas Neônicas Geométricas Futuristas.png";

        let tema2 = "imgs/Quadro Futurista com Formas Geométricas.png";

        let claro = true;



        function tema(){
            const btbl = document.querySelectorAll('.bt1');
            
            const btns1 = document.querySelectorAll(".btns2");
            

            if (claro) {
                document.body.style.backgroundImage = `url('${tema1}')`;
                btbl.forEach(btbl =>{
                    btbl.style.backgroundColor = "rgba(56, 47, 47, 0.26)";
                 });


                btns1.forEach(btns1 =>{
                    btns1.style.backgroundColor = "rgb(150, 235, 23)";
                    btns1.style.boxShadow = "0 2px 2px rgb(150, 235, 23)";
                   
                });
                    
                
              } else {
                document.body.style.backgroundImage = `url('${tema2}')`;
                 btbl.forEach(btbl =>{
                    btbl.style.backgroundColor = "#90C7C9";
                 });

                 btns1.forEach(btns1 =>{
                    btns1.style.backgroundColor = 
                    "#90C7C9";
                    btns1.style.boxShadow = "0 2px 2px #90C7C9";
                    

                 });

                 
                
            
                
               
              }
        
              claro = !claro;

        }


