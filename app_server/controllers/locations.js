/**
 * Created by eswaraprasadh on 16-04-2017.
 */
module.exports.homelist = function (req,res) {
  res.render('index',{title:'Home'});
};

module.exports.locationInfo = function (req,res) {
    res.render('index',{title:'Location Info'});
};


module.exports.addReview = function (req,res) {
    res.render('index',{title:'Add Review'});
};
