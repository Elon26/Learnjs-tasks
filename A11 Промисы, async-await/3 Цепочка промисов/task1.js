"use strict"

promise.then(f1).catch(f2);

promise.then(f1, f2);

// В первом случае, функция f2 вызывается для ошибок, возникших и в promise и в f1, во втором - только для ошибок, возникших в promise.
