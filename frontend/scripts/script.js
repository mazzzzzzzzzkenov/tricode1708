data = [
		["title1", "title2", "title3"],
		["Text 1", "Text 2", "text 3"],
		["images/bird.png", "images/dua_lipa.png", "images/brain.png"]
		]

for(var i = 0; i < 2; i++){
	parent_box = document.getElementById("third_info")
	card = document.getElementsByClassName("card")[0]
	card2 = card.cloneNode(true);
	parent_box.appendChild(card2)	
}
cards = document.getElementsByClassName("card")
for(var i = 0; i < cards.length; i++){
	cards[i].setAttribute("onmouseover", "change_style(" +i+ ")")
	cards[i].setAttribute("onmouseleave", "change_style2(" +i+ ")")
	header = cards[i].getElementsByClassName("card_header")[0]
	header.innerHTML = data[0][i]
	
	text = cards[i].getElementsByClassName("card_text")[0]
	text.innerHTML = data[1][i]

	card_img = cards[i].getElementsByClassName("card_img")[0]
	card_img.style.backgroundImage = "url("+data[2][i]+")"
}

function change_style(num){
	card_img = cards[num].getElementsByClassName('card_img')[0]
	card_img.style.opacity = 0.5;
	hidden_text = card_img.getElementsByClassName("card_hidden_text")[0]
	hidden_text.style.display = "block"
}

function change_style2(num){
	card_img = cards[num].getElementsByClassName('card_img')[0]
	card_img.style.opacity = 1;
	hidden_text = card_img.getElementsByClassName("card_hidden_text")[0]	
	hidden_text.style.display = "none"
}

// fill_data()
// function fill_data() {
// 	js_block = document.getElementById("js_block")
// 	card2 = js_block.getElementsByClassName("card2")[0]
// 	for(var i = 0; i < data2.length; i++){
// 		for (var j = 0; j < data2[i].length; j++){
// 			newcard = card2.cloneNode(true)
// 			newcard.innerHTML = data2[i][j]
// 			js_block.appendChild(newcard)
// 		}
// 	}
// }

function get_data() {
    response = fetch("http://cerebrium.kz/api/data_finance/?name=arsen&id=5");
    response.json().then(data => {
        alert(data.fm)
    })
}