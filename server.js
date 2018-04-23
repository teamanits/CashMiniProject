
	var express=require('express');
	var morgan=require('morgan');
	var path=require('path');
	var Pool=require('pg').Pool;
	var bodyParser = require('body-parser');
	var crypto=require('crypto');
	var session =require('express-session');


	var config = {
    user: 'postgres',
    database: 'cash_app_databse',
    host: '127.0.0.1',
    port: '5432',
    password: 'mani'
};


	var app=express();
	var pool=new Pool(config);
	app.use(bodyParser.json());
	app.use(morgan('combined'));
	app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
	}));
//	document.write("Hello world");


app.get('/',function(req,res)
						{
							res.sendFile(path.join(__dirname,'ui/index.html'));
						}
				);
app.get('/index.html',function(req,res)
						{
							res.sendFile(path.join(__dirname,'ui/index.html'));
						}
				);

app.get('/verifieduserupdate.html',function(req,res)
						{
							res.sendFile(path.join(__dirname,'ui/verifieduserupdate.html'));
						}
				);

app.get('/js/verifieduser.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'js/verifieduser.js'));
						}
				);
app.get('/css/verifieduser.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'css/verifieduser.css'));
						}
				);
app.get('/admin.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'css/admin.css'));
						}
				);

app.get('/admin.js',function(req,res)
						{
								res.sendFile(path.join(__dirname,'js/admin.js'));
						}
				);
app.get('/js/admin.js',function(req,res)
						{
								res.sendFile(path.join(__dirname,'js/admin.js'));
						}
			 );

app.get('/register.html',function(req,res)
						{
							res.sendFile(path.join(__dirname,'register.html'));
						}
				);

app.get('/clientside.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'clientside.js'));
						 }
				);
app.get('/loc.html',function(req,res)
						{
							res.sendFile(path.join(__dirname,'loc.html'));
						}
			 );
app.get('/learn.html',function(req,res)
		 				{
		 					res.sendFile(path.join(__dirname,'ui/learn.html'));
		 				}
		 	 );
app.get('/js/main.js',function(req,res)
			 		 	{
			 		 					res.sendFile(path.join(__dirname,'js/main.js'));
			 		 	}
			 	);

app.get('/login.html',function(req,res)
			 		 	{
			 		 					res.sendFile(path.join(__dirname,'login.html'));
			 		 	}
			 	);
app.get('/about.html',function(req,res)
			 		 	{
			 		 		res.sendFile(path.join(__dirname,'ui/about.html'));
			 		 	}
			 	);
app.get('/logo.png',function(req,res)
						{
							res.sendFile(path.join(__dirname,'img/logo.png'));
						}
				);
app.get('/clientjs.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'clientjs.js'));
						}
				);
app.get('/js/jquery-1.12.4.min.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'js/jquery-1.12.4.min.js'));
						}
				);
app.get('/style1.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'css/style1.css'));
						}
				);
app.get('/css/menu.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'css/menu.css'));
						}
				);
app.get('/css/main.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'css/main.css'));
						}
				);
app.get('/css/font.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'css/font.css'));
						}
			);
app.get('/fonts/fontawesome-webfont.woff',function(req,res)
						{
							res.sendFile(path.join(__dirname,'fonts/fontawesome-webfont.woff'));
						}
				);
app.get('/fonts/fontawesome-webfont.svg',function(req,res)
						{
							res.sendFile(path.join(__dirname,'fonts/fontawesome-webfont.svg'));
						}
				);
app.get('/fonts/fontawesome-webfont.ttf',function(req,res)
						{
											res.sendFile(path.join(__dirname,'fonts/fontawesome-webfont.ttf'));
										}
			 );
app.get('/fonts/fontawesome-webfont.eot',function(req,res)
														{
															res.sendFile(path.join(__dirname,'fonts/fontawesome-webfont.eot'));
														}
												);
app.get('/fonts/fontawesome-webfont.woff2',function(req,res)
						{
							res.sendFile(path.join(__dirname,'fonts/fontawesome-webfont.woff2'));
						}
				);
app.get('/fonts/FontAwesome.otf',function(req,res)
						{
							res.sendFile(path.join(__dirname,'fonts/FontAwesome.otf'));
						}
				);
