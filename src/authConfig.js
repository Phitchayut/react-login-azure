import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "075c525d-b583-4694-a4a5-b5bf703a0e94",
        authority: "https://login.microsoftonline.com/f17c03f0-fca8-41f5-a0b2-6b832e2a86bb",
        redirectUri: "http://localhost:5173",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you're having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        break;
                    case LogLevel.Info:
                        console.info(message);
                        break;
                    case LogLevel.Verbose:
                        console.debug(message);
                        break;
                    case LogLevel.Warning:
                        console.warn(message);
                        break;
                }
            },
            logLevel: LogLevel.Info,
            piiLoggingEnabled: false,
        },
    },
};

export const loginRequest = {
    scopes: ["User.Read"],
};

export const protectedResources = {
    apiTodoList: {
        endpoint: "https://graph.microsoft.com/v1.0/me",
        scopes: ["User.Read"],
    },
};

