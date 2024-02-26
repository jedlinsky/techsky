import type { ResolveMessage } from './types.js'

const formatter = new Intl.ListFormat('en-GB', { type: 'disjunction' })

const resolveMessage: ResolveMessage = function ({ resolvedExisting, suffix }) {
  const resolved = [...resolvedExisting]
    .sort((extensionA, extensionB) => extensionA.localeCompare(extensionB))
    .map((extension) => `'${suffix ? `/${suffix}` : ''}${extension}'`)

  return formatter.format(resolved)
}

export { resolveMessage }
