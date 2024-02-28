import { extensions } from './extensions.js'

const extensionsPattern = extensions.join('|')

// const importRegex = new RegExp(
//   `import\\s+(?:[^*\\n\\t\\{\\},]+\\s*(?:,|\\s+))?\\{?(?:\\s*[^ \\n\\t"'\{\\}]+\\s*,?)*\\}?\\s*(?:\\*\\s*as\\s+[^ \\n\\t\\{\\}]+\\s+)?from\\s+['"][^'"\n]+\\.(${extensionsPattern})['"]`,
//   'g'
// )

const importRegexSimple = new RegExp(`import\\s+.*?from\\s+['"][^'"\n]+\\.(${extensionsPattern})['"]`, 'g')

export { /* importRegex, */ importRegexSimple }
