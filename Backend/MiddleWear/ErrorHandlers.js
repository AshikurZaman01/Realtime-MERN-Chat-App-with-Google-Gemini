const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
}

const defaultErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.json({
        message: err.message,
        error: process.env.NODE_ENV === 'development' ? err : {},
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
    next();
}

module.exports = { notFound, defaultErrorHandler };