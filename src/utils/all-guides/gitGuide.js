// 1- Importación de guias
import { guides } from "./guides";

// 2- Importación de Componentes dónde se renderizaran las guias
import Git from '../../components/molecules/git-guide/Git'
import GitInstalacion from "../../components/molecules/git-guide/GitInstalacion";
import GitConfiguracion from "../../components/molecules/git-guide/GitConfiguracion";
import GitIniciarRepositorio from "../../components/molecules/git-guide/GitIniciarRepositorio";
import GitClonarRepositorio from "../../components/molecules/git-guide/GitClonarRepositorio";
import GitEstados from "../../components/molecules/git-guide/GitEstados";
import GitHistorial from "../../components/molecules/git-guide/GitHistorial";
import GitRastrearArchivo from "../../components/molecules/git-guide/GitRastrearArchivo";
import GitDeshacer from "../../components/molecules/git-guide/GitDeshacer";
import GitConfirmarCambios from "../../components/molecules/git-guide/GitConfirmarCambios";
import GitCrearRama from "../../components/molecules/git-guide/GitCrearRama";
import GitCambiarRama from "../../components/molecules/git-guide/GitCambiarRama";
import GitVisualizarRemoto from "../../components/molecules/git-guide/GitVisualizarRemoto";
import GitEnviarRemotos from "../../components/molecules/git-guide/GitEnviarRemotos";

// 3- Obtener e link de git por medio del id para luego asignarlos a mis temarios
const gitUrl = guides.find( guide => guide.id === 3).link

// 4- Crear lista contenedora de guia

export const gitGuide = [
    {
        id:1,
        temaryName:'INTRODUCCIÓN A GIT',
        topic: [
            { id:1, topicName:'Introducción', topicComponent: Git, topicLink:`${gitUrl}`},
            { id:2, topicName:'Instalación', topicComponent: GitInstalacion, topicLink:`${ gitUrl }/instalacion`},
            { id:3, topicName:'Configuración', topicComponent:GitConfiguracion, topicLink:`${ gitUrl }/configuracion`},
        ]
    },

    {
        id:2,
        temaryName:'OBTENER REPOSITORIO',
        topic: [
            { id:1, topicName:'Inicializar repositorio', topicComponent: GitIniciarRepositorio, topicLink:`${ gitUrl }/inicializar-repositorio`},
            { id:2, topicName:'Clonar repositorio', topicComponent: GitClonarRepositorio, topicLink:`${ gitUrl }/clonar-repositorio`},
        ]
    },

    {
        id:3,
        temaryName:'ESTADO & HISTORIAL',
        topic: [
            { id:1, topicName:'Estado de archivos', topicComponent: GitEstados, topicLink:`${ gitUrl }/estado-de-archivos`},
            { id:2, topicName:'Historial de confirmaciones', topicComponent: GitHistorial, topicLink:`${ gitUrl }/historial-de-confirmaciones`},
        ]
    },

    {
        id:4,
        temaryName:'REALIZAR CAMBIOS',
        topic: [
            { id:1, topicName:'Rastrear archivos', topicComponent: GitRastrearArchivo, topicLink:`${ gitUrl }/rastrear-archivos`},
            { id:2, topicName:'Confirmar tus Cambios', topicComponent: GitConfirmarCambios , topicLink:`${ gitUrl }/confirmar-cambios`},
            { id:3, topicName:'Descartar cambios', topicComponent: GitDeshacer, topicLink:`${ gitUrl }/descartar-archivos`},
        ]
    },

    {
        id:5,
        temaryName:'RAMAS',
        topic: [
            { id:1, topicName:'Crear nueva rama', topicComponent: GitCrearRama, topicLink:`${ gitUrl }/crear-rama`},
            { id:2, topicName:'Cambiar Rama o versiones', topicComponent: GitCambiarRama, topicLink:`${ gitUrl }/cambiar-rama`},
        ]
    },
    {
        id:6,
        temaryName:'TRABAJOS REMOTOS',
        topic: [
            { id:1, topicName:'Visualizar & agregar', topicComponent: GitVisualizarRemoto, topicLink:`${ gitUrl }/visualizar-agregar-remotos`},
            { id:2, topicName:'Enviar | obtener | eliminar', topicComponent: GitEnviarRemotos, topicLink:`${ gitUrl }/enviar-obtener-remotos`},
        ]
    },
]