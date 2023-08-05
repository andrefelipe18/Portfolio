import { defineStore } from 'pinia'

export const useExplorerStore = defineStore('explorerStore', {
    state: () => ({        
        openWindow: false,
    }),

    actions: {
        setExplorerOpen(open: boolean) {
            this.openWindow = open;            
        }
    },

    getters: {

    }
});