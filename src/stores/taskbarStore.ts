import { defineStore } from 'pinia'

export const useTaskbarStore = defineStore('taskbarStore', {
    state: () => ({
        windowsOpenedList: <Array<string>>[
            'explorer',            
        ],
        windowsMinimizedList: <Array<string>>[]
    }),

    actions: {
        addMinizedWindow(window: string): void {            
            if (this.windowsOpenedList.includes(window)) {
                return;
            }

            if (window == "about" || window == "resume" || window == "contact" || window == "projects") {                    
                this.windowsOpenedList = this.windowsOpenedList.filter((item) => item != "about" && item != "resume" && item != "contact" && item != "projects");
            } 
                        
            this.windowsOpenedList.push(window);    
        },
        removeWindow(window: string): void {
            this.windowsOpenedList = this.windowsOpenedList.filter((item) => item != window);
        }
    },

    getters: {

    }
});