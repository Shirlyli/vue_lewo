import Vue from 'vue'
import 'mint-ui/lib/style.css'

import { Button, InfiniteScroll, Header, Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(InfiniteScroll)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
