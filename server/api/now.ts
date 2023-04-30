import { IncomingMessage, ServerResponse } from "http";

export default defineEventHandler(event => {
    return new Date().toLocaleTimeString()
})

// export default (req:IncomingMessage, res:ServerResponse) => {
//     return new Date().toLocaleTimeString();
// }