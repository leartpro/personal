export class delay {
    private time: any;
    private timeout: any;
    private close: any;
    constructor(time: any) {
        this.time = time;
        this.timeout = null;
        this.close = null;
    }

    getPromise() {
        return new Promise<void>((resolve, reject) => {
            this.close = reject;
            this.timeout = setTimeout(() => {
                resolve();
            }, this.time);
        });
    }
    cancel() {
        this.timeout && clearTimeout(this.timeout);
        this.close && this.close('unmounted');
        return { isCanceled: true };
    }
}

export class makeCancelable {
    private promise: any;
    private close: any;
    constructor(promise: any) {
        this.promise = promise;
        this.close = null;
    }

    getPromise() {
        return new Promise((resolve, reject) => {
            this.close = reject('rejected promise');
            this.promise()
                .then((val: any) => resolve(val))
                .catch((err: any) => reject(err));
        });
    }
    cancel() {
        this.close && this.close();
        // throw new Error('error');
        return { isCanceled: true };
    }
}

export const propTypeValidation = {
    multiTextDelay: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] != 'number')
            return new Error(
                `Invalid ${propName} supplied to react-type-writer-component component.`
            );
        if (!props['multiText'] && props[propName])
            return new Error(
                `Invalid!. multiText props must be provided to use ${propName} .`
            );
    },
    typeSpeed: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] != 'number')
            return new Error(
                `Invalid ${propName} supplied to react-typeWriter component.`
            );
    },
    startDelay: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] != 'number')
            return new Error(
                `Invalid ${propName} supplied to react-typeWriter component.`
            );
    },
    text: (props: { [x: string]: any; }, propName: string | number) => {
        if (!props['multiText'] && typeof props[propName] != 'string')
            return new Error(
                `Invalid ${propName} supplied to react-typeWriter component!`
            );
    },
    cursorColor: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] != 'string')
            return new Error(
                `Invalid ${propName} supplied to react-typeWriter component!`
            );
    },
    textStyle: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] != 'object')
            return new Error(
                `Invalid ${propName} supplied to react-typeWriter component!`
            );
    },
    multiText: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] == 'object') {
            for (let i = 0; i < props[propName].length; i++) {
                if (typeof props[propName][i] != 'string')
                    return new Error(
                        `Invalid element: ${props[propName][i]} for ${propName} supplied to react-typeWriter component!`
                    );
            }
        } else if (props[propName] && typeof props[propName] !== 'object')
            return new Error(
                `Invalid ${propName} supplied to react-typeWriter component!`
            );
    },
    scrollArea: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] != 'object')
            return new Error(`Invalid ${propName} supplied to typewriter component!`);
    },
    multiTextLoop: (props: { [x: string]: any; }, propName: string | number) => {
        if (props[propName] && typeof props[propName] != 'boolean')
            return new Error(
                `Invalid ${propName} supplied to react-typeWriter component.`
            );
    },
};

export const contentInView = (element: unknown) => {
    const scroll = window.scrollY || window.pageYOffset;
    const elementPositionProps = element.getBoundingClientRect();
    const elementTopPosition = elementPositionProps.top + scroll;

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    };

    const elementPosition = {
        top: elementTopPosition,
        bottom: elementTopPosition + elementPositionProps.height,
    };
    return (
        (elementPosition.bottom >= viewport.top &&
            elementPosition.bottom <= viewport.bottom) ||
        (elementPosition.top <= viewport.bottom &&
            elementPosition.top >= viewport.top)
    );
};