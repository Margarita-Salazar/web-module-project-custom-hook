import { useLocalStorge } from './useLocalStorage';

const useDarkMode  = (value) => {
    const [someValue, setSomeValue] = useLocalStorge("key", value);
    return [someValue, setSomeValue];
}

export default useDarkMode;