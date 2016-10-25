import './app.scss'
import Hello from 'components/Hello'
import Logo from 'assets/imgs/logo.png'

export default {
  render (h) {
    console.log(h)
    return (
      <div id='app'>
        <img class='logo' src={Logo} />
        <Hello />
        <p>Welcome to your Vue.js app!</p>
        <p>
          To get a better understanding of how this boilerplate works, check out
          <a href='http://vuejs-templates.github.io/webpack' target='_blank'>its documentation</a>.
          It is also recommended to go through the docs for
          <a href='http://webpack.github.io/' target='_blank'>Webpack</a> and
          <a href='http://vuejs.github.io/vue-loader/' target='_blank'>vue-loader</a>.
          If you have any issues with the setup, please file an issue at this boilerplate's
          <a href='https://github.com/vuejs-templates/webpack' target='_blank'>repository</a>.
        </p>
        <p>
          You may also want to checkout
          <a href='https://github.com/vuejs/vue-router/' target='_blank'>vue-router</a> for routing and
          <a href='https://github.com/vuejs/vuex/' target='_blank'>vuex</a> for state management.
        </p>
      </div>
    )
  }
}
