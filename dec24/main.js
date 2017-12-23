
var page = 1;
$("#btn").click(function(){
    $.ajax({
    	url: `https://learnwebcode.github.io/json-example/animals-${page}.json`,
		type: 'GET',
		dataType: 'json',
	})
	.done(function(data) {
		render(data);
		page++;
		pageCnt(page);
	});
});
function render(obj) {
	$.each(obj, function(k, v) {
	var likes = '';
	var dislikes = '';
		$.each(v.foods.likes, function(index, el) {
			likes = likes +" "+ el;
		});
		$.each(v.foods.dislikes, function(index, el) {
			dislikes = dislikes +" "+ el;
		});
		var res = `${v.name} is a ${v.species} that likes to eat ${likes} but dislikes ${dislikes}`;
		var out = `<p>${res}</p>`;
		$('#animal-info').append(out);
	});
}
function pageCnt(page) {
	if (page > 3) {$("#btn").remove();}
}