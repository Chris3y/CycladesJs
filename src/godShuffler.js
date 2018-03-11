
const prompt = require('prompt');

var theGods = [
 	{ 
		name: 'Zeus',
		colour: 'purple'
	},
	{ 
		name: 'Kronus', 
		colour: 'brown'
	},	
	{ 
		name: 'Athena',
		colour: 'white'
	},
	{ 
		name: 'Ares',
		colour: 'orange'
	},
	{ 
		name: 'Poseidon',
		colour: 'blue'
	}	
];

var playerCount = 4;
var hiddenGods = [];

function shuffle(gods) {
	var a = gods;
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;
}

function sort(){
	var gods = shuffle(theGods);
	var apollo = 1;
	var hiddenGodCount = (gods.length + apollo) - playerCount;

	if (hiddenGods.length > 0 && hiddenGodCount > 0) {
		for (var i = 0; i < hiddenGodCount; i++) {
			gods.unshift(hiddenGods.pop());
		}
	}

	hiddenGods = [];	
	for (var i = 0; i < hiddenGodCount && hiddenGods; i++) {
		hiddenGods.push(gods.pop());
	}

	return { shown: gods, hidden: hiddenGods };
}

function display(){
	var gods = sort();

	console.log('');
	console.log('GODS:');
	for (var i = 0; i < gods.shown.length; i++) {
		console.log(gods.shown[i].name);
	}

	console.log('');
	console.log('HIDDEN GODS:');
	for (var i = 0; i < gods.hidden.length; i++) {
		console.log(gods.hidden[i].name);
	}
}

var times = 0

while(times < 10) {	
 
	display();
	times++;
}

