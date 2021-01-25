const createTokenProvider = () => {
    //store token & restore local storage
    // let _token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH') || '') || null;
    let _token = (localStorage.getItem('REACT_TOKEN_AUTH') || '') || null;

    //return timestamp on success
    const getExpirationDate = (jwtToken) => {
        if (!jwtToken) {
            return null;
        }
        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
        // multiply by 1000 to convert seconds into milliseconds
        return jwt && jwt.exp && jwt.exp * 1000 || null;
    };
    //check if timestamp expired
    const isExpired = (exp) => {
        if (!exp) {
            return false;
        }
        return Date.now() > exp;
    };
    //return token and update if necessary
    const getToken = async () => {
        if (!_token) {
            return null;
        }
        // return _token && _token.token;
        return _token


    };
    //return true if token not null 
    const isLoggedIn = () => {
        return !!_token;
    };
    //store observers
    let observers = []
    //add new observer
    const subscribe = (observer) => {
        observers.push(observer);
    };
    //remove observer    
    const unsubscribe = (observer) => {
        observers = observers.filter(_observer => _observer !== observer);
    };
    //   
    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };
    //saving tokens in local storage
    const setToken = (token) => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        }
        else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        _token = token;
        notify();
    };
    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };
};

export default createTokenProvider