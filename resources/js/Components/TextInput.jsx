import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 dark:border-gray-400 dark:focus:bg-slate-600 dark:bg-transparent dark:text-gray-300 dark:focus:border-white dark:focus:ring-white ' +
                className
            }
            ref={localRef}
        />
    );
});
