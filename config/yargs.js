/* 
    Me traje el YARGS para aca :v
*/

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Borrar una tarea de la lista de tareas'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
        .command('crear', 'Crear un elemento por hacer', {
            descripcion
        })
        .command('borrar', 'Borrar una tarea', {
            descripcion
        })
        .command('actualizar', 'Actualizar el estado completado de una tarea', {
            descripcion,
            completado
        })
        .help()
        .argv;

module.exports = {
    argv
}