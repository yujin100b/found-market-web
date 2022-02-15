export default function ({ store, redirect }) {
    const user = store.dispatch("me")
    if (!store.getters["localStorage/tokenValid"]) {
      return redirect('/login')
    }
  }