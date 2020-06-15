//if the keyboard button that is pressed has a transform property in CSS 
//remove the 'playing' class (removes transformation elements)
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

//when a keyboard button is pressed, if that keycode 
//has audio associtated to it, play the audio file
function playSound (e) {
	//get audio of keycode associated with the keydown event
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	//get div with key class with keycode associated with the keydown event
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	//if there's no audio assiciated with that keydown then return nothing
	if (!audio) return;

	//add 'playing' class to turn transition on, 
	//start the audio from the beginning each time it's pressed, play the audio
	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}

//when transition ends, run the function removeTransition()
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//when a keyboard button is pressed, run the function playSound()
window.addEventListener('keydown', playSound);