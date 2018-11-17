$(document).on('ready', function(){

content=document.getElementById("inlineFormCustomSelectPref").value;

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

});

$(document).on('click', '#inlineFormCustomSelectPref', function(){

content=document.getElementById("inlineFormCustomSelectPref").value;

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

});