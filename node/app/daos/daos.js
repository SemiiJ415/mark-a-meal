const daoCommon = require('./common/daoCommon')

const appetizerDao = {...daoCommon, ...require('./api/appetizerDao')}

const dessertDao = {...daoCommon, ...require('./api/dessertDao')}

const drinkDao = {...daoCommon, ...require('./api/drinkDao')}

const mealDao = {...daoCommon, ...require('./api/mealDao')}

const proteinDao = {...daoCommon, ...require('./api/proteinDao')}

const seasoningDao = {...daoCommon, ...require('./api/seasoningDao')}

const sideDao = {...daoCommon, ...require('./api/sideDao')}

const userDao = {...daoCommon, ...require('./api/userDao')}




module.exports = {
    appetizerDao,
    dessertDao,
    drinkDao,
    mealDao,
    proteinDao,
    seasoningDao,
    sideDao,
    userDao
}