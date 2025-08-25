// const asyncHandler = (reqHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
//     };
// };

const asyncHandler = (reqHandler) => {
    return (req, res, next) => {
        try {
            Promise.resolve(reqHandler(req, res, next)).catch((err) => {
                next(err);
            });
        } catch (error) {
            // If the error is synchronous, we can catch it here
            next(error); // Pass the error to the next middleware (error handler)
        }
    };
};


module.exports = asyncHandler;