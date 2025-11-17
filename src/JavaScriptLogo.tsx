export const JavaScriptLogo = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 630 630' width={48} height={48}>
    <rect width='630' height='630' fill='#f7df1e' />
    <path d='m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z' />
  </svg>
)



/**
 * Componente que renderiza un icono de Semáforo a partir de un SVG.
 *
 * @param {object} props - Propiedades del componente.
 * @param {number} [props.width=48] - Ancho del SVG.
 * @param {number} [props.height=48] - Alto del SVG.
 */
export const TrafficLightIcon = ({ width = 48, height = 48 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    {/* Las definiciones de estilo deben transformarse en JSX 'style' o eliminarse y usar 'className'/'style' directamente */}
    <style>
      {`.cls-2{fill:#3e436d}.cls-3{fill:#32314b}.cls-10{fill:#f55b4b}.cls-11{fill:#ef995e}.cls-12{fill:#4acc97}`}
    </style>
    
    <circle cx="256" cy="256" r="256" style={{ fill: '#3586cb' }} id="BULINE" />
    
    <g id="Icons">
      {/* Cuerpo principal del semáforo */}
      <path
        className="cls-2"
        d="M333 42.4v378.93A17.69 17.69 0 0 1 315.32 439h-27.25v71a258.12 258.12 0 0 1-64.14 0v-71h-27.25A17.69 17.69 0 0 1 179 421.33V42.4a17.68 17.68 0 0 1 17.68-17.68h118.64A17.68 17.68 0 0 1 333 42.4z"
      />
      
      {/* Base Inferior */}
      <path className="cls-3" d="M223.93 439.01h64.14v28.48h-64.14z" />
      
      {/* Luz Roja (Superior) */}
      <circle className="cls-3" cx="256" cy="103.68" r="61" />
      <circle cx="256" cy="103.68" r="46.14" style={{ fill: '#db1b1b' }} />
      <path
        d="M266.65 148.58a46.14 46.14 0 1 1 0-89.81 46.15 46.15 0 0 0 0 89.81z"
        style={{ fill: '#bf1919' }}
      />
      
      {/* Luz Amarilla/Ámbar (Medio) */}
      <circle className="cls-3" cx="256" cy="233.26" r="61" />
      <circle cx="256" cy="233.26" r="46.14" style={{ fill: '#e88032' }} />
      <path
        d="M266.65 278.16a46.14 46.14 0 1 1 0-89.81 46.15 46.15 0 0 0 0 89.81z"
        style={{ fill: '#ce6d2c' }}
      />
      
      {/* Luz Verde (Inferior) */}
      <circle className="cls-3" cx="256" cy="362.84" r="61" />
      <circle cx="256" cy="362.84" r="46.14" style={{ fill: '#38c487' }} />
      <path
        d="M266.65 407.74a46.14 46.14 0 1 1 0-89.81 46.15 46.15 0 0 0 0 89.81z"
        style={{ fill: '#00b564' }}
      />
      
      {/* Detalles y Soportes (Lados Izquierdo y Derecho) */}
      
      {/* Lado Izquierdo (Superior, Medio, Inferior) */}
      <path
        className="cls-2"
        d="M179 42.68v74.16h-1.66A29.73 29.73 0 0 1 152.26 103l-27.55-43.43A11 11 0 0 1 134 42.68z"
      />
      <path className="cls-3" d="M179 42.4v74.44h-1.66a29.6 29.6 0 0 1-13.84-3.43v-71z" />
      <path
        className="cls-2"
        d="M179 176.18v74.16h-1.66a29.73 29.73 0 0 1-25.08-13.8l-27.55-43.47a11 11 0 0 1 9.3-16.89z"
      />
      <path className="cls-3" d="M179 175.9v74.44h-1.66a29.6 29.6 0 0 1-13.84-3.43v-71z" />
      <path
        className="cls-2"
        d="M179 309.68v74.16h-1.66A29.73 29.73 0 0 1 152.26 370l-27.55-43.47a11 11 0 0 1 9.3-16.89z"
      />
      <path className="cls-3" d="M179 309.4v74.44h-1.66a29.6 29.6 0 0 1-13.84-3.43v-71z" />
      
      {/* Lado Derecho (Superior, Medio, Inferior) */}
      <path
        className="cls-2"
        d="M333 42.68v74.16h1.66A29.73 29.73 0 0 0 359.74 103l27.55-43.47A11 11 0 0 0 378 42.68z"
      />
      <path className="cls-3" d="M333 42.4v74.44h1.66a29.6 29.6 0 0 0 13.84-3.43v-71z" />
      <path
        className="cls-2"
        d="M333 176.18v74.16h1.66a29.73 29.73 0 0 0 25.08-13.8l27.55-43.47a11 11 0 0 0-9.3-16.89z"
      />
      <path className="cls-3" d="M333 175.9v74.44h1.66a29.6 29.6 0 0 0 13.84-3.43v-71z" />
      <path
        className="cls-2"
        d="M333 309.68v74.16h1.66A29.73 29.73 0 0 0 359.74 370l27.55-43.47a11 11 0 0 0-9.3-16.89z"
      />
      <path className="cls-3" d="M333 309.4v74.44h1.66a29.6 29.6 0 0 0 13.84-3.43v-71z" />
      
      {/* Reflejos (Derecha Superior, Medio, Inferior) */}
      {/* Rojo */}
      <circle className="cls-10" cx="281" cy="92.26" r="10.14" />
      <circle className="cls-10" cx="281" cy="113.39" r="7.18" />
      {/* Ámbar */}
      <circle className="cls-11" cx="281" cy="222.78" r="10.14" />
      <circle className="cls-11" cx="281" cy="243.91" r="7.18" />
      {/* Verde */}
      <circle className="cls-12" cx="281" cy="353.3" r="10.14" />
      <circle className="cls-12" cx="281" cy="374.43" r="7.18" />
    </g>
  </svg>
);



