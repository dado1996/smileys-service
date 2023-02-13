function validatorHandler(schema, property) {
  return (request, response, next) => {
    const data = request[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      response.status(400).json({
        status: "error",
        message: "Error en la validación de los datos",
        data: error.details.map((err) => ({
          message: err.message,
        })),
      });
      return;
    }
    next();
  };
}

export default validatorHandler;
