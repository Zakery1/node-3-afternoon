const swag = require('../models/swag');

module.exports = {
  search: ( req, res, next ) => {
    const { category } = req.query;
    if ( !category ) {
      res.status(200).send( swag );
    } else {
      const filteredSwag = swag.filter( swag => swag.category === category );
      res.status(200).send( filteredSwag );
    }
  }
};


// axios.post(`/api/swag?category=${this.state.category}`)
// 'http://localhost:4000/api/swag?category=hats'