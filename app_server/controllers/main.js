
const homepageController = (req, res) => {
    res.render('index', { title: 'SummerCamp' });
    };

module.exports = {
    homepageController
}