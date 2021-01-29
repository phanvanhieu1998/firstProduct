<template>
  <transition name="expand"
  @enter="enter"
  @after-enter="afterEnter"
  @leave="leave"
  >
      <ul v-show="list.open">
          <li v-for="(item, index) in list.subItem" :key="index">
              <nuxt-link to="">{{item.title}}</nuxt-link>

          </li>
      </ul>
  </transition>
</template>

<script>
export default {
    props:[
        'list'
    ],
    methods:{
        enter(el){
            el.style.height ='auto';
            const height = getComputedStyle(el).height;
            el.style.height = 0;

            getComputedStyle(el);
            setTimeout(()=>{
                el.style.height = height
            })

        },
        afterEnter(el){
            el.style.height = 'auto';
        },
        leave(el){
            el.style.height = getComputedStyle(el).height;
             getComputedStyle(el);
            setTimeout(()=>{
                el.style.height = 0
            })

        }
    }
}
</script>

<style>
.expand-enter-active, .expand-leave-active {
    transition: height .5s ease-in-out;
    overflow: hidden;
}
</style>