import { guides } from "./guides";

// Componentes
import ReactConocimientos from '../components/molecules/ReactConocimientos'
import ReactProgramas from '../components/molecules/ReactProgramas'
import ReactExtensiones from '../components/molecules/ReactExtensiones'
import ReactIntroduccion from '../components/molecules/ReactIntroduccion'

// Obtengo e link de react por medio del id para luego asignarlos a mis temarios
const reactUrl = guides.find( guide => guide.id === 5).link

// Componentes
// 1- Requisitos y recomendaciones

export const reactGuide = [
  {
    id: 1,
    temaryName: "REQUISITOS Y RECOMENDACIONES",
    topic: [
      { id: 1, topicName: "Introducción", topicComponent: ReactIntroduccion ,topicLink: `${reactUrl}` },
      { id: 2, topicName: "Conocimientos previos", topicComponent: ReactConocimientos ,topicLink: `${reactUrl}/conocimientos-previos` },
      { id: 3, topicName: "Programas necesarios", topicComponent: ReactProgramas ,topicLink: `${reactUrl}/programas-necesarios` },
      { id: 4, topicName: "Extensiones y plugins", topicComponent: ReactExtensiones ,topicLink: `${reactUrl}/extensiones-plugins` },
    ],
  },

  {
    id: 2,
    temaryName: "JSX",
    topic: [
      { id: 1, topicName: "jsx1", topicLink: `${reactUrl}/jsx1` },
      { id: 2, topicName: "jsx2", topicLink: `${reactUrl}/jsx2` },
      { id: 3, topicName: "jsx3", topicLink: `${reactUrl}/jsx3` },
    ],
  },

  {
    id: 3,
    temaryName: "COMPONENTES",
    topic: [
      { id: 1, topicName: "components1", topicLink: `${reactUrl}/components1` },
      { id: 2, topicName: "components2", topicLink: `${reactUrl}/components2` },
      { id: 3, topicName: "components3", topicLink: `${reactUrl}/components3` },
    ],
  },

  {
    id: 4,
    temaryName: "HOOKS",
    topic: [
      { id: 1, topicName: "hooks1", topicLink: `${reactUrl}/hooks1` },
      { id: 2, topicName: "hooks2", topicLink: `${reactUrl}/hooks2`},
      { id: 3, topicName: "hooks3", topicLink: `${reactUrl}/hooks3` },
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
