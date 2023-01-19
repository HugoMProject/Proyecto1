//este middleware controla la valides del token que no va a emviar el front end
// de lo contrario no le permitimos seguir con la peticion al back end

const jwt = require('jsonwebtoken');
require('dotenv').config();
function verifyToken(req, res, next) {
    // Obtener el token del encabezado de la solicitud
    const token = req.headers['x-access-token'];
  
    if (!token) {
      // Si no hay token, devolver un error
      return res.status(401).send({
        Message:'No token provided',
        token:false
      });
    }
  
    // Verificar el token
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        // Si hay un error al verificar el token, devolver un error
        return res.status(401).send({
          Message:'Invalid token',
          token: false
      });
      }
  
      // Si el token es válido, permitir que la solicitud continúe
      req.userId = decoded.sub;
      next();
    });
  }

  module.exports= verifyToken;