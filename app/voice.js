const shotElement = document.getElementById('shot');

window.SpeechRecognition = window.SpeechRecognition ||
 webkitSpeechRecognition;

 const recognition = new SpeechRecognition();
 recognition.lang = 'pt-Br';
 recognition.start();

 recognition.addEventListener('result', onSpeak)

 function onSpeak(e) {
    shot = e.results[0][0].transcript;
    showShot(shot);
    checkShotValueIsValid(shot);
 }

 function showShot(shot) {
    shotElement.innerHTML = `
    <div>Você disse</div>
    <span class="box">${shot}</span>`
 }

 recognition.addEventListener('end', () => recognition.start())