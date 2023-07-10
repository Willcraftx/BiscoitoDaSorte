const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnReset = document.querySelector("#btnReset");
const openCookie = document.querySelector("#img1");

openCookie.addEventListener("click", randomMessage);
btnReset.addEventListener("click", randomMessage);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    randomMessage();
  } else if (e.key == "Enter" && screen1.classList.contains("hide")) {
    randomMessage();
  }
});

function randomMessage() {
  toggleScreen()
  let randomNumber = Math.round(Math.random() * 10)

  switch(randomNumber) {
    case 0: screen2.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    break
    case 1: screen2.querySelector("p").innerText = "Nem todos os dias são bons, mas há algo bom em cada dia."
    break
    case 2: screen2.querySelector("p").innerText = "Siga confiante na direção dos seus sonhos. Viva a vida que imaginar."
    break
    case 3: screen2.querySelector("p").innerText = "Faça da alegria a maior certeza da sua vida, e o tempo se encarregará de permitir que grandes momentos aconteçam todos os dias."
    break
    case 4: screen2.querySelector("p").innerText = "Bom dia! Independentemente do que estiver sentindo, levante-se, vista-se e saia para brilhar."
    break
    case 5: screen2.querySelector("p").innerText = "Acredite no seu valor e prove a você mesmo que todos os sonhos são possíveis de alcançar."
    break
    case 6: screen2.querySelector("p").innerText = "Sinta carinho, goste, adore e ame! Mas, jamais precise de alguém pra ser feliz, além de você mesmo."
    break
    case 7: screen2.querySelector("p").innerText = "No tempo certo, tudo dará certo."
    break
    case 8: screen2.querySelector("p").innerText = "Atitude é uma coisa pequena que faz toda a diferença."
    break
    case 9: screen2.querySelector("p").innerText = "A persistência pode transformar um fracasso em um sucesso extraordinário!"
    break
    case 10: screen2.querySelector("p").innerText = "Não existe um caminho para a felicidade. A felicidade é o caminho."
    break
    default:
      break
    }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
