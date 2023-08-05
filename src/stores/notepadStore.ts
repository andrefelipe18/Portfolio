import { defineStore } from 'pinia'

export const useNotepadStore = defineStore('notepadStore', {
    state: () => ({
        isOpen: false,
    }),

    actions: {
        setNotepadOpen(open: boolean) {
            this.isOpen = open;  
            console.log('setNotepadOpen', open);          
        }
    },

    getters: {

    }
});