import { writable, derived } from 'svelte/store'

export const editing = writable(false)

export const selectedTags = writable([])

const defaultRawTags = `
GR
#ricohgr #grsnaps

MINIMAL
#minimal
`
export const rawTags = writable(localStorage.getItem('tags') || defaultRawTags)

rawTags.subscribe(v => {
  localStorage.setItem('tags', v)
})

export const tags = derived(rawTags, $rawTags =>
  $rawTags.replace(/#+/g, ' #').split(/[\n\t\s]+/g)
)
