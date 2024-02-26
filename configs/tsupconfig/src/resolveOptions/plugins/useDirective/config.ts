const placeholderUseClient = "import '__USE_CLIENT__';"
const placeholderUseClientReplace = `'use client';\n`

const placeholderUseServer = "import '__USE_SERVER__';"
const placeholderUseServerReplace = `'use server';\n`

const useClientRegExp = /^(\s*)?['"]use client['"](\s*)?/i
const useServerRegExp = /^(\s*)?['"]use server['"](\s*)?/i

export {
  placeholderUseClient,
  placeholderUseClientReplace,
  placeholderUseServer,
  placeholderUseServerReplace,
  useClientRegExp,
  useServerRegExp
}
