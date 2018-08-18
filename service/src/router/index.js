import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Guide from '../components/Guide.vue'
import Party from '../components/Party.vue'
import Law from '../components/Law.vue'
import Government from '../components/Government.vue'
import Life from '../components/Life.vue'
import Style from '../components/Style.vue'
import Volunteer from '../components/Volunteer.vue'
import party_footer from '../components/party_footer.vue'
import Guide_footer from '../components/Guide_footer.vue'
import Law_footer from '../components/Law_footer.vue'
import life_footer from '../components/Life_footer.vue'
import Style_footer from '../components/Style_footer.vue'
import Details from '../components/Details.vue'
import Details_container from '../components/Details_container.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/guide',
      name: 'Guide',
      component:Guide,
      children:[
        {
          path: '/guide_footer/:id',
          name: 'Guide_footer',
          component:Guide_footer
        }
      ],redirect: '/guide_footer/1'
    },
    {
      path: '/party',
      name: 'Party',
      component:Party,
      children:[
        {
          path: '/party_footer/:id',
          name: 'party_footer',
          component:party_footer
        }
      ],redirect: '/party_footer/2'
    },
    {
      path: '/law',
      name: 'Law',
      component:Law,
      children:[
        {
          path: '/law_bottom_footer/:id',
          name: 'law_bottom_footer',
          component:Law_footer
        }
      ],redirect:'/law_bottom_footer/1'
    },
    {
      path: '/government',
      name: 'government',
      component:Government,
      children:[]
    },
    {
      path: '/life',
      name: 'life',
      component:Life,
      children:[
        {
          path: '/life_footer/:id',
          name: 'life_footer',
          component:life_footer
        }
      ],redirect:'/life_footer/1'
    },
    {
      path: '/style',
      name: 'style',
      component:Style,
      children:[
        {
          path: '/style_footer/:id',
          name: 'style_footer',
          component:Style_footer
        }
      ],redirect:'/style_footer/1'
    },
    {
      path: '/volunteer',
      name: 'Volunteer',
      component:Volunteer
    },
    {
      path:'/government/details/:id',
      name:'government_details',
      component:Details
    },
    {
      path:'/Details_container',
      name:'Details_container',
      component:Details_container
    }

  ]
})
