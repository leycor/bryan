import bootstrap from '../assets/icon/bootstrap.svg'
import css from '../assets/icon/css.svg'
import django from '../assets/icon/django.svg'
import git from '../assets/icon/git.svg'
import html from '../assets/icon/html.svg'
import ilus from '../assets/icon/ilus.svg'
import js from '../assets/icon/js.svg'
import python from '../assets/icon/python.svg'
import react from '../assets/icon/react.svg'
import tailwind from '../assets/icon/tailwind.svg'
import xd from '../assets/icon/xd.svg'

export const guides = [
    {
        id:1, name:'Python', 
        description:'Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.​',
        link:'/python',
        img: python,
    },

    {

        id:2, name:'Django',
        description:'Django es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador.',
        link:'/django',
        img: django,
    },

    {

        id:3, name:'Javascript',
        description:'JavaScript es el único lenguaje de programación que funciona en los navegadores de forma nativa',
        link:'/javascript',
        img: js,
    },

    {
        id:4, name:'React', 
        description:'React es una biblioteca Javascript diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. ',
        link:'/react',
        img: react,
    },

    {
        id:5, name:'Tailwind',
        description:'Tailwind CSS es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código',
        link:'/tailwind',
        img: tailwind,

    },

    {
        id:6, name:'AdobeXD',
        description:'Adobe XD es un editor de gráficos vectoriales desarrollado para diseñar y crear un prototipo de la experiencia del usuario para páginas web y aplicaciones móviles. ',
        link:'/adobeXD',
        img: xd,

    },

    {
        id:7, name:'Illustrator',
        description:'Adobe Illustrator es un editor de gráficos vectoriales', 
        link:'/illustrator',
        img: ilus,
    },

    {
        id:8, name:'Git',
        description:'Git es una herramienta que realiza una función del control de versiones de código de forma distribuida',
        link:'/git',
        img: git,
    },

    {
        id:9, name:'Html5',
        description:'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas', link:'/html5',
        img: html,
    },

    {
        id:10, name:'Css3',
        description:'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​',
        link:'/css3',
        img: css,
    },

    {
        id:11, name:'Bootstrap',
        description:'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones​',
        link:'/bootstrap',
        img: bootstrap,
    }
]
