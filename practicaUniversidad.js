/*
Mosquera Julieta Ailyn

Se requiere generar un sistema para realizar estadísticas sobre los egresados en la universidad.

Si tenes alguna duda, consulta por slack!!

1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/

function probarEjercicio()
{
	//declaro las variables
	var respuesta;
	var nombreIngresado;
	var carreraIngresada;
	var estadoCarreraIngresado;
	var sexoIngresado;
	var edadIngresado;
	var notaIngresada;
	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDiseñoGrafico;
	var contadorMujeresProgramacion;
	var contadorNoBinarios;
	var acumuladorNotasFinalizantes;
	var contadorAlumnosFinalizantes;
	var promedioAlumnosFinalizantes;
	var banderaAlumnoMayorPsicologia;
	var nombreAlumnoMayorPsicologia;
	var sexoAlumnoMayorPsicologia;
	var edadAlumnoMayorPsicologia;
	var banderaMejorAlumnoPsicologia;
	var nombreMejorAlumnoPsicologia;
	var estadoMejorAlumnoPsicologia;
	var notaMejorAlumnoPsicologia;
	var carreraMasAlumnos;


	//inicializo variables
	respuesta = "si";
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorDiseñoGrafico = 0;
	contadorMujeresProgramacion = 0;
	contadorNoBinarios = 0;
	acumuladorNotasFinalizantes = 0;
	contadorAlumnosFinalizantes =0;
	banderaAlumnoMayorPsicologia = 0;
	banderaMejorAlumnoPsicologia = 0;
	promedioAlumnosFinalizantes = 0;

	//inicio los datos por while hasta que el usuario quiera
	while(respuesta == "si")
	{
		//inicializo variables pidiendo datos por prompt y los valido
		nombreIngresado = prompt("Ingrese el nombre del alumno");
		while(isNaN(nombreIngresado)== false)
		{
			nombreIngresado = prompt("ERROR! Ingrese el nombre del alumno");
		}
		carreraIngresada = prompt("Ingrese la carrera: programacion, psicologia o diseño grafico");
		while(isNaN(carreraIngresada)== false || carreraIngresada != "programacion" && carreraIngresada != "psicologia" && carreraIngresada != "diseño grafico")
		{
			carreraIngresada = prompt("ERROR! Ingrese la carrera.");
		}
		estadoCarreraIngresado = prompt("Ingrese el estado de la carrera: en curso-abandono-finalizado");
		while(isNaN(estadoCarreraIngresado) == false || estadoCarreraIngresado != "en curso" && estadoCarreraIngresado != "abandonado" && estadoCarreraIngresado != "finalizado")
		{
			estadoCarreraIngresado = prompt("ERROR! ingrese el estado de la carrera");
		}
		sexoIngresado = prompt("Ingrese el sexo del alumno: femenino-masculino-nobinario");
		while(isNaN(sexoIngresado)== false || sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario")
		{
			sexoIngresado = prompt( "ERROR! Ingrese el sexo del alumno");
		}
		edadIngresado= prompt("Ingrese la edad del alumno");
		edadIngresado = parseInt(edadIngresado);
		while(isNaN(edadIngresado)== true || edadIngresado<17)
		{
			edadIngresado=prompt("ERROR! ingrese la edad del alumno");
			edadIngresado=parseInt(edadIngresado);
		}
		notaIngresada = prompt("Ingrese la nota del alumno");
		notaIngresada = parseInt(notaIngresada);
		while(isNaN(notaIngresada)== true || notaIngresada<1 || notaIngresada>10)
		{
			notaIngresada = prompt("ERROR! Ingrese la nota del alumno");
			notaIngresada = parseInt(notaIngresada);
		}
		/*busco la cantidad de alumnos en cada carrera, 
		las mujeres en la carrera de programacion,
		los alumnos mas viejos en la carrera de psicologia,
		el mejor alumno de la carrera de psicologia no binario
		*/
		switch(carreraIngresada)
		{
			case "programacion":
				contadorProgramacion++;
				if (sexoIngresado == "femenino") 
				{
					contadorMujeresProgramacion++;
				}
			break;
			case "psicologia":
				contadorPsicologia++;
				if (banderaAlumnoMayorPsicologia==0 || edadAlumnoMayorPsicologia < edadIngresado) 
				{
					edadAlumnoMayorPsicologia = edadIngresado;
					sexoAlumnoMayorPsicologia = sexoIngresado;
					nombreAlumnoMayorPsicologia = nombreIngresado;
					banderaAlumnoMayorPsicologia = 1;
				}
				if ((sexoIngresado == "no binario") && (banderaMejorAlumnoPsicologia == 0 || notaMejorAlumnoPsicologia < notaIngresada)) 
				{
					nombreMejorAlumnoPsicologia = nombreIngresado;
					notaMejorAlumnoPsicologia = notaIngresada;
					estadoMejorAlumnoPsicologia = estadoCarreraIngresado;
					banderaMejorAlumnoPsicologia = 1;
				}
			break;
			case "diseño grafico":
				contadorDiseñoGrafico++;
			break;
		}
		//cuento la cantidad de alumnos no binarios
		if (sexoIngresado == "no binario") 
		{
			contadorNoBinarios++;
		}
		//acumulo y cuento la cantidad de alumnos finalizantes para fuera del while sacar el promedio
		if (estadoCarreraIngresado == "finalizado") 
		{
			acumuladorNotasFinalizantes = acumuladorNotasFinalizantes + notaIngresada;
			contadorAlumnosFinalizantes++;
		}


		respuesta = prompt("Desea ingresar los datos de un nuevo alumno?");
	}//FIN WHILE
	//busco la carrera con mas alumnos
	if (contadorPsicologia>contadorProgramacion && contadorPsicologia> contadorDiseñoGrafico) 
	{
		carreraMasAlumnos = "psicología";
	}else
	{
		if (contadorProgramacion>contadorDiseñoGrafico) 
		{
			carreraMasAlumnos = "programación";
		}else
		{
			carreraMasAlumnos = "diseño grafico";
		}
	}
	//busco el promedio de los alumnos finalizantes
	promedioAlumnosFinalizantes = acumuladorNotasFinalizantes / contadorAlumnosFinalizantes;
	//muestro los datos pedidos por document.write
	document.write("La cantidad de alumnos en la carrera de psicología es: " + contadorPsicologia + " alumnos"
		+ "<br> La cantidad de alumnos en la carrera de programación es: " + contadorProgramacion + " alumnos"
		+ "<br> La cantidad de alumnos en la carrera de diseño grafico es: " + contadorDiseñoGrafico + " alumnos"
		+ "<br> Hay " + contadorMujeresProgramacion + " mujeres que estudian la carrera de programación"
		+ "<br> Hay " + contadorNoBinarios + " alumnos no binarios");
	if (contadorAlumnosFinalizantes>0) 
	{
		document.write("<br> El promedio de notas de los alumnos finalizantes es: " + promedioAlumnosFinalizantes);
	}else
	{
		document.write("<br> No hay alumnos finalizantes.");
	}
	if (banderaAlumnoMayorPsicologia>0) 
	{
		document.write("<br> El nombre del alumno mas viejo de la carrera de psicología es: " + nombreAlumnoMayorPsicologia
			+ "<br> El sexo es: " + sexoAlumnoMayorPsicologia
			+ "<br> La edad es: " + edadAlumnoMayorPsicologia);
		if (banderaMejorAlumnoPsicologia>0) 
		{
			document.write("<br> El nombre del alumno no binario con mejor nota en la carrera de psicología es: " + nombreMejorAlumnoPsicologia
				+ "<br> La nota es: " + notaMejorAlumnoPsicologia
				+ "<br> El estado de la carrera es: " + estadoMejorAlumnoPsicologia);
		}else
		{
			document.write("<br> No hay alumnos no binarios en la carrera de psicología")
		}
	}else
	{
		document.write("No hay alumnos en la carrera de psicología.");
	}
	document.write("<br> La carrera que tiene mas alumnos es: " + carreraMasAlumnos);

}//FIN FUNCION
		