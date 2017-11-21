// COMBAK: FILTROS
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
// COMBAK: INFORMACION INSTALACIONES
var infoInstalaciones = new Vue({
  el: '#listaInstalaciones',
  data: {
    instalaciones: [{
        nombre: 'Lobby',
        imagen: "XX/500/300/tech"
      },
      {
        nombre: 'Habitaciones',
        imagen: "XX/500/300/animals"
      },
      {
        nombre: 'Tomógrafo Helidocoidal',
        imagen: "XX/500/300/arch"
      },
      {
        nombre: 'Ultrasonido',
        imagen: "XX/500/300/nature"
      },
      {
        nombre: 'Quirofano',
        imagen: "XX/500/300/people"
      },
      {
        nombre: 'Radiologia Convencional',
        imagen: "XX/500/300/tech"
      },
      {
        nombre: 'Sala De Choque',
        imagen: "XX/500/300/tech"
      },
      {
        nombre: 'Hemodialisis',
        imagen: "XX/500/300/tech"
      },
      {
        nombre: 'Fluoroscopia',
        imagen: "XX/500/300/tech"
      },
      {
        nombre: 'Laboratorio Clínico',
        imagen: "XX/500/300/tech"
      },
      {
        nombre: 'Densitometría Ósea',
        imagen: "XX/500/300/tech"
      },
      {
        nombre: 'Laboratorio Clínico',
        imagen: "XX/500/300/tech"
      }
    ]
  }
})

// COMBAK: INFORMACION DE LOS ESPECIALISTAS
var infoEspecialistas = new Vue({
  el: '#listaEspecialistas',
  data: {
    especialitas: [{
        nombre: 'DR. DIEGO SOTO CANDIA',
        especialidad: "ALERGOLOGIA",
        consultorio: 107,
        cedula: "6323919",
        horario: "MAR Y JUE A PARTIR 16:00HRS SAB A PARTIR 10:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DRA. DIANA TIZATL JUAREZ',
        especialidad: "ANESTESIOLOGIA",
        consultorio: 103,
        cedula: "5823008",
        horario: "PREVIA CITA"
      },
      {
        nombre: 'DR. GUSTAVO SORIANO ALDAMA',
        especialidad: "ANGIOLOGIA",
        consultorio: 105,
        cedula: "5472051",
        horario: "LUN Y MIE 16:00-19:00 VIE 14:30 16:00 . PREVIA CITA"
      },
      {
        nombre: 'okok',
        especialidad: "ANGIOLOGIA",
        consultorio: 105,
        cedula: "5472051",
        horario: "LUN Y MIE 16:00-19:00 VIE 14:30 16:00 . PREVIA CITA"
      },
      {
        nombre: 'DR. JUAN LUIS VAZQUEZ SALADO',
        especialidad: "CARDIOLOGIA",
        consultorio: 107,
        cedula: "7605503",
        horario: "LUN, MIE 16:30 A 19:30 HRS JUE 14:30-15:30. PREVIA CITA"
      },
      {
        nombre: 'DR. ALEJANDRO TIZATL JUAREZ',
        especialidad: "CIRUGIA GENERAL",
        consultorio: 103,
        cedula: "4892383",
        horario: "LUN A JUE A PARTIR 14:00 HRS S/AGENDAR, REGISTRAR AL MOMENTO"
      },
      {
        nombre: 'DR. GIOVANNI A. HERNANDEZ VEGA',
        especialidad: "CIRUJANO ONCOLOGO",
        consultorio: 102,
        cedula: "?",
        horario: "LUN-VIE DISPONIBLE. PREVIA CITA"
      },
      {
        nombre: 'DR. LUIS ALBERTO MELENDEZ TLAPALE',
        especialidad: "ENDOCRINOLOGIA",
        consultorio: 106,
        cedula: "8404089",
        horario: "SAB 10:00 15:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. JUAN DE DIOS HERNANDEZ CANTOR',
        especialidad: "GASTROENTEROLOGIA",
        consultorio: 106,
        cedula: "5482564",
        horario: "MAR Y JUE 18:00 A 20:00 HRS SAB DE 8:00 A 10:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. RAMOS HERNANDEZ REYES',
        especialidad: "GINECOLOGIA",
        consultorio: "GIN",
        cedula: "3816839",
        horario: "LUN,MIE,VIER 15:30 18:30. PREVIA CITA"
      },
      {
        nombre: 'DRA. JESSI JUAREZ LARA',
        especialidad: "HEMATOLOGIA",
        consultorio: 107,
        cedula: "TRAMITANDO",
        horario: "VIE 17:00-20:00HRS SAB 08:00-10:00. PREVIA CITA"
      },
      {
        nombre: 'MTRO. LFT. MIGUEL PALACIOS TOQUIANTZI',
        especialidad: "MEDICINA FISICA Y REABILITACION DEPORTIVA",
        consultorio: 107,
        cedula: "8066484",
        horario: "LUN, MIER, VIE, SAB 10:00-14:00HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. JOSE IGNACIO ANAYA LIMA',
        especialidad: "MEDICINA INTERNA",
        consultorio: 102,
        cedula: "3352628",
        horario: " LUN Y VIE 18:00-20:00 HRS. MIE 14:00-18:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. JUAN CARLOS HERNANDEZ SANTOS',
        especialidad: "NEFROLOGIA",
        consultorio: 106,
        cedula: "5482582",
        horario: "LUN A VIE 15:00HRS SAB 08:00-14:00HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. GONZALO SARMIENTO PADILLA',
        especialidad: "NEUMOLOGIA",
        consultorio: 102,
        cedula: "9146310",
        horario: "SAB 8:00 10:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. FRANCISCO HERNANDEZ PEREZ',
        especialidad: "NEUROLOGIA",
        consultorio: 106,
        cedula: "3413703",
        horario: "LUNES Y MIE 17:00-19:00. PREVIA CITA"
      },
      {
        nombre: 'LIC. EMMANUEL CORONA TOQUIANTZI',
        especialidad: "NUTRIOLOGO",
        consultorio: 107,
        cedula: "7050929",
        horario: "LUNES A VIERNES 17:00 A 20:00 HRS. SAB 08:00-15:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. PEDRO SORIANO MONTIEL',
        especialidad: "ORTOPEDIA",
        consultorio: 105,
        cedula: "3509466",
        horario: "LUN - VIER DE 12:00 A 13:00 HRS.; MIE Y VIE A PARTIR DE 19:00 HRS.; MARTES Y JUEVES A PARTIR 17:00 HRSSAB A PARTIR DE 11:00 HRS."
      },
      {
        nombre: 'DR. ELIAS POZOS FRANCO',
        especialidad: "ORTOPEDIA",
        consultorio: 106,
        cedula: "?",
        horario: "MIÉRCOLES A PARTIR 15:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. IRGING MARTINEZ CALVA',
        especialidad: "ORTOPEDIA",
        consultorio: 106,
        cedula: "5088097",
        horario: "LUNES A SAB 10:00-13:00HRS. PREVIA CITA"
      },
      {
        nombre: 'DRA. JANET CANCINO PEREGRINA',
        especialidad: "PEDIATRA",
        consultorio: 104,
        cedula: "3873607",
        horario: "LUN A VIE 9:30 A 12:30 HRS. S/AGENDAR"
      },
      {
        nombre: 'DR. ROBERTO TEPATZI CARRANCO',
        especialidad: "PEDIATRA NEONATOLOGO",
        consultorio: 108,
        cedula: "5461053",
        horario: "LUN A VIER 16:30 A 21:30 HRS. SAB 11:00-16:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DRA. GRISELDA FUENTES FUENTES',
        especialidad: "PEDIATRA NEUROLOGA",
        consultorio: 104,
        cedula: "5240997",
        horario: "LUN A VIE 16:00 A 19:30 HRS. S/AGENDAR"
      },
      {
        nombre: 'DR. ESTEBAN MEZA ZEMPOALTECA',
        especialidad: "REUMATOLOGIA",
        consultorio: 102,
        cedula: "7730224",
        horario: "MAR Y JUE 16:30-19:30 HRS. Y SAB DE 9:00 A 12:00 HRS. PREVIA CITA"
      },
      {
        nombre: 'DR. JOSE ARTURO PORTILLO CASTILLO',
        especialidad: "UROLOGIA",
        consultorio: 106,
        cedula: "3414287",
        horario: "MARTES A PARTIR 2:00 PM. PREVIA CITA"
      }
    ]
  },
})

