type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

const LOCALHOST_IPV4 = 'localhost';
const LOCALHOST_IPV6 = '[::1]';
const LOCALHOST_PATTERN_IPV4 = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;

const isLocalhost = Boolean(
    [LOCALHOST_IPV4, LOCALHOST_IPV6].includes(window.location.hostname)
        || window.location.hostname.match(LOCALHOST_PATTERN_IPV4)
);

const registerValidServiceWorker = (swUrl: string, config?: Config) => {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                const { installing } = registration;

                if (!installing) {
                    return;
                }

                installing.onstatechange = () => {
                    if (installing.state === 'installed') {
                        const hasExistingServiceWorker = navigator.serviceWorker.controller;

                        if (hasExistingServiceWorker) {
                            if (config?.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                };
            };
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Error during service worker registration:', error);
        });
};

// Check if the service worker can be found and reload the page if not
const checkValidServiceWorker = (swUrl: string, config?: Config) => {
    fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
        .then((response) => {
            const contentType = response.headers.get('content-type');

            if (response.status === 404 || (contentType && !contentType.includes('javascript'))) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                registerValidServiceWorker(swUrl, config);
            }
        })
        .catch(() => {
            // eslint-disable-next-line no-console
            console.log('No internet connection found. App is running in offline mode.');
        });
};

export const register = (config?: Config) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const supportsServiceWorker = 'serviceWorker' in navigator;

    if (isProduction && supportsServiceWorker) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        const isSameOrigin = publicUrl.origin === window.location.origin;

        // Service workers won't work on a different origin, e.g. CDN. https://github.com/facebook/create-react-app/issues/2374
        if (!isSameOrigin) {
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                checkValidServiceWorker(swUrl, config);
            } else {
                registerValidServiceWorker(swUrl, config);
            }
        });
    }
};

export const unregister = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error.message);
            });
    }
};
