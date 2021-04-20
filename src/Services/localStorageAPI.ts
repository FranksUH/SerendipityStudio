const localStorageAPI = {
    save: (payload: any) => {
        try {
            localStorage.setItem('localData', JSON.stringify(payload));
        } catch (err) { /* Silently ignore */ }
    },

    load: () => {
        try {
            const serializedState = localStorage.getItem('localData');

            if (serializedState == null) {
                return undefined;
            }

            return JSON.parse(serializedState);
        } catch (err) {
            return undefined;
        }
    },

    clear: () => {
        try {
            localStorage.clear();
        } catch (err) { /* Silently ignore */ }
    },
};

export default localStorageAPI;
