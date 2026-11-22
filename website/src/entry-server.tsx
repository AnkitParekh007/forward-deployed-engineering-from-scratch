import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './App';
import {routeMetadata,BASE,ROOT} from './model';
export {routeMetadata,BASE,ROOT};
export function render(path:string){return renderToString(<StaticRouter basename={BASE} location={BASE+path}><App/></StaticRouter>)}
