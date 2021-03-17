function translate(language){

	var english = {
		title:'CMS Acceptable Use Policy',
		h1_instructions:'You must complete this quiz and agree to this CMS Acceptable Use Policy (AUP) in order to use your Chromebook.',
		p_instructions:'Once you complete the AUP, you will not see this page again.',
		h3_q1:'Do the same rules apply for respectful behavior online as they do offline?<button type="image" class="audio" id="q1"><audio id="q1a" src="q1.mp3"></audio>',
		aup1:'<input id="aup_c1" class="correct" type="button" style="width:100%;text-align:left!important" value="Yes, I must treat others with respect both online and in person.">'+
		'<input id="aup_ic1" style="width:100%;text-align:left!important" class="incorrect" type="button" value="No, it\'s ok to treat people differently online than I do in person.">',
		h3_q2:'Should I share my homework with other students since it\'s easy to share in Google Drive?<button type="image" class="audio" id="q2"><audio id="q2a" src="q2.mp3"></audio>',
		aup2:'<input id="aup_ic2" class="incorrect" type="button" style="width:100%;text-align:left!important" value="Yes, my classmates can just make a copy and submit it as their own work."><input id="aup_c2" class="correct" style="width:100%;text-align:left!important" type="button" value="No, this is cheating and will be dealt with by the administration.">',
		h3_q3:'What should I do if my chromebook is damaged (for example: a key comes off my chromebook keyboard, cracked screen, etc.)?<button type="image" class="audio" id="q3"><audio id="q3a" src="q3.mp3"></audio>',
		aup3:'<input id="aup_ic3" class="incorrect ic3" type="button" style="width:100%;text-align:left!important" value="Don\'t worry about it since I\'m the only one who uses it." title="">'+
		'<input id="aup_c3" class="correct" type="button" style="width:100%;text-align:left!important" value="Report it to my teacher and the person in my school who is in charge of Chromebooks immediately.">'+
		'<input id="aup_ic3" class="incorrect ic3" type="button" style="width:100%;text-align:left!important" value="Don\'t tell anyone and hope no one finds out." title="">'+
		'<input id="aup_ic3" class="incorrect ic3" type="button" style="width:100%;text-align:left!important" value="Take it home to fix it. " title="">',
		h3_q4:'If I\'m using information I find online in a project for school, I don\'t need to cite it since schoolwork falls under the Fair Use Guideline.<button type="image" class="audio" id="q4"><audio id="q4a" src="q4.mp3"></audio>',
		aup4:'<input id="aup_ic4" style="width:100%;text-align:left!important" class="incorrect" type="button" value="True: You don\'t have to ask permission if you are using information you find online for schoolwork">'+
		'<input id="aup_c4" class="correct" style="width:100%;text-align:left!important" type="button" value="False: If you take someone else\'s ideas and claim them as your own, you are plagiarizing. ">',
		aup_c1:'',
		aup_ic1:'',
		aup_c2:'',
		aup_ic2:'',
		aup_c3:'',
		aup_ic3:'',
		aup_c4:'',
		aup_ic4:'',
		h1_agree:'Agree to the CMS Acceptable Use Policy',
		p_agree:'By clicking agree, you accept the terms of use for CMS and agree to adhere to CMS expectations while online. <br/><small>You will not be able to use the Chromebook until you click agree.</small>',
		agree:'AGREE'
	}
	var spanish = {
		title:'Pol&iacute;tica de usuario aceptable de CMS',
		h1_instructions:'Debe completar esta prueba y aceptar esta Pol&iacute;tica de uso aceptable (AUP) de CMS para usar su Chromebook.',
		p_instructions:'Una vez que complete la AUP, no volver&aacute; a ver esta p&aacute;gina.',
		h3_q1:'&#191;Se aplican las mismas reglas para mostrar que los compa&ntilde;eros de clase respetan en l&iacute;nea como lo hacen en clase?',
		aup1:'<input id="aup_c1" class="correct" type="button" value="S&iacute;"><input id="aup_ic1" class="incorrect" type="button" value="No">',
		h3_q2:'&#191;Est&aacute; bien copiar el trabajo de otra persona si lo comparten en l&iacute;nea',
		aup2:'<input id="aup_ic2" class="incorrect" type="button" value="S&iacute;"><input id="aup_c2" class="correct" type="button" value="No">',
		h3_q3:'Si veo algo en l&iacute;nea que me incomoda, &#1961;deber&iacute;a mostrarle a mi maestra?',
		aup3:'<input id="aup_c3" class="correct" type="button" value="S&iacute;"><input id="aup_ic3" class="incorrect" type="button" value="No">',
		h3_q4:'&#191;Est&aacute; bien usar la contrase&ntilde;a de otra persona para iniciar sesi&oacute;n en su cuenta?',
		aup4:'<input id="aup_ic4" class="incorrect" type="button" value="S&iacute;"><input id="aup_c4" class="correct" type="button" value="No">',
		aup_c1:'',
		aup_ic1:'',
		aup_c2:'',
		aup_ic2:'',
		aup_c3:'',
		aup_ic3:'',
		aup_c4:'',
		aup_ic4:'',
		h1_agree:'Aceptar la pol&iacute;tica de uso aceptable de CMS',
		p_agree:'Al hacer clic en aceptar, acepta los t&eacute;rminos de uso de CMS y acepta adherirse a las expectativas de CMS mientras est&aacute; en l&iacute;nea.  <br/><small>No podr&aacute; usar el Chromebook hasta que haga clic en Aceptar.</small>',
		agree:'DE ACUERDO'
	}
    if (language==='english'){
		change(english);	
	} else if (language==='spanish'){
		change(spanish);
	}	
}

function change(language){
	var keys = Object.keys(language)
	for (k in keys){
		var key = keys[k]
		var value = language[key];
		if (value.length>0){
			document.getElementById(key).innerHTML=value;
		};
	};

}