app.get('/css/font-awesome.min.css',function(req,res)
						{
										res.sendFile(path.join(__dirname,'css/font-awesome.min.css'));
						}
				);
app.get('/assets/web/assets/mobirise-icons/mobirise-icons.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/web/assets/mobirise-icons/mobirise-icons.css'));
						}
				);
app.get('/assets/tether/tether.min.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/tether/tether.min.css'));
						}
				);
app.get('/assets/soundcloud-plugin/style.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/soundcloud-plugin/style.css'));
						}
				);
app.get('/assets/bootstrap/css/bootstrap.min.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/bootstrap/css/bootstrap.min.css'));
						}
				);
app.get('/assets/bootstrap/css/bootstrap-grid.min.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/bootstrap/css/bootstrap-grid.min.css'));
						}
				);
app.get('/assets/bootstrap/css/bootstrap-reboot.min.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/bootstrap/css/bootstrap-reboot.min.css'));
						}
				);
app.get('/assets/socicon/css/styles.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/socicon/css/styles.css'));
						}
				);
app.get('/assets/dropdown/css/style.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/dropdown/css/style.css'));
						}
				);
app.get('/assets/theme/css/style.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/theme/css/style.css'));
						}
				);
app.get('/assets/mobirise/css/mbr-additional.css',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/mobirise/css/mbr-additional.css'));
						}
				);

app.get('/assets/images/logo2.png',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/images/logo2.png'));
						}
				);
app.get('/assets/web/assets/jquery/jquery.min.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/web/assets/jquery/jquery.min.js'));
						}
				);
app.get('/assets/popper/popper.min.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/popper/popper.min.js'));
						}
				);
app.get('/assets/tether/tether.min.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/tether/tether.min.js'));
						}
				);
app.get('/assets/bootstrap/js/bootstrap.min.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/bootstrap/js/bootstrap.min.js'));
						}
				);
app.get('/assets/smoothscroll/smooth-scroll.js',function(req,res)
						{
							res.sendFile(path.join(__dirname,'assets/smoothscroll/smooth-scroll.js'));
						}
				);
app.get('/assets/touchswipe/jquery.touch-swipe.min.js',function(req,res)
						{
											res.sendFile(path.join(__dirname,'assets/touchswipe/jquery.touch-swipe.min.js'));
						}
				);
app.get('/assets/sociallikes/social-likes.js',function(req,res)
						{
															res.sendFile(path.join(__dirname,'assets/sociallikes/social-likes.js'))
						}
				);
app.get('/assets/parallax/jarallax.min.js',function(req,res)
																		{
																			res.sendFile(path.join(__dirname,'assets/parallax/jarallax.min.js'));
																		}
																);
app.get('/assets/dropdown/js/script.min.js',function(req,res)
																						{
																							res.sendFile(path.join(__dirname,'assets/dropdown/js/script.min.js'));
																						}
																				);
app.get('/assets/theme/js/script.js',function(req,res)
					{
						res.sendFile(path.join(__dirname,'assets/theme/js/script.js'));
					}
				);
app.get('/assets/socicon/fonts/socicon.ttf',function(req,res)
					{
						res.sendFile(path.join(__dirname,'assets/socicon/fonts/socicon.ttf'));
					}
				);
app.get('/assets/web/assets/mobirise-icons/mobirise-icons.woff',function(req,res)
					{
						res.sendFile(path.join(__dirname,'assets/web/assets/mobirise-icons/mobirise-icons.woff'));
					}
				);
app.get('/assets/web/assets/mobirise-icons/mobirise-icons.ttf',function(req,res)
					{
						res.sendFile(path.join(__dirname,'assets/web/assets/mobirise-icons/mobirise-icons.ttf'));
					}
				);
app.get('/assets/images/950x534-dark-glowing-fluid-free-website-background-image-1-950x534.jpg',function(req,res)
					{
						res.sendFile(path.join(__dirname,'assets/images/950x534-dark-glowing-fluid-free-website-background-image-1-950x534.jpg'));
					}
			);
app.get('/assets/socicon/fonts/socicon.woff',function(req,res)
					{
						res.sendFile(path.join(__dirname,'assets/socicon/fonts/socicon.woff'));
					}
			);
