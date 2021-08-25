// This file isn't typescript due to missing type declarations for
// the `prism-react-renderer/prism` package, and also having to augment
// the type declaration for the window. Since all we're doing is adding
// language support for prism this feels almost more like a config thing
// so it didn't feel worthwhile to go through the trouble of setting this
// all up in typescript.
import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-hcl');
