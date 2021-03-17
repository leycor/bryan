// Tecnologias
import bootstrap from '../assets/icon/bootstrap.svg'
import css from '../assets/icon/css.svg'
import django from '../assets/icon/django.svg'
import html from '../assets/icon/html.svg'
import ilus from '../assets/icon/ilus.svg'
import js from '../assets/icon/js.svg'
import python from '../assets/icon/python.svg'
import git from '../assets/icon/git.svg'
import react from '../assets/icon/react.svg'
import tailwind from '../assets/icon/tailwind.svg'
import xd from '../assets/icon/xd.svg'
import laravel from '../assets/icon/laravel.svg'
import php from '../assets/icon/php.svg'

// Logos
import beds911 from '../assets/iconProjects/911beds.svg'
import tatuate from '../assets/iconProjects/tatuate.svg'
import none from '../assets/iconProjects/none.svg'
import club from '../assets/iconProjects/club.svg'
import lol from '../assets/iconProjects/lol.svg'


export const projects = [
    {
        id:1, 
        name:'911 Beds', 
        description:'Catálogo de productos que cuenta con una base de datos la cual permite la gestión de cada uno de sus productos.​',
        logo: beds911,
        link:'https://www.911colchon.com/',
        front: [{id: 1, name: xd},{id: 2, name: ilus},{id: 3, name: html},{id: 4, name: css},{id: 5, name: js},{id: 6, name: bootstrap}, ],
        back: [{id:1, name: python}, {id:2, name:django}],
    },

    {
        id:2, 
        name:'League of legends', 
        description:'Interfaz grafica que consume API de league of legends para mostrar sus campeones y los detalles del mismo',
        logo: lol,
        link: 'https://leycor.github.io/lol/',
        front: [{id: 1, name: html },{id: 2, name: css},{id: 3, name: js},{id: 4, name: react},{id: 5, name: tailwind}, ],
        back: [],
    },

    {
        id:3, 
        name:'Latin Usa Venezuela', 
        description:'Catálogo de modelos que cuenta con un registro de datos que serán almacenados para posteriormente ser gestionados por usuarios con distintos roles​',
        logo: none,
        link: 'https://latinusavenezuela.com/',
        front: [{id: 1, name: xd},{id: 2, name: ilus},{id: 3, name: html},{id: 4, name: css},{id: 5, name: js},{id: 6, name: bootstrap}, ],
        back: [{id:1, name: python}, {id:2, name:django}],
    },

    {
        id:4, 
        name:'Club de empresarios', 
        description:'Blog privado con sistema de suscripción el cual permite a usuarios con distintos roles realizar multiples acciones con los post',
        logo: club,
        link: 'https://clubdeempresarios.co/',
        front: [{id: 1, name: xd},{id: 2, name: ilus},{id: 3, name: html},{id: 4, name: css},{id: 5, name: js},{id: 6, name: bootstrap}, ],
        back: [{id:1, name: php}, {id:2, name:laravel}],
    },


    {
        id:5, 
        name:'Json Placeholder', 
        description:'Interfaz grafica que consume API de JsonPlaceholder para mostrar usuarios, post y comentarios',
        logo: git,
        link: 'https://leycor.github.io/jsonplaceholder/',
        front: [{id: 1, name: html },{id: 2, name: css},{id: 3, name: js},{id: 4, name: react},{id: 5, name: tailwind}, ],
        back: [],
    },
    

    {
        id:6, 
        name:'Venus Blood', 
        description:'Plataforma desarrollada para el control de cotización de los tatuajes, y control de los reportes que se van generando en el negocio.',
        logo: tatuate,
        link: 'https://tatuate.com/',
        front: [{id: 1, name: xd},{id: 2, name: ilus},{id: 3, name: html},{id: 4, name: css},{id: 5, name: js},{id: 6, name: bootstrap}, ],
        back: [{id:1, name: php}, {id:2, name:laravel}],
    },

    {
        id:7, 
        name:'Bryan Rivas', 
        description:'Este bonito portafolio =)',
        logo: git,
        link: 'https://leycor.github.io/bryan/',
        front: [{id: 1, name: html },{id: 2, name: css},{id: 3, name: js},{id: 4, name: react},{id: 5, name: tailwind}, ],
        back: [],
    },

    {
        id:8, 
        name:'Educación prohibida', 
        description:'Single Page que mostraba a los usuarios una serie de tutoriales',
        logo: none,
        link: '#404',
        front: [{id: 1, name: xd},{id: 2, name: ilus},{id: 3, name: html},{id: 4, name: css},{id: 5, name: js},{id: 6, name: bootstrap}, ],
        back: [],
    },

    {
        id:9, 
        name:'Atalanta Studio', 
        description:'Aplicacion web enfocado en el mundo del modelaje a través de videochat',
        logo: none,
        link: '#404',
        front: [{id: 1, name: xd},{id: 2, name: ilus},{id: 3, name: html},{id: 4, name: css},{id: 5, name: js},{id: 6, name: bootstrap}, ],
        back: [],
    },

]