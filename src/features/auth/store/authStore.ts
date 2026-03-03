import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type User,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const isInitialised = ref(false)
  const loading = ref(false)
  const error = ref<string | null>(null)

  function init() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
        isInitialised.value = true
        resolve(firebaseUser)
      })
    })
  }

  async function registerWithEmailAndPass(email: string, password: string) {
    loading.value = true
    error.value = null

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      user.value = res.user
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            error.value = `This email is already registered.`
            break
          case 'auth/weak-password':
            error.value = `Password should be at least 6 characters test.`
            break
          case 'auth/invalid-email':
            error.value = `This email is invalid.`
            break
          default:
            error.value = `An error occurred during registration.`
        }
      }
    } finally {
      loading.value = false
    }
  }

  async function loginWithEmailAndPass(email: string, password: string) {
    loading.value = true
    error.value = null

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      user.value = res.user
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/invalid-email':
            error.value = 'The email address is not valid.'
            break
          case 'auth/user-disabled':
            error.value = 'This user account has been disabled.'
            break
          case 'auth/user-not-found':
            error.value = 'No account found with this email.'
            break
          case 'auth/wrong-password':
            error.value = 'Incorrect password. Please try again.'
            break
          case 'auth/too-many-requests':
            error.value = 'Too many failed attempts. Please try again later.'
            break
          case 'auth/invalid-credential':
            error.value = 'Invalid email or password.'
            break
          default:
            error.value = 'Login failed. Please check your connection.'
        }
      }
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    await signOut(auth)
    user.value = null
  }

  return {
    error,
    user,
    isInitialised,
    loading,
    logout,
    init,
    registerWithEmailAndPass,
    loginWithEmailAndPass,
  }
})
