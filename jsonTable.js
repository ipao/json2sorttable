//var a=[{a:1,b:6},{a:3,b:4},{a:5,b:2}];
function jsonTable(json) {
	this.json = json;
	var order = {field: undefined, asc: 1};
	var addTo = this.addTo = function(el) {
		var len = json.length;
		if(!len) return;
		var html = '<table class="jsonTable"><thead><tr>';
		for(var key in json[0]) {
			html += '<td><a href="#" class="header">' + key + '</a>' +
				(order.field == key ? (order.asc == 1 ? '^' : 'v') : '') +
				'</td>';
		}
		html += '</tr></thead><tbody>';
		for(var i = 0; i < len; i++) {
			html += '<tr>';
			for(var key in json[i]) {
				html += '<td>' + json[i][key] + '</td>';
			}
			html += '</tr>';
		}
		el.innerHTML = html + '</tbody></table>';
		var head = document.getElementsByClassName('header');
		len = head.length;
		for(var i = 0; i < len; i++) {
			head[i].onclick = function() {
				sortWith(this.innerHTML, el);
			};
		}
	}
	var sortWith = this.sortWith = function(field, el) {
		if(order.field == field) order.asc *= -1;
		else order = {field: field, asc: 1};
		if(isNaN(json[0][field])) {
			json.sort(function (a, b) { 
				return (a[field].localeCompare(b[field]) || -1) * order.asc;
			});
		}
		else {
			json.sort(function (a, b) { 
				return (Number(a[field]) - Number(b[field]) || -1) * order.asc;
			});
		}
		addTo(el);
	}
}
