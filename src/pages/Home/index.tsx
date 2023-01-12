import { useHook } from '../../hooks/useHook';

export function Home() {
    const { greetings } = useHook();

    return (
        <h1>
            { greetings }
        </h1>
    );
}