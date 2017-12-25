function reseteandoBurbujas(){
	for (var i = document.getElementsByTagName('span').length - 1; i >= 0; i--) {
		document.getElementsByTagName('span')[i].style.backgroundColor = "#00A8E8";
		document.getElementsByTagName('span')[i].style.color = "white";
	}
}
for (var numeroDeSemanita = 15; numeroDeSemanita > 0; numeroDeSemanita--) {
	peticionA="for (var kk = document.getElementsByClassName('holax').length - 1; kk >= 0; kk--) {document.getElementsByClassName('holax')[kk].classList.remove('holax');}";
	peticionE="for (var zz = document.getElementsByClassName('prueba').length - 1; zz >= 0; zz--) {document.getElementsByClassName('prueba')[zz].classList.remove('prueba');}";
	for (var asd = 1; asd >= 0; asd--) {
		var nuevaFuncion = "llenar"+numeroDeSemanita+""+asd+"(){reseteandoBurbujas();for (var i = semana"+numeroDeSemanita+"[0].length - 1; i >= 0; i--) {";
		
		if (asd==0) {
			peticionX="semana"+numeroDeSemanita+"[0][0][0].firstChild.classList.add('prueba');";
			peticionY="semana"+numeroDeSemanita+"[0][1][0].firstChild.classList.add('prueba');";
			peticionZ="semana"+numeroDeSemanita+"[0][2][0].firstChild.classList.add('prueba');";
			peticionB="semana"+numeroDeSemanita+"[0][i][0].firstChild.style.backgroundColor = 'white';";
			peticionC="semana"+numeroDeSemanita+"[0][i][0].firstChild.style.color = '#00A8E8';";
			peticionD="semana"+numeroDeSemanita+"[0][0][0].classList.add('holax');";
			peticionD1="semana"+numeroDeSemanita+"[0][1][0].classList.add('holax');";
			peticionD2="semana"+numeroDeSemanita+"[0][2][0].classList.add('holax');";	
		}
		else if(asd==1){
			peticionX="semana"+numeroDeSemanita+"[1][0][0].firstChild.classList.add('prueba');";
			peticionY="semana"+numeroDeSemanita+"[1][1][0].firstChild.classList.add('prueba');";
			peticionZ="semana"+numeroDeSemanita+"[1][2][0].firstChild.classList.add('prueba');";
			peticionB="semana"+numeroDeSemanita+"[1][i][0].firstChild.style.backgroundColor = 'white';";
			peticionC="semana"+numeroDeSemanita+"[1][i][0].firstChild.style.color = '#00A8E8';";
			peticionD="semana"+numeroDeSemanita+"[1][0][0].classList.add('holax');";
			peticionD1="semana"+numeroDeSemanita+"[1][1][0].classList.add('holax');";
			peticionD2="semana"+numeroDeSemanita+"[1][2][0].classList.add('holax');";
		}
		var salvarFlechita = "for (var p = 3; p >= 0; p--) {document.getElementsByClassName('flechita')[p].style.backgroundColor='#00648A';}";
		var funcionTotal = "function "+nuevaFuncion+""+peticionE+""+peticionX+""+peticionY+""+peticionZ+""+peticionA+""+peticionB+""+peticionC+""+peticionD+""+peticionD1+""+peticionD2+""+salvarFlechita+"}}";
		eval(funcionTotal);
	}
}
for (var i = 2; i >= 0; i--) {
	semana1[0][i][0].firstChild.onclick = llenar10;
	semana1[1][i][0].firstChild.onclick = llenar11;
	semana2[0][i][0].firstChild.onclick = llenar20;
	semana2[1][i][0].firstChild.onclick = llenar21;
	semana3[0][i][0].firstChild.onclick = llenar30;
	semana3[1][i][0].firstChild.onclick = llenar31;
	semana4[0][i][0].firstChild.onclick = llenar40;
	semana4[1][i][0].firstChild.onclick = llenar41;
	semana5[0][i][0].firstChild.onclick = llenar50;
	semana5[1][i][0].firstChild.onclick = llenar51;
	semana6[0][i][0].firstChild.onclick = llenar60;
	semana6[1][i][0].firstChild.onclick = llenar61;
	semana7[0][i][0].firstChild.onclick = llenar70;
	semana7[1][i][0].firstChild.onclick = llenar71;
	semana8[0][i][0].firstChild.onclick = llenar80;
	semana8[1][i][0].firstChild.onclick = llenar81;
	semana9[0][i][0].firstChild.onclick = llenar90;
	semana9[1][i][0].firstChild.onclick = llenar91;
	semana10[0][i][0].firstChild.onclick = llenar100;
	semana10[1][i][0].firstChild.onclick = llenar101;
	semana11[0][i][0].firstChild.onclick = llenar110;
	semana11[1][i][0].firstChild.onclick = llenar111;
	semana12[0][i][0].firstChild.onclick = llenar120;
	semana12[1][i][0].firstChild.onclick = llenar121;
	semana13[0][i][0].firstChild.onclick = llenar130;
	semana13[1][i][0].firstChild.onclick = llenar131;
	semana14[0][i][0].firstChild.onclick = llenar140;
	semana14[1][i][0].firstChild.onclick = llenar141;
	semana15[0][i][0].firstChild.onclick = llenar150;
	semana15[1][i][0].firstChild.onclick = llenar151;
}