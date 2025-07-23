import React , { useState , useRef , useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const Registration = () => {

     const [message, setMessage] = useState('');
     const [messageType, setMessageType] = useState('');
     const alertRef = useRef(null);
	 
	 const [searchParams] = useSearchParams();
	 const eventId = searchParams.get("event_id");
  
     const [formData, setFormData] = useState({
		event_id: "",
        first_name: "",
        last_name: "",
        email_id: "",
        country: "",
        state: "",
        postal_code: "",
        phone_number: "",
        company_name: "",
        job_role: "",
        company_size: "",
        industry: "",
        tncs: false
    });
	
	  useEffect(() => {
		if (eventId) {
		  setFormData((prev) => ({
			...prev,
			event_id: eventId
		  }));
		}
	  }, [eventId]);

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

//   const handleSubmit = async () => {
//     //console.log("==="+JSON.stringify(formData));
//     try {
//       const response = await fetch("http://localhost:3001/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       console.log("Submitted successfully", result);
//     } catch (err) {
//       console.error("Submission error:", err);
//     }
//   };
const handleSubmit = async () => {
    const apiUrl = import.meta.env.VITE_API_BASE_DEVELOPMENT_URL+'register_api';
   // fetch('http://127.0.0.1:8000/api/register_api', {
    fetch(`${apiUrl}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((result) => {
        console.log("Submitted successfully", result);
        setMessage(result.message);
        setMessageType("success");

        // Scroll to alert
        setTimeout(() => {
        if (alertRef.current) {
            alertRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        }, 100);
         // Clear form
        setFormData({
            first_name: "",
            last_name: "",
            email_id: "",
            country: "",
            state: "",
            postal_code: "",
            phone_number: "",
            company_name: "",
            job_role: "",
            company_size: "",
            industry: "",
            tncs: false
        });
    })
    .catch((error) => {
        console.error("Submission error", error);
        setMessage("Submission failed");
        setMessageType("error");

        setTimeout(() => {
        if (alertRef.current) {
            alertRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        }, 100);
    });

  };
  return (
    <>
        <section className="wrapper">
            <article className="event-title-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Event Title</h1>
                        </div>
                    </div>
                </div>
            </article>
            <section>               
                <div className="container">
                    <div className="row">
                        {message && (
                        <div
                            ref={alertRef}
                            className={`alert ${messageType === "success" ? "alert-success" : "alert-danger"}`}
                            role="alert"
                        >
                            {message}
                        </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="">
                                            <ul className="eventDetails">
                                                <li className="eventDetailsList">
                                                <i className="bi bi-calendar-event"></i>event_date
                                                </li>
                                                <li className="eventDetailsList"><i className="bi bi-clock-history"></i> start_time - end_time timezone</li>
                                                <li className="eventDetailsList"><i className="bi-person-gear"></i> AWS Solutions Architect </li>
                                                <li className="eventDetailsList"><i className="bi bi-chat-left-text"></i> Language: English</li>
                                                <li className="eventDetailsList"><i className="bi bi-geo-alt"></i> Location</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <ul className="innerEventCatagory">
                                            <li>Hands-on workshop</li>
                                            <li>L200</li>
                                        </ul>
                                    </div>
                                    <div className="col-12">
                                        Event Description
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="bg-white p-5" style={{ borderRadius: '40px' }} >
                               <form id="multi-step-form">
                                    <div className="step step-1">
										<input
											type="hidden"
											name="event_id"
											value={formData.event_id}
											onChange={handleChange}
											className="form-control"
										  />
										
                                        <div className="mb-3">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email_id"
                                            value={formData.email_id}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        </div>
                                    </div>

                                    <div className="step step-2">
                                        <div className="mb-3">
											<label>Country</label>
											<select
												name="country"
												value={formData.country}
												onChange={handleChange}
												className="form-select"
											>
												<option value="">-Select Country-</option>
												<option value="India">India</option>
												<option value="USA">USA</option>
												{/* Add others */}
											</select>
                                        </div>

                                        <div className="mb-3">
                                        <label>Postal Code</label>
                                        <input
                                            type="number"
                                            name="postal_code"
                                            value={formData.postal_code}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        </div>

                                        <div className="mb-3">
                                        <label>Phone Number</label>
                                        <input
                                            type="number"
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        </div>

                                        <div className="mb-3">
                                        <label>Company Name</label>
                                        <input
                                            type="text"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        </div>
										
										<div className="mb-3">
                                        <label>Job Role</label>
                                        <input
                                            type="text"
                                            name="job_role"
                                            value={formData.job_role}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                        </div>
										
										<div className="mb-3">
											<label>Company Size</label>
											<select
												name="company_size"
												value={formData.company_size}
												onChange={handleChange}
												className="form-select"
											>
												<option value="">-Select company size-</option>												
												<option value="1-19 Employees">1-19 Employees</option>
												<option value="20-99 Employees">20-99 Employees</option>
												<option value="100-499 Employees">100-499 Employees</option>
												<option value="500-999 Employees">500-999 Employees</option>
												<option value="1000-9999 Employees">1,000-9,999 Employees</option>
												<option value="10000 Employees or More">10,000 Employees or More</option>
												{/* Add others */}
											</select>
                                        </div>
										
										<div className="mb-3">
											<label>Industry</label>
											<select
												name="industry"
												value={formData.industry}
												onChange={handleChange}
												className="form-select"
											>
												<option value="">-Select industry-</option>												
												<option value="Aerospace">Aerospace</option>
												<option value="Agriculture">Agriculture</option>
												<option value="Automotive">Automotive</option>
												<option value="Computers & Electronics">Computers & Electronics</option>
												<option value="Consumer Goods">Consumer Goods</option>
												<option value="Education">Education</option>
												<option value="Financial Services">Financial Services</option>
												<option value="Gaming">Gaming</option>
												<option value="Government">Government</option>
												<option value="Healthcare">Healthcare</option>
												<option value="Hospitality">Hospitality</option>
												<option value="Life Sciences">Life Sciences</option>
												<option value="Manufacturing">Manufacturing</option>
												<option value="Marketing & Advertising">Marketing & Advertising</option>
												<option value="Media & Entertainment">Media & Entertainment</option>
												<option value="Mining">Mining</option>
												<option value="Non-Profit Organization">Non-Profit Organization</option>
												<option value="Oil & Gas">Oil & Gas</option>
												<option value="Other">Other</option>
												<option value="Power & Utilities">Power & Utilities</option>
												<option value="Professional Services">Professional Services</option>
												<option value="Real Estate & Construction">Real Estate & Construction</option>
												<option value="Retail">Retail</option>
												<option value="Software & Internet">Software & Internet</option>
												<option value="Telecommunications">Telecommunications</option>
												<option value="Transportation & Logistics">Transportation & Logistics</option>
												<option value="Travel">Travel</option>
												<option value="Wholesale & Distribution">Wholesale & Distribution</option>
												{/* Add others */}
											</select>
                                        </div>

                                        <div className="mb-3">
                                        <label>
                                            <input
                                            type="checkbox"
                                            name="tncs"
                                            checked={formData.tncs}
                                            onChange={handleChange}
                                            />
                                            I agree to the terms
                                        </label>
                                        </div>

                                        <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                        >
                                        Submit
                                        </button>
                                    </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    </section>
    </>
  )
}

export default Registration