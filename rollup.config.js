// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
// rollup-plugin-esbuild 是用来把ts文件编译成js
// rollup-plugin-vue  是用来把vue文件编译成js
// rollup-plugin-scss  是用来把scss文件编译成js
// rollup-plugin-terser 是用来简化(压缩)代码的
import esbuild from 'rollup-plugin-esbuild'  
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'Imperfect',
    file: 'dist/lib/imperfect.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'Imperfect',
    file: 'dist/lib/imperfect.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    vue({
      include: /\.vue$/,
    })
  ],
}