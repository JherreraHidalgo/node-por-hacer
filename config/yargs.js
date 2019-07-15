
const descripcion = { 
        demand: true,
        alias: 'a',
        desc: 'Descripcion de tareas por hacer'
    
};

const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado la taareas'
};




const argv = require('yargs')


    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar un estado completo ', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea ', {
        descripcion
     })
    .help()
    .argv


module.exports = {

argv

}
