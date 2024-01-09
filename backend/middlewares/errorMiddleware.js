const errorMiddleware = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status:'fail',
        message:message
    });
}

module.exports = errorMiddleware;