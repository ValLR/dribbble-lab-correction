$(document).ready(function(){
	/* Recorrido Json Api */
	var infoDribbble = function(data){
		console.log("hola");
		data.forEach(function(element){
			/* Mostrar en HTMO :*/
			var img = element.images.teaser;
			var visitas = element.views_count;
			var contadorComentarios = element.views_count;
			var like = element.likes_count;
			/* Parte Info en  hover:*/
			var titlePro = element.title;
			var description = element.description;
			var fecha = element.updated_at;
			var id = element.id;
			var id2 = element.id + img;
			//ID desde index.html "proyecto"

			$("#proyectos").append(armarTemplate(img,visitas,contadorComentarios,like,titlePro,description,fecha,id,id2));

		});


	}
	/*Función para imprimir contenido dinámico en página*/
		var armarTemplate = function(img,visitas,contadorComentarios,like,titlePro,description,fecha,id,id2){
			var printed=` <div class= "caja-white text-center">
						<div class = "row ">
							<div class = "col-md-12">
								<div id="`+id+`" class="hidden">
									<div>
										<h4>`+titlePro+`</h4>
									</div>
									<div>
										<p>`+ description +`</p>
									</div>
									<div>
										<p>`+fecha+`</p>
									</div>
								</div>
									<a class= img-link>
										<img id="`+id2+`" src="`+ img +`">
									</a>
							</div>
						</div>	
						<div class = "row visitas">
							<div class = "col-md-3 col-md-offset-2">
								<i class="fa fa-eye" aria-hidden="true">`+ visitas +`</i>
							</div>
							<div class = "col-md-3">
								<i class="fa fa-comment" aria-hidden="true">`+contadorComentarios+`</i>
							</div>
							<div class="col-md-3">
								<i class="fa fa-heart" aria-hidden="true">`+like+`</i>
							</div>
						</div>
					</div>
				`
			return printed;
    }

    	function ocultar(id,id2){
				$(id).hover(function(){
				$(id).removeClass("hidden");
				$(id2).addClass("hidden");
			})
		}

	/* Llamada de API */
	var ajaxDribbble = function(){
		$.ajax({
			url: 'https://api.dribbble.com/v1/users/megdraws/shots?access_token=fbbeb10dd624557fb23eb469706d163bfa435ba315154651642e2f7706a58760',
			type: 'GET',
			datatype: 'jsonp'
		})
		.done(function(response){
			console.log(response);
			infoDribbble(response); //Aquí llamo a function de foreach
		})
		.fail(function(){
			console.log("error");
		})
	}


	/*Cuando carge la pagina debe aparecer los poryectos*/
	$(window).load(function() {
		$("#proyectos").empty();
		ajaxDribbble();
	});


});	