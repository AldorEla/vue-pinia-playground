# Vue JS
The JS framework  
2023-0519

## Getting Started
```sh
$ npm init vue@latest
Need to install the following packages:
  create-vue@latest
Ok to proceed? (y) y
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'create-vue@3.6.4',
npm WARN EBADENGINE   required: { node: '>=v16.20.0' },
npm WARN EBADENGINE   current: { node: 'v16.10.0', npm: '7.24.0' }
npm WARN EBADENGINE }

Vue.js - The Progressive JavaScript Framework

✔ Project name: … inprogress
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit Testing? … Yes
✔ Add an End-to-End Testing Solution? › Playwright
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes

Scaffolding project in /home/ela/playground/vue/inprogress...

Done. Now run:

  cd inprogress
  npm install
  npm run format
  npm run dev
```

## Project Resources
* [Prettier](https://prettier.io/) - An opinionated code formatte
* [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
* [Playwright](https://playwright.dev/) - Enables reliable end-to-end testing for modern web apps
* [Vitest](https://vitest.dev/) - A Vite-native unit test framework. It's fast!
* [Pinia](https://pinia.vuejs.org/) - The intuitive store for Vue.js (Vuex to Pinia?)

<br />
<br />

# Official Learning Resources
***What you should know for the Level 1 Exam***  
------------------------------------------------------
> [Level 1 Exam Specs](https://certification.vuejs.org/dashboard/guides/detail)
1. Creating a Vue Application
Know your different options for creating a Vue.js application and how to initialize the app.
    * [Vue SPA’s](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)
    * [From a CDN](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)
    * [The Application Instance](https://vuejs.org/guide/essentials/application.html)
2. Reactivity Fundamentals
Know how to declare reactive and computed data in both the Options API and the Composition API. (Make sure to use the API Preference Toggle in the docs to see content for both APIs). Also know how the Options API differs from the Composition API, and why you might choose one over the other.
    * [Declaring Reactive State](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state)
    * [Reactive Variables with Ref](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-variables-with-ref)
    * [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html)
3. Template Syntax
Interpolate text with HTML, bind data to attributes, and use built in directives to render HTML based on your reactive data.
    * [Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
    * [Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style.html)
    * [List Rendering](https://vuejs.org/guide/essentials/list.html#displaying-filtered-sorted-results)
    * [Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html)
4. Event Handling
Know the Vue syntax for listening to events, the difference between inline and method handlers, how to access the event object, and how to modify the event with modifiers.
    * [Event Handling](https://vuejs.org/guide/essentials/event-handling.html)
5.Form Input Binding
Know how to bind data to form inputs and update that data on form events. Use the v-model shorthand for quick two-way binding. Finally, know the difference between how Vue works with all the different input types.
    * [Form Input Bindings](https://vuejs.org/guide/essentials/forms.html)
6. Watchers
Know how to perform side effects with watchers, when to use them vs computed, the various ways of declaring sources, and the various possible options.
    * [Watchers](https://vuejs.org/guide/essentials/watchers.html)
7. LifeCycle Hooks
Know the lifecycle of a Vue.js component, plus how and why to hook into each part.
    * [Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)
8. Template Refs
Get direct access DOM nodes and component instances with template refs. Know how to define them and use them.
    * [Template Refs](https://vuejs.org/guide/essentials/template-refs.html)
9. Components
Know how to define components, use them, pass props, and emit events. Also know how to get the most out of them with the SFC syntax and script setup.
    * [Components Basics](https://vuejs.org/guide/essentials/component-basics.html)
    * [Single File Components](https://vuejs.org/guide/scaling-up/sfc.html)
    * [Script Setup](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#script-setup)
    * [Async Components](https://vuejs.org/guide/components/async.html)
10. Slots
Know how to pass template fragments to components with slots. Know how to define fallback content, named slots and scoped slots.
    * [Slots](https://vuejs.org/guide/components/slots.html)
11. Transitions
Know the basics of transitioning DOM elements into and out of view with the built-in Transition and TransitionGroup components.
    * [Transition](https://vuejs.org/guide/built-ins/transition.html)
    * [Transition Group](https://vuejs.org/guide/built-ins/transition-group.html)
12. Plugins
Plugins are self-contained code that usually add app-level functionality to Vue. Know the basics of how they work, how to find them and install them, and use them in your applications.
    * [Plugins](https://vuejs.org/guide/reusability/plugins.html#introduction)
    * [Awesome Vue](https://github.com/vuejs/awesome-vue)
13. Vue Router
Client side routing is essential for Vue.js SPA’s. Know how to use the official Vue.js router to register routes, display pages with <RouterView>, and navigate with <RouterLink>.
    * [Vue Router](https://router.vuejs.org/guide/)
14. Ecosystem
Vue is more than just it’s core library. It’s a whole ecosystem. Be familiar at a very high level with related softwares like VueUse, Nuxt, Vuetify, Devtools, and Volar. (In a sentence what do each of these do).
    * [VueUse](https://vueuse.org/)
    * [Nuxt](https://nuxt.com/)
    * [Vuetify](https://vuetifyjs.com/en/)
    * [Vue Devtools](https://devtools.vuejs.org/)
    * [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

<pre>
Once you hit the start button for each exam, this is what you can expect:

120 minute exam duration

35 multiple choice questions

60 minutes of coding challenges
</pre>

## YouTube tutorials
* [Vue Pinia Full Tutorial | Learn Vue Pinia](https://www.youtube.com/watch?v=fGOzz1L8vps)