document.addEventListener('DOMContentLoaded', function () {
	var field = document.getElementById('field');
	var dialog = document.getElementById('dialog');
	var knight = document.getElementById('knight');
	var game = new Game();
	
	game.addEventListener('change', function() {
		render(this, field, dialog, knight);
	});
	
	dialog.addEventListener('submit', function (e) {
		e.preventDefault();
		game.check(this.answer.value);
	});

	window.addEventListener('keyup', function(e) {
		switch (e.keyCode) {
			case 37: game.move(-1, 0);
			break;
			case 38: game.move(0, -1);
			break;
			case 39: game.move(1, 0);
			break;
			case 40: game.move(0, 1);
			break;
		}
	});
	
	game.start();
});

function Game () {
	this.map = [
		[ new Unit(),   makeDragon(), makeDragon(), makeDragon(), makeDragon() ],
		[ makeDragon(), makeDragon(), makeDragon(), makeDragon(), makeDragon() ],
		[ makeDragon(), makeDragon(), makeDragon(), makeDragon(), makeDragon() ],
		[ makeDragon(), makeDragon(), makeDragon(), makeDragon(), makeDragon() ],
		[ makeDragon(), makeDragon(), makeDragon(), makeDragon(), makeDragon() ],
		[ makeDragon(), makeDragon(), makeDragon(), makeDragon(), new Unit('Finish', 'camp') ]
	];
	this.x = 0;
	this.y = 0;
	this.unit = this.map[0][0];
	this.move = function (dx, dy) {
		var x = this.x + dx;
		var y = this.y + dy;
		if (
			this.unit.name == '' &&
			this.map[y] !== undefined &&
			this.map[y][x] !== undefined
		) {
			this.x = x; this.y = y;
			this.unit = this.map[y][x];
			this.map[y][x] = new Unit();
			this._fireEvent('change');
		}
	}
	this.check = function (input) {
		if (this.unit.riddle.check(input)) {
			this.unit = new Unit();
			this._fireEvent('change');
		}
	}
	this.start = function () {
		this._fireEvent('change');
	}
	this.addEventListener = function (type, callback) {
		if (typeof callback == 'function') {
			this._callbacks.push({
				type: type,
				callback: callback.bind(this)
			});
		}
	}
	this._callbacks = [];
	this._fireEvent = function (type) {
		this._callbacks.forEach(function(listener) {
			listener.type == type && listener.callback();
		});
	}
}

function render(game, field, dialog, knight) {
	knight.style.left = game.x * CELL_WIDTH + 'px';
	knight.style.top = game.y * CELL_HEIGHT + 'px';
		
	dialog.innerHTML = game.unit.riddle ?
		'<div><h2>' + game.unit.name + ' asks:</h2>' + game.unit.riddle + '<input name="answer"/><button type="submit">Answer</button></div>' : '';
	
	field.innerHTML = game.map.reduce(function(html, row) {
		return html += row.join('');
	}, '');
}
