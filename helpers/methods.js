/**
 *
 * @param message
 * @param payload
 * @returns {{package, message, status: boolean}}
 */
export function successResponse(message, payload) {
    return {
        status: true,
        message: message,
        package: payload
    }
}

/**
 *
 * @param message
 * @param payload
 * @returns {{message, status: boolean}}
 */
export function failResponse(message, payload = null) {
    let response = {
        status: false,
        message: message
    }

    if (payload) {
        response.payload = payload
    }

    return response
}

export const notFountResponse = {
    status: false,
    message: "Unable to find the requested resource!"
}
