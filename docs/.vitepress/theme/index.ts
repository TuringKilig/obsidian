import DefaultTheme from 'vitepress/theme'
import TaskList from './components/TaskList.vue'
import type { Theme } from 'vitepress'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TaskList', TaskList)
  }
}

export default theme

