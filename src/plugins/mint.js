import Vue from 'vue'
import 'mint-ui/lib/style.css'

import { Button, InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.component(Button.name, Button)
