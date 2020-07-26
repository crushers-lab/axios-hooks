import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    'prop-types',
    'axios'
  ],
  plugins: [
    external(),
    filesize(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    resolve(),
    commonjs()
  ]
};