// COMBAK: INFORMACION DE LOS SERIVICIOS
var infoServicios = new Vue({
  el: '#infoServiciosMedicos',
  data: {
    medicinaEspecialidad: [{
        nombre: 'Pediatría',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Ginecología',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Medicina Interna',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Ortopedia',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Gastroenterología',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Cirugía General',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Cardiología',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Urología',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Anestesiología',
        clazz: 'medicinaEspecialidad'
      },
      {
        nombre: 'Medicina General',
        clazz: 'medicinaGeneralUno'
      }
    ]
  },
})

var infoTratamiento = new Vue({
  el: '#infoTratamiento',
  data: {
    tratamientos: [{
        nombre: 'Tococirugía',
      },
      {
        nombre: 'Quirófano',
      },
      {
        nombre: 'Hospitalización',
      },
      {
        nombre: 'Ortopedía',
      },
      {
        nombre: 'Hemodialisis',
      }
    ]
  }
})

var infoAuxiliares = new Vue({
  el: '#infoAuxiliares',
  data: {
    auxiliares: [{
        nombre: 'Colposcopia',
        clazz: 'gral'
      },
      {
        nombre: 'Electro Cirugía',
        clazz: 'gral'
      },
      {
        nombre: 'Endoscopia',
        clazz: 'gral'
      },
      {
        nombre: 'Marcapasos',
        clazz: 'gral'
      },
      {
        nombre: 'Broncoscopia',
        clazz: 'gral'
      },
      {
        nombre: 'Laparoscopia',
        clazz: 'gral'
      },
      {
        nombre: 'Química Clínica',
        clazz: 'laboratorio'
      },
      {
        nombre: 'Hematología',
        clazz: 'laboratorio'
      },
      {
        nombre: 'Parasitología y Uroanalisis',
        clazz: 'laboratorio'
      },
      {
        nombre: 'Bacteriología',
        clazz: 'laboratorio'
      },
      {
        nombre: 'Inmunoquímica',
        clazz: 'laboratorio'
      },
      {
        nombre: 'Papanicolaou',
        clazz: 'laboratorio'
      },
      {
        nombre: 'Ultrasonografía Convencional, 4D y Doppler Color',
        clazz: 'radiologia'
      },
      {
        nombre: 'Densitometría Osea Columna, Cadera y Cuerpo Completo',
        clazz: 'radiologia'
      },
      {
        nombre: 'Tomografía Computada Helicoidal',
        clazz: 'radiologia'
      },
      {
        nombre: 'Rayos X',
        clazz: 'radiologia'
      },
      {
        nombre: 'Fluoroscopía',
        clazz: 'radiologia'
      },
    ]
  }
})
