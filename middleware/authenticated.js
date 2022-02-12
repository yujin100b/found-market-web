export default function ({ store, redirect }) {
    if (!store.getters["localStorage/tokenValid"]) {
      return redirect('/login')
    }
  }