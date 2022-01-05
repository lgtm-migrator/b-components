const root = './' // 路径没有问题，当前是为符合nodejs的环境，而不是为了符合gulp的环境。
const nodeModules = root + 'node_modules/'
const gulpfile = root + 'gulpfile.js/'
const src = root + 'src/'
const docs = root + 'docs/'
const assets = root + 'docs/assets/'
const dist = root + 'dist/'


export default {
  root: root,
  nodeModules: nodeModules,
  gulpfile: gulpfile,
  src: src,
  docs: docs,
  assets: assets,
  dist: dist,
};
