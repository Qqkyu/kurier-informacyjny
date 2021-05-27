export function getUser() {
    const userStr = sessionStorage.getItem("user");
    if (userStr) {
        return JSON.parse(userStr);
    } else {
        return null;
    }
}

export function getToken() {
    return sessionStorage.getItem("token") || null;
}

export function removeUserSession() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}

export function setUserSession(token, user) {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}
