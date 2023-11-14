const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const { Usuario } = require('../db');

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, done) {
        console.log(jwtPayload);
      return Usuario.findOne({ where: { email: jwtPayload.email } })
        .then((Usuario) => {
          return done(null, Usuario);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);