const jwt = require('jsonwebtoken');
const { Users } = require('../models');

// 사용자 인증 미들웨어
module.exports = async (req, res, next) => {
  const { Authorization } = req.cookies;
  const [authType, authToken] = (Authorization ?? '').split(' ');

  if (authType !== 'Bearer' || !authToken) {
    return res.status(403).json({ errorMessage: '로그인 후에 이용할 수 있는 기능입니다.' });
  }

  try {
    const { userId } = jwt.verify(authToken, 'secret-key');
    const user = await Users.findOne({ where: { userId } });
    res.locals.user = user;
    next();
  } catch (error) {
    console.error(err);
    res.status(403).send({ errorMessage: '전달된 쿠키에서 오류가 발생했습니다.' });
    return;
  }
};
