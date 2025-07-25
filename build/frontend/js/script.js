//var currentStep = 1;
var updateProgressBar;

function updateProgressBar() {
  var progressPercentage = ((currentStep - 1) / 3) * 100;  
  $(".progress-bar").css("width", progressPercentage + "%");
}
	
function displayStep(stepNumber) {
  if (stepNumber >= 1 && stepNumber <= 4) {
   // $(".step-" + currentStep).hide();
    $(".step").hide();  
    $(".step-" + stepNumber).show();
    currentStep = stepNumber;
    updateProgressBar();
  }
}
function show_state(val)
{
	if(val=="India")
	{
		$("#state_div").show();
	}
	if(val!="India"){
		$("#state_div").hide();
		$("#state").val("");
	}
}
  $(document).ready(function() 
  {  
    $('#multi-step-form').find('.step').slice(1).hide();
	//$('#multi-step-form').find('.step').hide();
	displayStep(currentStep);
	//$(".step-2").show(); 
	
	// jQuery Validation Rules
	  $("#multi-step-form").validate({
			rules: {
			  first_name: "required",
			  last_name: "required",
			  email_id: {
				required: true,
				email: true,
				remote: {
					url: "validate-email",
					type: "post",
					data: {
							email_id: function() {
								return $("#email_id").val();
							},
							event_id: function() {
								return $("#event_id").val();
							},
							para: function() {
								return $("#utm_para").val();
							},
							 _token: $('meta[name="csrf-token"]').attr('content')
						},
						 dataFilter: function(response) 
						 {
								let result = JSON.parse(response); // Parse server response
								let message ="Email is valid";
								if (result.status === 1 || result.status === 2) {
									// Status 1: Email is valid
									return "\"" + result.message + "\"";
								}
								/* else if (result.status === 3) {
									// Status 3: Email is invalid
									return "\"" + result.message + "\""; // Display custom message
								} */
								// Default: Invalid response
								//return "\"" + (result.message || "Email validation failed.") + "\"";
								return true;
						 }
					}
			  },
			   password: {
					required: true,
					minlength: 8,
					maxlength: 20,
					//pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
				},
				confirm_password: {
					required: true,
					equalTo: "#password"
				},
			  country:{
				required: true,
			  },
			  /*state:{
				required: true,
			  },*/
			  postal_code:{
				required: true,
			  },
			  phone_number:{
				required: true,
				digits: true,
			  },
			  company_name:{
				required: true,
			  },
			  job_role:{
				required: true,
			  },
			  company_size:{
				required: true,
			  },
			  industry:{
				required: true,
			  },
			  /* phone: {
				required: true,
				digits: true,
				minlength: 10,
				maxlength: 10
			  }*/
			},
			messages: {
			  first_name: "Please enter your first name",			  
			  last_name: "Please enter your last name",
			  email_id: 
			  {
				required: "Email is required",
				email: "Enter a valid email address",
				remote: "Email validation error." 
			   },
			   password: {
					required: "Password is required",
					minlength: "Password must be at least 8 characters",
					maxlength: "Password cannot exceed 20 characters",
					//pattern: "Password must have 1 uppercase, 1 lowercase, 1 number, and 1 special character"
			  },
			  confirm_password: {
				required: "Please confirm your password",
				equalTo: "Passwords do not match"
			  },
			  country: "Please select country",
			  //state: "Please select state",
			  postal_code: "Please select postal code",
			  phone_number: {
				required: "Phone number is required",
				digits: "Only numbers allowed",
			  },
			  company_name: "Please enter your company name",
			  job_role: "Please enter your job role",
			  company_size: "Please enter your company size",
			  industry: "Please enter your industry",
			},
			errorPlacement: function(error, element) {
			  error.appendTo(element.parent());
			}
	});
  
    $(".next-step").click(function() {
		var form = $("#multi-step-form");

		if (form.valid()) 
		{  	
			if (currentStep === 2) {
				// Submit form using AJAX
				//document.getElementById("multi-step-form").submit(); // Submit the form
				//displayStep(3);
				//return false;
				$.ajax({
				  type: "POST",
				  url: form.attr("action"), // Make sure the form has an action attribute
				  data: form.serialize(),
				  success: function(response) {
					console.log("Form submitted successfully:", response);
					displayStep(3); // Show Step 3 on successful submission
				  },
				  error: function(xhr, status, error) {
					console.error("Error submitting form:", error);
					alert("Something went wrong. Please try again.");
				  }
				});
			  } else if (currentStep < 2) {
				$(".step-" + currentStep).addClass("animate__animated animate__fadeOutLeft");
				currentStep++;
				setTimeout(function() {
				  $(".step").removeClass("animate__animated animate__fadeOutLeft").hide();
				  $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInRight");
				  updateProgressBar();
				}, 500);
			  }
			/* previous code ==
			if (currentStep < 3) {
			$(".step-" + currentStep).addClass("animate__animated animate__fadeOutLeft");
			currentStep++;
			setTimeout(function() {
			  $(".step").removeClass("animate__animated animate__fadeOutLeft").hide();
			  $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInRight");
			  updateProgressBar();
			}, 500);
		  }*/
		}
    });

    $(".prev-step").click(function() {
      if (currentStep > 1) {
        $(".step-" + currentStep).addClass("animate__animated animate__fadeOutRight");
        currentStep--;
        setTimeout(function() {
          $(".step").removeClass("animate__animated animate__fadeOutRight").hide();
          $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInLeft");
          updateProgressBar();
        }, 500);
      }
    });

    /*updateProgressBar = function() {
		console.log('ppppppppppppppp');
      var progressPercentage = ((currentStep - 1) / 4) * 100;
	  alert("=="+progressPercentage);
      $(".progress-bar").css("width", progressPercentage + "%");
    }*/
  });