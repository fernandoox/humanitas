var infoVue = new Vue({

  el: '#listaInstalaciones',
  data: {
	instalaciones: [
	  	{ nombre: 'Lobby',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"},
	  	{ nombre: 'Habitaciones',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/animals"},
		{ nombre: 'Tomógrafo Helidocoidal',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/arch"},
		{ nombre: 'Ultrasonido',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/nature"},
		{ nombre: 'Quirofano',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/people"},
		{ nombre: 'Radiologia Convencional',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"},
	  	{ nombre: 'Sala De Choque',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"},
		{ nombre: 'Hemodialisis',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"},
		{ nombre: 'Fluoroscopia',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"},
		{ nombre: 'Laboratorio Clínico',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"},
		{ nombre: 'Densitometría Ósea',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"},
		{ nombre: 'Laboratorio Clínico',  descripcion:"Descripcion txt", imagen:"https://placeimg.com/500/300/tech"}		  
   
	]
  },

})

var infoEspecialistas =  new Vue({
	el: '#listaEspecialistas',
	  data: {
		especialitas: [
		  	{ nombre: 'Dra. Diana Tizatl Juárez',  especialidad:"Anestesiología", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dr. Gustavo Soriano Aldama',  especialidad:"Angiología", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dra. Yahveh Zecua Najera',  especialidad:"Alergología", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dr. Juan Luis Vazquez Salado',  especialidad:"Cardiología", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dr. Alejandro Tizatl Juárez',  especialidad:"Cirugia General", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dr. Giovanni A. Hernandez Vega',  especialidad:"Cirujano Oncologo", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dr. Luis Alberto Mendez Tlapale',  especialidad:"Endocrinologo", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dr. Victor Hugo García y García',  especialidad:"Gastroenterología", consultorio: 105, telefono:"46 859 50"},
		  	{ nombre: 'Dr. Ramos Hernandez Reyes',  especialidad:"Ginecología", consultorio: 105, telefono:"46 859 50"}

		]
	  },
})
