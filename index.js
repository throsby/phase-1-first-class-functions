function receivesAFunction(func) {
    return func()
}

function returnsANamedFunction() {
    return function trial () { return "Goofball"}
}

function returnsAnAnonymousFunction() {
    return () => {return "Goofball"}
}