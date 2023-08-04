import { defineStore } from 'pinia'

export const useExplorerStore = defineStore('explorerStore', {
    state: () => ({
        //Estado dos componentes de Explorer
        openWindow: false,
    }),

    actions: {
        setExplorerOpen(open: boolean) {
            this.openWindow = open;
            console.log("Explorer Open: " + this.openWindow);
        }
    },

    getters: {

    }
});