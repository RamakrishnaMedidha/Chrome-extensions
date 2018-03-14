(function($){
	var dialog;
	var innerDiv;
	var div = document.createElement('div');
	div.setAttribute('class','extensionDiv');
	var btn = buttonElement();
	var popupHTML = getPopupHTML();
	div.appendChild(btn);
	div.appendChild(popupHTML);
	document.body.appendChild(div);
	initializeDialog();
	
	
	function buttonElement() {
		var btn=document.createElement('button');
		btn.innerText="Show popup";
		
		btn.addEventListener('click',function(event){
			dialog.dialog('open');
			$.ajax({
			  url: "https://reqres.in/api/users?page=2",
			  context: document.body
			}).success(function({data}) {
			  //innerDiv.innerHTML = data.map(e => `<li>${e['first_name']}</li>`).join('');
			});
						
			
		},false);
		return btn;
	}

	
	
	function getPopupHTML(){
		innerDiv = document.createElement('div');
		innerDiv.setAttribute("id", "dialog");
		var input=document.createElement('input');
		var label=document.createElement("label");
		label.innerText="User Name";
		input.setAttribute('id','userName');
		innerDiv.appendChild(label);
		innerDiv.appendChild(input);
		var p = document.createElement('p');
		p.innerText = 'lorem ipsum HEllo world';
		innerDiv.appendChild(p);
		return innerDiv;
		
	}
	
	function initializeDialog() {
		dialog = $( "#dialog" ).dialog({
		  autoOpen: false,
		  height: 400,
		  width: 350,
		  modal: true,
		  buttons: {
			"Create an account": addUser,
			Cancel: function() {
          dialog.dialog( "close" );
        }
		}});
	
}

	function addUser(){
		var name=$("#userName").text();
		$.ajax({
		method: "POST",
		url: "https://reqres.in/api/users",
		data: { name: name, job: "Boston" }
		})
		.success(function( msg ) {
		alert( "Data Saved: ");
		});	
}
})($);


