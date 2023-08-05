import { defineStore } from 'pinia'

export const useTaskbarStore = defineStore('taskbarStore', {
    state: () => ({
        windowsOpenedList: <Array<string>>[],
    }),

    actions: {
        addMinizedWindow(window: string) {            
            if (this.windowsOpenedList.includes(window)) {
                return;
            }

            if (window == "about" || window == "resume" || window == "contact") {                    
                this.windowsOpenedList = this.windowsOpenedList.filter((item) => item != "about" && item != "resume" && item != "contact");
            } 
                        
            this.windowsOpenedList.push(window);    
        },
        removeWindow(window: string) {
            this.windowsOpenedList = this.windowsOpenedList.filter((item) => item != window);
        }
    },

    getters: {

    }
});