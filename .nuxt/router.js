import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13f8e86e = () => interopDefault(import('../pages/cadastrar.vue' /* webpackChunkName: "pages/cadastrar" */))
const _535b3a2c = () => interopDefault(import('../pages/categorias/index.vue' /* webpackChunkName: "pages/categorias/index" */))
const _1a326ebe = () => interopDefault(import('../pages/entrar.vue' /* webpackChunkName: "pages/entrar" */))
const _023abce6 = () => interopDefault(import('../pages/produtos/index.vue' /* webpackChunkName: "pages/produtos/index" */))
const _c2ec50d8 = () => interopDefault(import('../pages/categorias/_id.vue' /* webpackChunkName: "pages/categorias/_id" */))
const _d2027e64 = () => interopDefault(import('../pages/produtos/_id.vue' /* webpackChunkName: "pages/produtos/_id" */))
const _ba32ecce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior,

  routes: [{
    path: "/cadastrar",
    component: _13f8e86e,
    name: "cadastrar"
  }, {
    path: "/categorias",
    component: _535b3a2c,
    name: "categorias"
  }, {
    path: "/entrar",
    component: _1a326ebe,
    name: "entrar"
  }, {
    path: "/produtos",
    component: _023abce6,
    name: "produtos"
  }, {
    path: "/categorias/:id",
    component: _c2ec50d8,
    name: "categorias-id"
  }, {
    path: "/produtos/:id",
    component: _d2027e64,
    name: "produtos-id"
  }, {
    path: "/",
    component: _ba32ecce,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
