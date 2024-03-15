
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)
app.mixin({
  props: {
    setControleScroller: {
      type: Function
    },
  },
  created() {
    if (this.darkMode) {
      this.classBtnSubir = 'botaoSubir-Dark'
    } else {
      this.classBtnSubir = 'botaoSubir-Light'
    }
  },
  methods: {
    animarBTN(movement, id) {
      if (movement == 'enter') {
        document.getElementById(id).classList.add('fa-bounce')
      } else {
        document.getElementById(id).classList.remove('fa-bounce')
      }
    },
    changeStyle(icone, action, id) {      
      if (icone == 'git') {
        if (action == 'leave') {
          if (this.darkMode == false) {
            this.styleIconeGit = 'color: #222121;'
          } else {
            this.styleIconeGit = 'color: #F2F2F2;'
          }
          document.getElementById(id).classList.remove('fa-bounce')
        } else {
          document.getElementById(id).classList.add('fa-bounce')
          this.styleIconeGit = 'color: #703187'
        }

      }
      else if (icone == 'link') {
        if (action == 'leave') {
          if (this.darkMode == false) {
            this.styleIconeLinke = 'color: #222121;'
          } else {
            this.styleIconeLinke = 'color: #F2F2F2;'
          }
          document.getElementById(id).classList.remove('fa-bounce')
        } else {
          document.getElementById(id).classList.add('fa-bounce')
          this.styleIconeLinke = 'color: #0078D4'
        }

      }
      else if (icone == 'wpp') {
        if (action == 'leave') {
          if (this.darkMode == false) {
            this.styleIconeWpp = 'color: #222121;'
          } else {
            this.styleIconeWpp = 'color: #F2F2F2;'
          }
          document.getElementById(id).classList.remove('fa-bounce')
        } else {
          document.getElementById(id).classList.add('fa-bounce')
          this.styleIconeWpp = 'color: #40C351'
        }

      }
      else if (icone == 'play') {
        if (action == 'leave') {
          if (this.darkMode == false) {
            this.styleIconePlay = 'color: #222121;'
          } else {
            this.styleIconePlay = 'color: #F2F2F2;'
          }
          document.getElementById(id).classList.remove('fa-bounce')
        } else {
          document.getElementById(id).classList.add('fa-bounce')
          this.styleIconePlay = 'color: #00bfff'
        }

      }
    }
  },
  data() {
    return {
      styleIconeGit: '',
      styleIconeLinke: '',
      styleIconeWpp: '',
      styleIconePlay: ''
    }
  },
  watch: {
    darkMode() {
      if (this.darkMode) {
        this.classBtnSubir = 'botaoSubir-Dark'
      } else {
        this.classBtnSubir = 'botaoSubir-Light'
      }
    },
  },
})
app.use(router)
app.use(vuetify)


app.mount('#app')
