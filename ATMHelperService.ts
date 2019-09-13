export class helperService {
    setLocalStorage = (key: string, value: any) => {
        if (value) {
            try {
                let val = JSON.stringify(value);
                localStorage.setItem(key, val);
            } catch (e) {
                // throw exception
            }
        }
    }

    getLocalStorage = (key: string) => {
        if (key) {
            try {
                localStorage.getItem(key);
            }
        }
    }
}