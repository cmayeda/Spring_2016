var wrapper = document.getElementsByClassName('wrapper')[0];

console.log(wrapper);

var bands = [ 'Arcade Fire',
	'Muse', 
	'Coldplay',
	'Fleet Foxes',
	'The Shins']

var bandList = document.createElement('ul');

for(var i = 0; i < bands.length; i++) { 
	var addBand = document.createElement('li');
	addBand.innerHTML = bands[i];
	bandList.appendChild(addBand);
}

wrapper.appendChild(bandList); 

wrapper.addEventListener('click', function(element){ 
	element.target.className = 'favorite';
})