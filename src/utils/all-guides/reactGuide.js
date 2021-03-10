// 1- Importación de guias
import { guides } from "./guides";

// 2- Importación de Componentes dónde se renderizaran las guias
import ReactPrimerosPasos from "../../components/molecules/react-guide/ReactPrimerosPasos";
import ReactProgramas from '../../components/molecules/react-guide/ReactProgramas'
import ReactExtensiones from '../../components/molecules/react-guide/ReactExtensiones'
import ReactIntroduccion from '../../components/molecules/react-guide/ReactIntroduccion'
import ReactConstLet from "../../components/molecules/react-guide/ReactConstLet";
import ReactTemplateString from "../../components/molecules/react-guide/ReactTemplateString";
import ReactObjetoLiteral from "../../components/molecules/react-guide/ReactObjetoLiteral";
import ReactArreglos from "../../components/molecules/react-guide/ReactArreglos";
import ReactFunciones from "../../components/molecules/react-guide/ReactFunciones";
import ReactDescObject from "../../components/molecules/react-guide/ReactDescObject";
import ReactPromesas from "../../components/molecules/react-guide/ReactPromesas";
import ReactFetch from "../../components/molecules/react-guide/ReactFetch";
import ReactTernario from "../../components/molecules/react-guide/ReactTernario";
import ReactAsync from "../../components/molecules/react-guide/ReactAsync";
import ReactJsx from "../../components/molecules/react-guide/ReactJsx";
import ReactComponents from "../../components/molecules/react-guide/ReactComponents";
import ReactPropTypes from "../../components/molecules/react-guide/ReactPropTypes";
import ReactEvents from "../../components/molecules/react-guide/ReactEvents";

// 3- Obtener e link de git por medio del id para luego asignarlos a mis temarios
const reactUrl = guides.find( guide => guide.id === 5).link

// 4- Crear lista contenedora de guia

export const reactGuide = [
  {
    id: 1,
    temaryName: "INTRODUCCIÓN A REACT",
    topic: [
      { id: 1, topicName: "Introducción", topicComponent: ReactIntroduccion ,topicLink: `${reactUrl}` },
      { id: 3, topicName: "Instalaciones", topicComponent: ReactProgramas ,topicLink: `${reactUrl}/programas-necesarios` },
      { id: 4, topicName: "Extensiones y plugins", topicComponent: ReactExtensiones ,topicLink: `${reactUrl}/extensiones-plugins` },
      { id: 2, topicName: "Primeros pasos", topicComponent: ReactPrimerosPasos ,topicLink: `${reactUrl}/primeros-pasos` },
    ],
  },

  {
    id: 2,
    temaryName: "FUNDAMENTOS JS",
    topic: [
      { id: 1, topicName: "Const & Let", topicComponent: ReactConstLet, topicLink: `${reactUrl}/const-let` },
      { id: 2, topicName: "Template String", topicComponent: ReactTemplateString, topicLink: `${reactUrl}/template-string` },
      { id: 3, topicName: "Operador Ternario", topicComponent: ReactTernario, topicLink:`${reactUrl}/operadot-ternario` },
      { id: 4, topicName: "Objeto literal", topicComponent: ReactObjetoLiteral, topicLink: `${reactUrl}/objeto-literal` },
      { id: 5, topicName: "Arreglos", topicComponent: ReactArreglos, topicLink: `${reactUrl}/arreglos` },
      { id: 6, topicName: "Funciones", topicComponent: ReactFunciones, topicLink: `${reactUrl}/funciones` },
      { id: 7, topicName: "Desestructuración", topicComponent: ReactDescObject,  topicLink: `${reactUrl}/desestructuracion` },
      { id: 8, topicName: "Promesas", topicComponent: ReactPromesas, topicLink: `${reactUrl}/promesas` },
      { id: 9, topicName: "Fetch", topicComponent: ReactFetch, topicLink: `${reactUrl}/fetch` },
      { id: 10, topicName: "Async-Await", topicComponent: ReactAsync, topicLink: `${reactUrl}/async-await` },

    ],
  },

  {
    id: 3,
    temaryName: "CONCEPTOS BÁSICOS",
    topic: [
      { id: 1, topicName: "Jsx", topicComponent: ReactJsx, topicLink: `${reactUrl}/jsx` },
      { id: 2, topicName: "Componentes & Propiedades", topicComponent: ReactComponents, topicLink: `${reactUrl}/componentes` },
      { id: 3, topicName: "Proptypes", topicComponent: ReactPropTypes, topicLink: `${reactUrl}/proptypes` },
      { id: 4, topicName: "Eventos", topicComponent: ReactEvents, topicLink: `${reactUrl}/eventos` },
    ],
  },

  {
    id: 4,
    temaryName: "HOOKS",
    topic: [
      { id: 1, topicName: "useState", topicLink: `${reactUrl}/hooks1` },
      { id: 2, topicName: "useEffect", topicLink: `${reactUrl}/hooks2`},
      { id: 3, topicName: "useContext", topicLink: `${reactUrl}/hooks3` },
    ],
  },

  {
    id: 5,
    temaryName: "REACT ROUTER",
    topic: [
      { id: 1, topicName: "reactRouter1", topicLink: `${reactUrl}/react-router1` },
      { id: 2, topicName: "reactRouter2", topicLink: `${reactUrl}/react-router2` },
      { id: 3, topicName: "reactRouter3", topicLink: `${reactUrl}/react-router3` },
    ],
  },
];
