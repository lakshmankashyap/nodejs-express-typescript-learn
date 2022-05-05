import auth from './routes/auth'
import item from './routes/item'
import user from './routes/user'
import general from './routes/general'
import * as express from 'express';

// import * as path from 'path';

const router = express.Router();

/* expose public folder */
// router.use('/public', express.static(path.join(__dirname, '../../public')));

/* use our subrouters */
router.use('/auth', auth);
router.use('/item', item);
router.use('/general', general);
router.use('/user', user);
router.get('/test/all', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

export default router;
