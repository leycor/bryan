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
import ReactUseState from "../../components/molecules/react-guide/ReactUseState";
import ReactUseEffect from "../../components/molecules/react-guide/ReactUseEffect";
import ReactHooksReglas from "../../components/molecules/react-guide/ReactHooksReglas";
import ReactHooksCustom from "../../components/molecules/react-guide/ReactHooksCustom";
import ReactUseContext from "../../components/molecules/react-guide/ReactUseContext";
import ReactTailwind from "../../components/molecules/react-guide/ReactTailwind";
import ReactGitPages from "../../components/molecules/react-guide/ReactGitPages";
import ReactRouterInstalacion from "../../components/molecules/react-guide/ReactRouterInstalacion";
import ReactRouterEjemplos from "../../components/molecules/react-guide/ReactRouterEjemplos";
import ReactRouterHooks from "../../components/molecules/react-guide/ReactRouterHooks";
import ReactUseMemo from "../../components/molecules/react-guide/ReactUseMemo";
import ReactReduxDependencias from "../../components/molecules/react-guide/ReactReduxDependencias";
import ReactReduxStore from "../../components/molecules/react-guide/ReactReduxStore";
import ReactReduxReducers from "../../components/molecules/react-guide/ReactReduxReducers";
import ReactReduxActions from "../../components/molecules/react-guide/ReactReduxActions";
import ReactReduxView from "../../components/molecules/react-guide/ReactReduxView";
import ReactReduxHooks from "../../components/molecules/react-guide/ReactReduxUseHooks";

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
      { id: 1, topicName: "useState", topicComponent: ReactUseState, topicLink: `${reactUrl}/usestate` },
      { id: 2, topicName: "useEffect", topicComponent: ReactUseEffect, topicLink: `${reactUrl}/useeffect`},
      { id: 3, topicName: "Custom Hook", topicComponent: ReactHooksCustom, topicLink: `${reactUrl}/custom-hooks`},
      { id: 4, topicName: "useContext", topicComponent: ReactUseContext, topicLink: `${reactUrl}/usecontext`},
      { id: 5, topicName: "useMemo", topicComponent: ReactUseMemo, topicLink: `${reactUrl}/usememo`},
      { id: 6, topicName: "Reglas", topicComponent: ReactHooksReglas, topicLink: `${reactUrl}/reglas` },
    ],
  },

  {
    id: 5,
    temaryName: "REDUX",
    topic: [
      { id: 1, topicName: "Dependencias", topicComponent: ReactReduxDependencias, topicLink: `${reactUrl}/redux-dependencias` },
      { id: 2, topicName: "Actions", topicComponent: ReactReduxActions, topicLink: `${reactUrl}/redux-actions`},
      { id: 3, topicName: "Reducers", topicComponent: ReactReduxReducers, topicLink: `${reactUrl}/redux-reducer` },
      { id: 4, topicName: "Store", topicComponent: ReactReduxStore , topicLink: `${reactUrl}/redux-store`},
      { id: 5, topicName: "view", topicComponent: ReactReduxView, topicLink: `${reactUrl}/redux-view`},
      { id: 6, topicName: "Hooks", topicComponent: ReactReduxHooks, topicLink: `${reactUrl}/redux-useSelector`},
    ],
  },

  {
    id: 6,
    temaryName: "REACT ROUTER",
    topic: [
      { id: 1, topicName: "Instalación", topicComponent: ReactRouterInstalacion, topicLink: `${reactUrl}/react-router-instalacion` },
      { id: 2, topicName: "Ejemplos", topicComponent: ReactRouterEjemplos, topicLink: `${reactUrl}/react-router-ejemplos` },
      { id: 3, topicName: "Hooks disponibles", topicComponent: ReactRouterHooks, topicLink: `${reactUrl}/react-router-hooks` },
    ],
  },

  {
    id: 7,
    temaryName: "UTILIDADES",
    topic: [
      { id: 1, topicName: "Tailwind & React", topicComponent: ReactTailwind, topicLink: `${reactUrl}/react-tailwind` },
      { id: 2, topicName: "Github Pages & React", topicComponent: ReactGitPages, topicLink: `${reactUrl}/react-github-pages` },
    ],
  },
];
