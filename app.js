// Cree una configuracion para los comandos en la ruta './config/yargs.js' para
// que fuera mas facil mantener el codigo y que pueda ser escalable
// Ten un buen dia :) ATTE: Carlos del pasado (más exacto Carlos del día Sabado
// 1ro de Diciembre del 2018 a las 10:11 PM)

const argv = require('./config/yargs').argv;

const colors = require('colors')

const porHacer = require('./por-hacer/por-hacer')

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear( argv.descripcion )
        console.log( tarea );
        break;

    case 'listar':
        
        let listado = porHacer.getListado()

        console.log('=========== Por Hacer ==========='.green);
        for (let tarea of listado) {
            console.log(' + ' + tarea.descripcion);
            console.log(' * Estado: ', tarea.completado);
        }
        console.log('========================='.green);
        break;

    case 'actualizar':
        
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado )

        console.log(actualizado)

        break;

    case 'borrar':
        
        console.log( argv.descripcion )
        
        let borrado = porHacer.borrar( argv.descripcion )

        console.log(borrado)

        break;

    default:
        console.log(`Comando no reconocido`);
        break;
    
}