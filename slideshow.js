let picCount = 0;

function nextPic(){

	picCount++;
	count();
	displayPic();

}

function prevPic(){

	picCount--;
	count();
	displayPic();

}

function displayPic(){

	document.getElementById("img").src = "pit" + picCount +".jpg"; 

}

function count(){
	if(picCount > 5){
		picCount=1;

	}
	if(picCount < 1){
		picCount=5;
	}
	

}