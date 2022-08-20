import debug from 'debug';

import { CONFIG } from 'src/config';

export const debugLog = debug(CONFIG.DEBUG_NAMESPACE);
