const STORAGE_KEY = 'shraddhaCafeAccess'

export function hasAccess() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'granted'
  } catch {
    return false
  }
}

export function grantAccess() {
  try {
    window.localStorage.setItem(STORAGE_KEY, 'granted')
  } catch {
    // ignore
  }
}

export function revokeAccess() {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
