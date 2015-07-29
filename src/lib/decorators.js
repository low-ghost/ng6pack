const Inject = (...deps) => {
    return (target, key, descriptor) => {
        // if true then we are injecting dependencies into function and not Class constructor
        if (descriptor) {
            const fn = descriptor.value;
            fn.$inject = deps;
        } else {
            target.$inject = deps;
        }
    };
};

export { Inject };
