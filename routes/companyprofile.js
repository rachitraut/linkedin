CompanyProfile = require('../models/CompanyModel');


exports.getCompanyProfile = function(req, res){

	var query = {'_id' : req.user.companyId};

	CompanyProfile.findOne(query, function(err, response){

		if(err)
		{
			console.log("Error response :" + err);
			res.json('error');
		}
		else
		{
			console.log("CompanyProfile GET response " + response);
			res.json({'CompanyInfo' : response});
		}
	});
}

exports.updateCompanyInfo = function(req, res){

	var query = {'_id' : req.user.companyId};

	CompanyProfile.findOne(query, function(err, response){

	if(err)
	{
		console.log("Error response :" + err);
		res.json('error');
	}
	else
	{
		console.log("Response : " + response);
		var update = { CompanyName : req.body.CompanyName, Address: req.body.Address, Country: req.body.Country, Zip: req.body.ZipCode, Overview: req.body.Overview, Url: req.body.Url, Founded: req.body.Founded };

			CompanyProfile.findOneAndUpdate(query, update, function(err, updateResponse){

				if(err)
					console.log("Error response :" + err);
					res.json("err");

				console.log("Company Update Response : " + updateResponse);
				res.json('success');
			});
		}

	});
}


/*var config = require('../models/auth');
var ejs = require("ejs");
var ddb = require('dynamodb').ddb({ accessKeyId:config.ACCESS_KEY,secretAccessKey: config.ACCESS_SECRET, endpoint:config.ENDPOINT});

//Connecting to the memcached using AWS sdk.
var AWS = require('aws-sdk'),
    Memcached = require('memcached');
var mc = Memcached.Client.create('hostname:port', {
  username: 'username',
  password: 'password'
});


JobPosts = require('../models/JobPostsModel');

exports.getEditProfile = function(req,res){
	ejs.renderFile('./views/companyeditprofile.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
}

exports.jobPosts = function(req,res){

	jp = new JobPosts;
	var date = Date.now();
	var h = date.toString();
	console.log(h);
	jp._id = h;
	jp.JobName = req.body.JobName;
	jp.JobDescription = req.body.JobDescription;
	jp.PostDate = new Date;
	jp.ExpiryDate = new Date(req.body.ExpiryDate);
	jp.JobLocation = req.body.JobLocation;
	jp.SkillSet = req.body.SkillSet;
	jp.save(function(err){
		if(err)
			throw err;
		console.log("job post added : " + jp);
	});

	//Saving in Memcahed
	var locationForJob = req.body.JobLocation;
	var SkillForJob	= req.body.SkillSet;
	var JobNameForJob = req.body.JobName;
	mc.set(locationForJob, JobPosts,1000000,function(err,result){
	if(err) console.error(err);
	
	console.dir(result);
	mc.end();
});
	mc.set(SkillForJob,JobPosts,1000000,function(err,result){
	if(err) console.error(err);
	console.dir(result);
	mc.end();
});
	mc.set(JobNameForJob,JobPosts,1000000,function( err, result ){
	if(err) console.error(err);
	console.dir(result);
	mc.end();
});
	//End of saving to memcached

	CompanyProfile.findOne({'CompanyId':req.body.CompanyId},function(err,response){
		if (err)
			throw err;
		response.JobPosts.push(h);
		response.save(function(err){
			if(err)
				throw err;
			console.log(response);
		});
		
	});
	res.end();	
};


//Get function for the Job Search:-
exports.getJobPosts = function(req,res){

	jp = new JobPosts;
	var date = Date.now();
	var h = date.toString();
	console.log(h);
	jp._id = h;
	jp.JobName = req.body.JobName;
	jp.JobDescription = req.body.JobDescription;
	jp.PostDate = new Date;
	jp.ExpiryDate = new Date(req.body.ExpiryDate);
	jp.JobLocation = req.body.JobLocation;
	jp.SkillSet = req.body.SkillSet;
	jp.save(function(err){
		if(err)
			throw err;
		console.log("job post added : " + jp);
	});

	//Saving in Memcahed
	//var locationForJob = //from the client side//
	//var SkillForJob	= //from the client side//
	//var JobNameForJob = //form the client side//
	mc.get(locationForJob,function(err,response,key){
		if(response != null){

		}
	});
	mc.get(SkillForJob,function(err,response,key){
		if(response != null){

		}
	});
	mc.get(JobNameForJob,function(err,response,key){
		if(response != null){

		}
	});
	//
	// CompanyProfile.findOne({'CompanyId':req.body.CompanyId},function(err,response){
	// 	if (err)
	// 		throw err;
	// 	response.JobPosts.push(h);
	// 	response.save(function(err){
	// 		if(err)
	// 			throw err;
	// 		console.log(response);
	// 	});
		
	// });
	ejs.renderFile('./views/jobposts.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
	
};


	*/