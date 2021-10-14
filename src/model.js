function Unit (name, cssClass) {
	this.name = name || '';
	this.cssClass = cssClass || '';
	this.toString = function() {
		return '<div title="' + this.name + '" class="cell ' + this.cssClass + '"></div>';
	}
}

function Riddle (html, answer) {
	this.html = html;
	this.answer = answer;
	this.check = function (input) {
		return input.toLowerCase() == this.answer.toLowerCase();
	}
	this.toString = function() {
		return '<div>' + this.html + '</div>';
	}
}

function Dragon(name, cssClass, riddles) {
	Unit.call(this, name, cssClass);
	this.riddle = riddles[Math.floor(Math.random() * riddles.length)];
}

function GoldenDragon () {
	var riddles = [
		new Riddle ('What is thrown when it is necessary, and raised when it is no longer needed?', 'Anchor'),
		new Riddle ('It is always in front of us, but we cannot see it. What is it?', 'Future'),
		new Riddle ('What does a person wear twice in his life for free, and pay for the third time?', 'Teeth')
	];
	Dragon.call(this, 'Golden Dragon', 'golden-dragon', riddles);
}

function BlackDragon () {
	var riddles = [
		new Riddle ('You cannot find its roots, <br/> The top is higher than the poplars. <br/> It goes up steeper - <br/> It does not grow.', 'Mountain'),
		new Riddle ('She shouts without a voice, <br/> Without wings - but flies, <br/> And whistles without a mouth, <br/> And bites without teeth.', 'Wind'),
		new Riddle ('You can\'t see it, can\'t hold it in your hands, <br/> Can\'t hear it with your ear, can\'t smell it. <br/> Reigns over the heavens, lurks in every hole. <br/> It was in the beginning and will be after all. <br/> It ends any life and kills laughter.', 'Darkness'),
		new Riddle ('It devours everything around: <br/> The beast, bird, forest and house. <br/> Steel will gnaw, iron will eat away, <br/> A strong stone will destroy, <br/> His power is strongest, <br/> Even the power of kings ...', 'Time')
	];
	Dragon.call(this, 'Black Dragon', 'black-dragon', riddles);
}

function FairyDragon () {
	var riddles = [
		new Riddle ('The nose is round, with a snout, <br/> It is convenient for them to dig in the ground, <br/> A small crochet tail, <br/> Instead of shoes - hooves. <br/> Three of them - and what are they <br/> Friendly brothers are similar . <br/> Guess without a clue, <br/> Who are the heroes of this tale?', 'Three piglings'),
		new Riddle ('The father had a strange boy, <br/> Unusual - wooden. <br/> But father loved his son. <br/> What a strange <br/> Wooden man <br/> On the ground and under water <br/> Looking for is the golden key? <br/> Everywhere he sticks his nose long. <br/> Who is it?', 'Pinoccio'),
		new Riddle ('Heals small children, <br/> Heals birds and animals, <br/> He looks through his glasses <br/> Good doctor ...', 'Aibolit'),
		new Riddle ('Near the forest, at the edge of <br/> Three of them live in a hut. <br/> There are three chairs and three mugs. <br/> Three beds, three pillows. <br/> Guess without a hint, <br/> Who are the heroes this fairy tale?', 'Three bears')
	];
	Dragon.call(this, 'Fairy Dragon', 'fairy-dragon', riddles);
}

function RustDragon () {
	var riddles = [
		new Riddle ('What is the name of the fear of Santa Claus?', 'Claustrophobia'),
		new Riddle ('What should you do when you see a green man?', 'Cross the street'),
		new Riddle ('What notes can be used to measure the distance?', 'Miles')
	];
	Dragon.call(this, 'Rust Dragon', 'rust-dragon', riddles);
}

function CrystalDragon () {
	var riddles = [
		new Riddle ('No arms, no legs, <br/> But he knows how to draw.', 'Frost'),
		new Riddle ('Doesn\'t burn in fire, <br/> Doesn\'t sink in water.', 'Ice'),
		new Riddle ('Not the sea, not the land, <br/> Ships don\'t float, <br/> But you can\'t walk.', 'Swamp')
	];
	Dragon.call(this, 'Crystal Dragon', 'crystal-dragon', riddles);
}

function AzureDragon () {
	var riddles = [
		new Riddle ('2+2?', '4'),
		new Riddle ('2+2?', '4'),
		new Riddle ('2+2?', '4')
	];
	Dragon.call(this, 'Azure Dragon', 'azure-dragon', riddles);
}

function makeDragon () {
	var type = Math.floor(Math.random() * 6);
	switch (type) {
		case 0:
			return new GoldenDragon();
		case 1:
			return new BlackDragon();
		case 2:
			return new FairyDragon();
		case 3:
			return new RustDragon();
		case 4:
			return new CrystalDragon();
		case 5:
			return new AzureDragon();
	}
}
