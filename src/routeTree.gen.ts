/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as EditorLayoutImport } from './routes/editor/layout'
import { Route as IndexImport } from './routes/index'
import { Route as EditorIndexImport } from './routes/editor/index'
import { Route as EditorTemplateIdImport } from './routes/editor/$templateId'

// Create/Update Routes

const EditorLayoutRoute = EditorLayoutImport.update({
  id: '/editor',
  path: '/editor',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EditorIndexRoute = EditorIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => EditorLayoutRoute,
} as any)

const EditorTemplateIdRoute = EditorTemplateIdImport.update({
  id: '/$templateId',
  path: '/$templateId',
  getParentRoute: () => EditorLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/editor': {
      id: '/editor'
      path: '/editor'
      fullPath: '/editor'
      preLoaderRoute: typeof EditorLayoutImport
      parentRoute: typeof rootRoute
    }
    '/editor/$templateId': {
      id: '/editor/$templateId'
      path: '/$templateId'
      fullPath: '/editor/$templateId'
      preLoaderRoute: typeof EditorTemplateIdImport
      parentRoute: typeof EditorLayoutImport
    }
    '/editor/': {
      id: '/editor/'
      path: '/'
      fullPath: '/editor/'
      preLoaderRoute: typeof EditorIndexImport
      parentRoute: typeof EditorLayoutImport
    }
  }
}

// Create and export the route tree

interface EditorLayoutRouteChildren {
  EditorTemplateIdRoute: typeof EditorTemplateIdRoute
  EditorIndexRoute: typeof EditorIndexRoute
}

const EditorLayoutRouteChildren: EditorLayoutRouteChildren = {
  EditorTemplateIdRoute: EditorTemplateIdRoute,
  EditorIndexRoute: EditorIndexRoute,
}

const EditorLayoutRouteWithChildren = EditorLayoutRoute._addFileChildren(
  EditorLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/editor': typeof EditorLayoutRouteWithChildren
  '/editor/$templateId': typeof EditorTemplateIdRoute
  '/editor/': typeof EditorIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/editor/$templateId': typeof EditorTemplateIdRoute
  '/editor': typeof EditorIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/editor': typeof EditorLayoutRouteWithChildren
  '/editor/$templateId': typeof EditorTemplateIdRoute
  '/editor/': typeof EditorIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/editor' | '/editor/$templateId' | '/editor/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/editor/$templateId' | '/editor'
  id: '__root__' | '/' | '/editor' | '/editor/$templateId' | '/editor/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  EditorLayoutRoute: typeof EditorLayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  EditorLayoutRoute: EditorLayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/editor"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/editor": {
      "filePath": "editor/layout.tsx",
      "children": [
        "/editor/$templateId",
        "/editor/"
      ]
    },
    "/editor/$templateId": {
      "filePath": "editor/$templateId.tsx",
      "parent": "/editor"
    },
    "/editor/": {
      "filePath": "editor/index.tsx",
      "parent": "/editor"
    }
  }
}
ROUTE_MANIFEST_END */
