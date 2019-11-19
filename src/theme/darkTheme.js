import { merge } from 'lodash'
import components from './variables/componentsDark'
import mediumTheme from './mediumTheme'

export default merge({}, mediumTheme, { components })
