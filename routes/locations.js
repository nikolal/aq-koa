const router = require("koa-router")();

router.prefix("/nm/api/locations");

router.get('/', function *(next) {

  this.body = [
		{
			id: 1,
			name: "Belgrade",
			imageUrl: "http://humancities.eu/wp-content/uploads/2015/03/belgrade-night-serbia.jpg"
		},
		{
			id: 2,
			name: "Novi Sad",
			imageUrl: "http://ors.rs/wp-content/uploads/novi_sad_in_twilight_by_mmirkovic-d694ejt.png"
		},
		{
			id: 3,
			name: "Indjija",
			imageUrl: "http://alas.matf.bg.ac.rs/~mr02006/images/Indjija_nocu.jpg"
		}
  ]
});

module.exports = router;


// this.body = {
//   "locations": {
//     "belgrade": {
//       "id": 1,
//       "name": "Belgrade",
//       "imageUrl": "http://humancities.eu/wp-content/uploads/2015/03/belgrade-night-serbia.jpg"
//     },
//     "novisad": {
//       "id": 2,
//       "name": "Novi Sad",
//       "imageUrl": "http://ors.rs/wp-content/uploads/novi_sad_in_twilight_by_mmirkovic-d694ejt.png"
//     },
//     "indjija": {
//       "id": 3,
//       "name": "Indjija",
//       "imageUrl": "http://alas.matf.bg.ac.rs/~mr02006/images/Indjija_nocu.jpg"
//     }
//   }
// }
