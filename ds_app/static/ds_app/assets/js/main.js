$(document).on('ready', function(){

content=document.getElementById("inlineFormCustomSelectPref").value;

/*
if(content == 'Петрозаводск'){
	document.getElementById("adr-info").innerHTML='Лесной проспект д5'
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> 8-8142-77-77-77'
	document.getElementById("adr-grafic").innerHTML='График работы: с 09:00 до 17:00'


}
else {
	document.getElementById("adr-info").innerHTML='Кательническая набережная 20'
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> 8-0495-1234-55-11'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00'
}
*/

if(content == 'Петрозаводск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 125'
	document.getElementById("adr-grafic").innerHTML='График работы: с 09:00 до 17:00'
}
else if(content =='Москва'){

	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 126'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00'
}
else if(content =='Екатеринбург'){

	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 127'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +2ч. (МСК)'
}
else if(content =='Новосибирск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 128'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +4ч. (МСК)'
}
else if(content =='Челябинск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 129'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +2ч. (МСК)'
}
else if(content =='Хабаровск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 130'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +7ч. (МСК)'
}
else if(content =='Казань'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 131'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00'
}
else if(content =='Нижний Новгород'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 132'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00'
}
else if(content =='Уфа'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 133'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +2ч. (МСК)'
}
else if(content =='Ростов-на-Дону'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 134'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00'
}
else if(content =='Краснодар'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 135'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00'
}



});

$(document).on('click', '#inlineFormCustomSelectPref', function(){

content=document.getElementById("inlineFormCustomSelectPref").value;
/*
if(content == 'Петрозаводск'){
	document.getElementById("adr-info").innerHTML='Лесной проспект д5'
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> 8-8142-77-77-77'
	document.getElementById("adr-grafic").innerHTML='График работы: с 09:00 до 17:00'


}
else {
	document.getElementById("adr-info").innerHTML='Кательническая набережная 20'
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> 8-0495-1234-55-11'
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00'
}
*/

if(content == 'Петрозаводск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 125';
	document.getElementById("adr-grafic").innerHTML='График работы: с 09:00 до 17:00';
}
else if(content =='Москва'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 126';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00';
}
else if(content =='Екатеринбург'){

	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 127';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +2ч. (МСК)';
}
else if(content =='Новосибирск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 128';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +4ч. (МСК)';
}
else if(content =='Челябинск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 129';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +2ч. (МСК)';
}
else if(content =='Хабаровск'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 130';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +7ч. (МСК)';
}
else if(content =='Казань'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 131';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00';
}
else if(content =='Нижний Новгород'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 132';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00';
}
else if(content =='Уфа'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 133';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00 +2ч. (МСК)';
}
else if(content =='Ростов-на-Дону'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 134';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00';
}
else if(content =='Краснодар'){
	document.getElementById("adr-tel").innerHTML='<i class="fas fa-phone" style="color:#FDC300"></i> +7-(495)-887-88-88 доб. 135';
	document.getElementById("adr-grafic").innerHTML='График работы: с 10:00 до 17:00';
}

});
