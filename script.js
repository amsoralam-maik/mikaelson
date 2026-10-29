const message = `Buat tasya.\nAku alam mau minta maaf karena manggil kamu ndut.\n\naku manggil kamu ndut tuh cuman bercanda aja sama kamu,iya tau walaupun bercanda juga tetep buat insecure.”\n\nAku janji engga bakal manggil kamu ndut lagi\n\nJadi ini terakhir kali aku panggil kamu ndut,maafin yahh.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}