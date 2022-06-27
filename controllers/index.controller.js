import { successResponse } from "../helpers/methods.js"

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function index(req, res) {
    res.send(
        successResponse("Express JS API Boiler Plate working like a charm...", {
            data: "here comes you payload..."
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function indexPost(req, res) {
    res.send(
        successResponse(
            "Express JS API Boiler Plate post api working like a charm...",
            {
                data: "here comes you payload...",
                request: req.body
            }
        )
    )
}