app.get('/assets/socicon/fonts/socicon.ttf',function(req,res)
								{
									res.sendFile(path.join(__dirname,'assets/socicon/fonts/socicon.ttf'));
								}
			);
function hash (input, salt) {
		var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
		return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
			}
			app.get('/hash/:input', function(req, res) {
						   var hashedString = hash(req.params.input, 'this-is-some-random-string');
						   res.send(hashedString);
						});

app.post('/loginuser', function (req, res) {
		var username = req.body.username;
		var password = req.body.password;
 		pool.query('SELECT * FROM user_table WHERE user_email = $1', [username], function (err, result) {
		if (err)
			res.status(500).send(err.toString());
		else {
				if (result.rows.length === 0)
					res.status(403).send('username/password is invalid');
				else {
					var dbString = result.rows[0].user_password;
					var salt = dbString.split('$')[2];
					var hashedPassword = hash(password, salt);
					if (hashedPassword === dbString)
					{

								req.session.auth = {userId: result.rows[0].id};
								//res.sendFile(path.join(__dirname,'loc.html'));
								res.redirect('/loc.html');
					} else
										res.status(403).send('username/password is invalid');

							}
					}
			 });
			});

app.post('/loginverifieduser', function (req, res) {
			var username = req.body.username;
			var password = req.body.password;
		  pool.query('SELECT * FROM verified_user_table WHERE vemail = $1', [username], function (err, result) {
		 	if (err)
				res.status(500).send(err.toString());
			else {
				if (result.rows.length === 0)
					res.status(403).send('username/password is invalid');
				else {
					var dbString = result.rows[0].vpassword;
								//var salt = dbString.split('$')[2];
					var hashedPassword = password//hash(password, salt);
					if (hashedPassword === dbString)
					{
							req.session.auth = {userId: result.rows[0].id};
							res.redirect('/verifieduserupdate.html');
					} else
								res.status(403).send('username/password is invalid');

							}
						}
						 });
						});
			app.post('/registeruser', function (req, res) {

			   var fullname = req.body.fullname;
			   var password = req.body.password;
				 var emailid=req.body.email;
			  var salt = crypto.randomBytes(128).toString('hex');
			   var dbString = hash(password, salt);
			   pool.query('INSERT INTO user_table (user_fullname,user_email, user_password) VALUES ($1, $2,$3)', [fullname, emailid,dbString], function (err, result) {
			      if (err) {
			          res.status(500).send(err.toString());
			      } else {
			          res.redirect('/loc.html');
			      }
			   });
			});
app.get('/check-login', function (req, res) {
			   if (req.session && req.session.auth && req.session.auth.userId) {
			       // Load the user object
			       pool.query('SELECT * FROM user_table WHERE id = $1', [req.session.auth.userId], function (err, result) {
			           if (err) {
			              res.status(500).send(err.toString());
			           } else {
			             // res.send(result.rows[0].username);
									 res.redirect('/loc.html')
			           }
			       });
			   } else {
			       //res.status(400).send('You are not logged in');
						 res.redirect('/login.html')
			   }
			});

			app.get('/check-verified-login', function (req, res) {
						   if (req.session && req.session.auth && req.session.auth.userId) {
						       // Load the user object
						       pool.query('SELECT * FROM verified_user_table WHERE id = $1', [req.session.auth.userId], function (err, result) {
						           if (err) {
						              res.status(500).send(err.toString());
						           } else {
						             // res.send(result.rows[0].username);
												 res.redirect('/verifieduserupdate.html')
						           }
						       });
						   } else {
						       //res.status(400).send('You are not logged in');
									 res.redirect('/login.html')
						   }
						});

function vupdatevalues(placeid,value,res,tot1,tot2,yc,nc)
{

		pool.query('update cashnearatm set totalyescount=$1,totalnocount=$2,lastmodifiedvalue=$3,lastmodifieddate=localtimestamp,yescount=$4,nocount=$4 where place_id=$5',[tot1+yc,tot2+nc,value,0,placeid],function (err, result) {
			 if (err) {
					 res.status(500).send(err.toString());
			 } else {
					 //res.redirect('/loc.html');
					 res.status(200).send();
			 }
		});
}

