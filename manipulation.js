function update() {
    
    let borderRed = document.getElementById('r').value
    let borderGreen = document.getElementById('g').value
    let borderBlue = document.getElementById('b').value
    let borderWidth = document.getElementById('w').value

    let backgroundRed = document.getElementById('rb').value
    let backgroundGreen = document.getElementById('gb').value
    let backgroundBlue = document.getElementById('bb').value

    let p = document.getElementById("dummyText");

	p.style.borderColor = rgb(borderRed, borderGreen, borderBlue);

	p.style.borderWidth = borderWidth + "px";

	p.style.backgroundColor = rgb(backgroundRed, backgroundGreen, backgroundBlue);
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
  }