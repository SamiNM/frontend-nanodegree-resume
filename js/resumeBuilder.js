// Object that hold info about my work experience
var work ={
    jobs :[
    {
        employer:"Jal",
        title:"Help Disk",
        location:"KSA", 
        dates:"jul 9, 2017 - Future", 
        description:"Who is responsible about configuring new devices like new printer, new labtop and desktop and installing software"
    }]
};


// Object that hold info about Me
var bio ={
    name:"Sami Almutairi",
    role:"Help Disk", 
    welcomeMessage:"Hello to my profile", 
    biopic:"images/fry.jpg", 
    contacts:{
        mobile:"0555555555", 
        email:"example@gmail.com", 
        github:"SamiNM",  
        location:"Arass" 
    },
    skills:[
        "awesoneness","delivering things","cryogenic sleep","saving the universe"
    ]
};


// Object that hold all the projects that i have done
var projects = {
    projects:
    [
        {
            title:"Video Sharing Site", 
            dates:"May-12-2016",
            description:"Final Year Project",
            images:["images/197x148.gif"]
        },
        {
            title:"Simplex Project", 
            dates:"2016",
            description:"It is a course project to implement Simplex Method programmatically",
            images:["images/197x148.gif"]       
        }
    ]
};

// Object that hold info about my education 
var education = {
    schools : 
    [
        {
            name:"Qassim University", 
            location:"Kingdim of Saudi Arabia", 
            degree:"3.42", 
            dates:"May-12-2016", 
            url:"http://www.qu.edu.sa/",
            majors:["Computer Science"] 
        },
        {
            name:"Colchester English Study Centre", 
            location:"Colchester, UK", 
            degree:"", 
            dates:"Jully-5-2011", 
            url:"http://www.cesc.co.uk/",
            majors:["English Course"] 
        }
    ],
    onlineCourses:
    [
        {
        title:"Frontend", 
        school:"Udacity", 
        dates:"FEB-15-2018", 
        url:"https://udacity.com/"
        }
    ] 
};

// function to display education info into the webpage
education.display = function(){
    for(var i=0; i < education.schools.length;i++ ){
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedNameAndUrl = formattedName.replace("#",education.schools[i].url);
        $(".education-entry:last").append(formattedNameAndUrl);
    
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);
         var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
         var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        
        for(var m = 0; m < education.schools[i].majors.legth; m++ ){
             var formattedMajer = HTMLschoolMajor.replace("%data%",education.schools[i].majors[m]);
            $(".education-entry:last").append(formattedMajer);
        }
        
    }
    
    for(var o = 0; o < education.onlineCourses.length; o++ ){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[o].title).replace("#",education.onlineCourses[o].url);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[o].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[o].dates);
        $(".education-entry:last").append(formattedDate);
        var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[o].url).replace("#",education.onlineCourses[o].url);
        $(".education-entry:last").append(formattedUrl);   
    }  
};

education.display();


// To Display bio info
bio.display = function(){
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);        
    
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);
    
    
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmaile = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmaile);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    var formattedBioImage = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBioImage);


    $("#header").append(HTMLskillsStart);
    for(var i=0; i < bio.skills.length;i++){
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
};
// invoking the bio display function
bio.display();

// function to display work info into the browser
work.display = function(){
    for(var j=0; j < work.jobs.length; j++){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployee = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[j].title);
            $(".work-entry:last").append(formattedEmployee + formattedTitle);
        
            var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[j].location);
            $(".work-entry:last").append(formattedLocation);
        
            var formattedDate = HTMLworkDates.replace("%data%",work.jobs[j].dates);
            $(".work-entry:last").append(formattedDate );
        
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[j].description);
            $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// using prototype to add function to the project object to display the projects info in the webpages 
projects.display = function(){
    for(var p = 0; p < projects.projects.length; p++)
    {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[p].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
        $(".project-entry:last").append(formattedDescription);
        
        for(var img=0; img < projects.projects[p].images.length; img++){
            var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[p].images[img]);
            $(".project-entry:last").append(formattedImage);
        }
        
    }
};
projects.display();


$("#mapDiv").append(googleMap);


