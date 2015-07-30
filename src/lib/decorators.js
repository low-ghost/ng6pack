function Inject(...deps) {
    return (target, key, descriptor) => {
        // if true then we are injecting dependencies into function and not Class constructor
        if (descriptor) {
            const fn = descriptor.value;
            fn.$inject = deps;
        } else {
            target.$inject = deps;
        }
    };
}

function Component(component) {
    return target => {
        if (typeof component !== 'object')
            throw new Error('@Component() must be defined!');

        if (target.$initView)
            target.$initView(component.selector);

        target.$isComponent = true;
    };
}

function View(view, scope) {
    let options = view;
    let { template } = view;
    const defaults = {
        template,
        restrict: 'E',
        scope: scope || {},
        bindToController: true,
        controllerAs: 'vm'
    };
    return target => {
        if (target.$isComponent)
            throw new Error('@View() must be placed after @Component()!');

        target.$initView = function(directiveName) {
            if (typeof directiveName === 'object') {
                options = directiveName;
                directiveName = pascalCaseToCamelCase(target.name);
            } else
                directiveName = pascalCaseToCamelCase(directiveName);

            directiveName = dashCaseToCamelCase(directiveName);

            options = options || (options = {});
            options.bindToController = options.bindToController || options.bind || {};

            target.exportModule = angular.module(`directives.${directiveName}`, [])
              .directive(directiveName, () => Object.assign(defaults, { controller: target }, options))
              .name;

        };
        target.$isView = true;
    };
}

function pascalCaseToCamelCase(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
}

function dashCaseToCamelCase(str) {
    return str.replace( /-([a-z])/ig, (all, letter) => letter.toUpperCase());
}
export { Inject, Component, View };
