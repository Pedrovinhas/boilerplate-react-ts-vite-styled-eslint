import { useContext } from 'react';
import { Context } from '../contexts/Context';

export function useHook() {
    return useContext(Context);
}