var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "users": [
      {
        "id": 123,
        "name": "Jane Doe",
        "phones": {
          "home": "800-123-4567",
          "mobile": "877-123-1234"
        },
        "email": [
          "jd@example.com",
          "jd@example.org"
        ],
        "dateOfBirth": "1980-01-02T00:00:00.000Z",
        "registered": true
      },
      {
        "id": 456,
        "name": "Peter Nolan",
        "phones": {
          "home": "800-123-3498",
          "mobile": "877-432-1278"
        },
        "email": [
          "pt@example.com",
          "pt@example.org"
        ],
        "dateOfBirth": "1983-01-09T00:00:00.000Z",
        "registered": false
      }
    ]
   });
});

router.get('/about', function (req, res) {
  res.send('about');
});

module.exports = router;
