
const mainController = {

    homePage:  (req, res) => {
      try {
        
        res.render('home');
      } catch (err) {
        console.trace(err);
        res.status(500).send(err);
      }
    },
    homePagev2:  (req, res) => {
      try {
        
        res.render('home2');
      } catch (err) {
        console.trace(err);
        res.status(500).send(err);
      }
    },
    homeMobilePage:  (req, res) => {
      try {
        
        res.render('home2mobileSecours');
      } catch (err) {
        console.trace(err);
        res.status(500).send(err);
      }
    }
  
  };
  
  
  module.exports = mainController;