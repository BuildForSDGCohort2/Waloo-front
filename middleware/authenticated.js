export default function ({ store, redirect }) {
  // Si l'utilisateur n'est pas authentifié
  if (!$auth.loggedIn) {
    return redirect('/login')
  }
}
