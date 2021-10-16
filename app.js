/*1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".

2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.

3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/

const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]

console.log(alumnos);

const aprobados = alumnos.filter((alumno) => alumno.nota >= 13);
console.log(aprobados);

SnotA = 0;
CnotA = 0;
aprobados.forEach((p) => {
    const {nombre, carrera, nota} = p;
    SnotA += p.nota
    CnotA ++
})
console.log('El promedio de notas aprobados es: ' + (SnotA/CnotA));

const desaprobados = alumnos.filter((alumno) => alumno.nota <= 12);
console.log(desaprobados);

SnotD = 0;
CnotD = 0;
desaprobados.forEach((p) => {
    const {nombre, carrera, nota} = p;
    SnotD += p.nota // SnotD = SnotD + p.nota
    CnotD ++ // CnotD +1
})
console.log('El promedio de notas desaprobadas es: ' + (SnotD/CnotD));

const notax2 = aprobados.map((p) => {
  p.nota = p.nota *3;
});