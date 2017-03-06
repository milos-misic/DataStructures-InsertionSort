var 	t0,
		t1,
		t2,
		randomArray,
		randomArea			= document.querySelector('#random-array'),
		arraySize				= document.getElementById('array-size'),
		ascRadio 				= document.querySelector('#asc-radio'),
		descRadio 			= document.querySelector('#desc-radio'),
		ascNumbersArea 		= document.querySelector('#asc-numbers'),
		descNumbersArea 	= document.querySelector('#desc-numbers'),
		ascTimeArea			= document.getElementById('asc-time'),
		descTimeArea		= document.getElementById('desc-time');

//Reset
document.getElementById('reset').addEventListener('click', function() {
	ascNumbersArea.textContent = "";
	descNumbersArea.textContent = "";
	randomArea.textContent = "";
	ascTimeArea.textContent = "";
	descTimeArea.textContent = "";
	arraySize.value = "";
	disableButtons ();
});

//Random array
document.querySelector('#random').addEventListener('click', function (){
	randomArray =  new Array ();
	limit = parseInt(arraySize.value);
	if(isNaN(limit) || limit === 0) {
		alert('Please enter proper array size that is not empty, character or zero.');
	} else {
		for (var i = 0; i < limit; i++) {
			randomArray.push(Math.floor(Math.random()*limit + 1));
			randomArea.textContent = randomArray;
		}
	}
	if(randomArray.length > 0) {
		enableButtons();
		ascNumbersArea.textContent = "";
		descNumbersArea.textContent = "";
		ascTimeArea.textContent = "";
		descTimeArea.textContent = "";
	} 
});

//InsertionSort
document.querySelector('#test').addEventListener('click', function () {
	t0 = performance.now(); //Performance start
	var i, j, comparingCard;
	//Ascending
	for (j = 1; j <= randomArray.length; j++) {
		comparingCard = randomArray[j];
		i = j-1;
		if (ascRadio.checked) {
			while (i > -1 && randomArray[i] > comparingCard) {
				randomArray[i+1] = randomArray[i];
				randomArray[i] = comparingCard;
				i--;
			}
			ascNumbersArea.textContent = randomArray;
			descNumbersArea.textContent =  "";
		} 
	//Descending
		else {
			while (i > -1 && randomArray[i] < comparingCard) {
				randomArray[i+1] = randomArray[i];
				randomArray[i] = comparingCard;
				i--;
			}
			descNumbersArea.textContent = randomArray;
			ascNumbersArea.textContent = "";
		}
	}
	t1 = performance.now(); //Performance end
	t2 = (t1 - t0)/1000;
	if(ascRadio.checked) {
		ascTimeArea.textContent = "The execution takes " + t2 + " seconds";
		descTimeArea.textContent = "";
	}else {
		descTimeArea.textContent = "The execution takes " + t2 + " seconds";
		ascTimeArea.textContent = "";
	}
});

//Enable Buttons
function enableButtons() {
	document.getElementById('reset').disabled = false;
	document.getElementById('test').disabled = false;
	ascRadio.disabled = false;
	descRadio.disabled = false;
}
//Disable Buttons
function disableButtons () {
	document.getElementById('reset').disabled = true;
	document.getElementById('test').disabled = true;
	ascRadio.disabled = true;
	descRadio.disabled = true;
}
	 
//Menu
jQuery(document).ready(function($) {
 $('#menuButton').click(function() {
	$('.menu').animate({"left":"0px"}, 500);
});	
$('#closeButton').click(function() {
	$('.menu').animate({"left":"-200px"}, 500);
});
}(jQuery));
