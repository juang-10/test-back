import { buildMakeClosures } from './closures_dom';

const makeClosures = buildMakeClosures();

const service = {
    makeClosures,
};
export default service;
export { makeClosures };
