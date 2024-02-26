import mem from 'mem'
import { loadEditorConfigUnmemoized } from './loadEditorConfigUnmemoized.js'

const loadEditorConfigMemoized = mem(loadEditorConfigUnmemoized)

export { loadEditorConfigMemoized }