function vinsertnewvalues(name,address,value,placeid,res,yc,nc)
{
		pool.query('INSERT INTO cashnearatm(place_id,place_name,place_address,yescount ,nocount  , totalyescount , totalnocount ,lastmodifiedvalue, threequeue,lastmodifieddate)  VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,NOW())', [placeid,name,address,yc,nc,0,0,value,'{-1,-1,-1}'], function (err, result) {
			 if (err) {
					 res.status(500).send(err.toString());
			 } else {
					 res.status(200).send();
			 }
		});
}

function uinsertnewvalues(name,address,value,placeid,res,yc,nc)
{
		pool.query('INSERT INTO cashnearatm(place_id,place_name,place_address,yescount ,nocount  , totalyescount , totalnocount, threequeue)  VALUES ($1, $2,$3,$4,$5,$6,$7,$8)', [placeid,name,address,yc,nc,0,0,'{-1,-1,-1}'], function (err, result) {
			 if (err) {
					 res.status(500).send(err.toString());
			 } else {
					 res.status(200).send();
			 }
		});
}


function userupdatevalues(placeid,value,res,yc,nc)
{
		pool.query('update cashnearatm set yescount=$1,nocount=$2 where place_id=$3',[yc,nc,placeid],function (err, result) {
			 if (err) {
					 res.status(500).send(err.toString());
			 } else {
					 //res.redirect('/loc.html');
					 res.status(200).send();
			 }
		});
}

		app.post('/vatmstatus',function(req,res){
			var name = req.body.name;
			var address = req.body.address;
			var placeid=req.body.place_id;
			var value=req.body.value;
			pool.query('SELECT * FROM cashnearatm WHERE place_id = $1', [placeid], function (err, result) {
			if (err)
				res.status(500).send(err.toString());
			else {
					if (result.rows.length == 0)
						vinsertnewvalues(name,address,value,placeid,res,0,0);

					else
						vupdatevalues(placeid,value,res,Number(result.rows[0].totalyescount),Number(result.rows[0].totalnocount),Number(result.rows[0].yescount),Number(result.rows[0].nocount));
						}
				 });


		})
		app.post('/updateatmstatus',function(req,res){
			var name = req.body.name;
			var address = req.body.address;
			var placeid=req.body.place_id;
			var value=req.body.value;
			pool.query('SELECT * FROM cashnearatm WHERE place_id = $1', [placeid], function (err, result) {
			if (err)
				res.status(500).send(err.toString());
			else {
					if (result.rows.length == 0)
					{
						if(value)

							uinsertnewvalues(name,address,value,placeid,res,1,0);
						else

						uinsertnewvalues(name,address,value,placeid,res,0,1);

					}
					else
					{
						if(value)

							userupdatevalues(placeid,value,res,Number(result.rows[0].yescount)+1,Number(result.rows[0].nocount));

						else

						userupdatevalues(placeid,value,res,Number(result.rows[0].yescount),Number(result.rows[0].nocount+1));

						}
					}
				 });


		})
		app.post('/userviewatmstatus',function(req,res){

			var placeid=req.body.id;
			pool.query('SELECT * FROM cashnearatm WHERE place_id = $1', [placeid], function (err, result) {
			if (err)
				res.status(500).send(err.toString());
			else {
					if (result.rows.length === 0)

							res.status(200).send('N/A');
					else {
						var lastvalue=Number(result.rows[0].lastmodifiedvalue);
						var lastretvalue=lastvalue;
						/*if(lastvalue)
							lastretvalue="Yes";

						else

							lastretvalue='No';*/

						var lastdate=result.rows[0].lastmodifieddate;
						var yc=result.rows[0].yescount;
						var nc=result.rows[0].nocount;
						var tyc=result.rows[0].totalyescount;
						var nyc=result.rows[0].totalnocount;
						var obj=JSON.stringify({lastdate:lastdate,yc:yc,nc:nc,tyc:tyc,nyc:nyc,lastretvalue:lastretvalue})
						/*res.write("lastmodifiedvalue:"+lastretvalue+"<br>");
						res.write("lastmodifieddate:"+lastdate+"<br>");
						res.write("Yes:"+yc+"<br>");
						res.write("No:"+nc+"<br>");*/
						res.write(obj);
						res.end();
					}
					}
				 });


		})
app.get('/logout', function (req, res) {
			  delete req.session.auth;
			  res.redirect('/index.html')
		});
app.listen(3000);
