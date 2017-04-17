/**
 * Created by eswaraprasadh on 16-04-2017.
 */
/*eslint-env node, node, node*/
module.exports.homelist = function (req,res) {
  res.render('locations-list',{title:'Home'});
};

module.exports.locationInfo = function (req,res) {
    res.render('location-info',{title:'Location Info'});
};


module.exports.addReview = function (req,res) {
    res.render('location-review-form',{title:'Add Review'});
};
