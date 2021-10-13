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
		new Riddle ('Что бросают тогда, когда это необходимо, и поднимают тогда, когда это уже не нужно?', 'Якорь'),
		new Riddle ('Оно всегда перед нами, но видеть его мы не можем. Что это?', 'Будущее'),
		new Riddle ('Что человек носит два раза в жизни бесплатно, а за третий раз платит?', 'Зубы')
	];
	Dragon.call(this, 'Золотой дракон', 'golden-dragon', riddles);
}

function BlackDragon () {
	var riddles = [
		new Riddle ('Не отыскать её корней,<br/>Верхушка выше тополей.<br/>Всё круче вверх она идёт -<br/>А не растёт.', 'Гора'),
		new Riddle ('Без голоса кричит,<br/>Без крыльев - а летает,<br/>И безо рта свистит,<br/>И без зубов кусает.', 'Ветер'),
		new Riddle ('Её не увидать, в руках не подержать,<br/>Не услышать ухом, не почуять нюхом.<br/>Царит над небесами, таится в каждой яме.<br/>Она была в начале и будет после всех.<br/>Любую жизнь кончает и убивает смех.', 'Тьма'),
		new Riddle ('Пожирает всё кругом:<br/>Зверя, птицу, лес и дом.<br/>Сталь сгрызёт, железо сгложет,<br/>Крепкий камень уничтожит,<br/>Власть его всего сильней,<br/>Даже власти королей.', 'Время')
	];
	Dragon.call(this, 'Черный дракон', 'black-dragon', riddles);
}

function FairyDragon () {
	var riddles = [
		new Riddle ('Носик круглый, пятачком,<br/>Им в земле удобно рыться,<br/>Хвостик маленький крючком,<br/>Вместо туфелек - копытца.<br/>Трое их - и до чего же<br/>Братья дружные похожи.<br/>Отгадайте без подсказки,<br/>Кто герои этой сказки?', 'Три поросенка'),
		new Riddle ('У отца был мальчик странный,<br/>Необычный - деревянный.<br/>Но любил папаша сына.<br/>Что за странный<br/>Человечек деревянный<br/>На земле и под водой<br/>Ищет ключик золотой?<br/>Всюду нос сует он длинный.<br/>Кто же это?', 'Буратино'),
		new Riddle ('Лечит маленьких детей,<br/>Лечит птичек и зверей,<br/>Сквозь очки свои глядит<br/>Добрый доктор ...', 'Айболит'),
		new Riddle ('Возле леса, на опушке<br/>Трое их живет в избушке.<br/>Там три стула и три кружки.<br/>Три кроватки, три подушки.<br/>Угадайте без подсказки,<br/>Кто герои этой сказки?', 'Три медведя')
	];
	Dragon.call(this, 'Сказочный дракон', 'fairy-dragon', riddles);
}

function RustDragon () {
	var riddles = [
		new Riddle ('Как называется боязнь прихода Санта-Клауса?', 'Клаустрафобия'),
		new Riddle ('Что нужно делать, когда видишь зеленого человечка?', 'Переходить улицу'),
		new Riddle ('Какими нотами можно измерить расстояние?', 'Милями')
	];
	Dragon.call(this, 'Ржавый дракон', 'rust-dragon', riddles);
}

function CrystalDragon () {
	var riddles = [
		new Riddle ('Без рук, без ног,<br/>А рисовать умеет.', 'Мороз'),
		new Riddle ('В огне не горит,<br/>В воде не тонет.', 'Лед'),
		new Riddle ('Не море, не земля,<br/>Корабли не плавают,<br/>А ходить нельзя.', 'Болото')
	];
	Dragon.call(this, 'Кристалльный дракон', 'crystal-dragon', riddles);
}

function AzureDragon () {
	var riddles = [
		new Riddle ('Сколько будет 2+2?', '4'),
		new Riddle ('Сколько будет 2+2?', '4'),
		new Riddle ('Сколько будет 2+2?', '4')
	];
	Dragon.call(this, 'Лазурный дракон', 'azure-dragon', riddles);
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