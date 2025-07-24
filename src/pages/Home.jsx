import React , { useEffect , useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Home = () => {
	// upcommig events
	 const [upcomming_events, setUpcomming_events] = useState([]);
	 useEffect(() => {
		fetch('https://neonicheintegrated.in/2025/aws/immersion_hackathon/microsite/api/get_upcomming_event_api')
		//fetch('http://127.0.0.1:8000/api/get_event_details')
			.then((res) => res.json())
			.then((data) => {
				console.log("Fetched event data:", data); 
				setUpcomming_events(data.upcoming_events);
			})
			.catch((err) => console.error("Error fetching event data:", err));
		}, []);

	// Overall	
	const [events, setEvents] = useState([]);
	 useEffect(() => {
		fetch('https://neonicheintegrated.in/2025/aws/immersion_hackathon/microsite/api/get_event_details_api')
		//fetch('http://127.0.0.1:8000/api/get_event_details')
			.then((res) => res.json())
			.then((data) => {
				console.log("Fetched event data:", data); 
				setEvents(data.overall_events);
			})
			.catch((err) => console.error("Error fetching event data:", err));
		}, []);	


  return (
    <>
    <header className="header-sec" id="home">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1>AWS Solutions-Focused<br/>Immersion Days</h1>
					<h2>January to December 2025</h2>
					<h3>You are invited! Join us to learn how to build on AWS. </h3>
					<a className="btn-org" href="find-events"> Find events</a>
				</div>
			</div>
		</div>
	</header>
	<section className="about-sec" id="about">
		<div className="container">
			<div className="row">
				<div className="col-12 mb-5">
					<h2 className="title-fs28">Bringing Builders Together to Learn About AWS</h2>
					<p>The AWS Partner-Led Immersion Day Program is a series of interactive events hosted by AWS Partners and supported by AWS. These sessions are designed to help participants explore AWS technologies through practical, hands-on experience. Focused on specific themes or solutions, Immersion Days equip you with the skills to design, deploy, and operate cloud-based applications effectively. AWS Partners lead the sessions with technical input from AWS Solutions Architects or subject matter experts as needed.</p>
				</div>
			</div>
			<div className="row row-cols-lg-2 row-cols-1">
				<div className="col mb-5">
						<h2 className="title-fs28">Why Attend?</h2>
						<p>Whether you're new to AWS or already familiar with cloud services, these sessions are valuable for gaining deeper technical knowledge, learning real-world use cases, and enhancing your ability to make informed decisions using AWS technologies.</p>
				</div>
				<div className="col mb-5">
						<h2 className="title-fs28">Who Should Attend?</h2>
						<p>Immersion Days are ideal for technical professionals such as Infrastructure and Database Administrators, Developers, and Architects. However, anyone interested in learning how AWS and its Partners can support their cloud goals is welcome to attend.</p>
				</div>	
			</div>

			<div className="row">
				<div className="col-12 mb-5">
					<h2 className="title-fs28">Workshop vs. Hackathon - What's the Difference?</h2>
					<p><strong>Workshop</strong>: A guided, instructor-led session where participants follow structured tutorials and labs. Workshops are ideal for building foundational knowledge and exploring specific AWS services or partner solutions in a step-by-step format.</p>
					<p><strong>Hackathon</strong>: A more collaborative and challenge-driven format where participants work in teams to solve a real-world problem using AWS services. Hackathons are designed to encourage creativity, problem-solving, and application of concepts learned in workshops or prior experience.</p>
				</div>
			</div>
		</div>
	</section>
	<section className="event-sec" id="event">
		<div className="container">
			<div className="row">
				<h2 className="title-fs28 text-white mb-4">Events Calendar 2025</h2>
				<h3 className="fs16 text-white fw400">Join us to get an understanding of the services and solutions AWS has to offer. </h3>
			</div>			
		</div>
	</section>
	<section className="event-filter-sec" id="event-filter">
		<div className="container">
			<div className="row">
			<div className="col-12">
				<div className="title-fs28 border-bottom mb-5 pb-3">Upcoming Events</div></div>
				<div className="col-12">
					<div className="swiper upComingEventSwiper">
						<div className="swiper-wrapper">

						<Swiper
						modules={[Navigation]}
						navigation
						spaceBetween={20}
						slidesPerView={1}
						>
						<div className="swiper-slide">
						{upcomming_events && upcomming_events.length > 0 ? (	
						 upcomming_events.map(uevents => (
							<SwiperSlide key={uevents.id}>
							{/* Slide content */}
							<a
									href={`/Registration?event_id=${uevents.id}`}
									className="eventUpcomingCard"
									>
									<div className="row">
											<div className="col-12">
												<div className="row justify-content-between align-items-center">
													<div className="col-6"><div className="eventCatagory">{uevents.event_type === 1 ? 'Virtual Event' : 'In-Person'}</div></div>
													<div className="col-6 text-end"><div className="attendy">L{uevents.level}</div></div>
												</div>
											</div>
											<div className="col-12">
												<div className="eventTitle">{uevents.event_title}</div>
											</div>
											{/* <div className="col-12">
												<div className="event-discription">
													<p><span>About The Workshop :</span></p> 
													 {event.event_description} 
												</div>
											</div> */}
											<div className="col-12">
												<ul className="eventDetails">
													<li className="eventDetailsList">
													<i className="bi bi-calendar-event"></i> {uevents.event_date}
													</li>
													<li className="eventDetailsList"><i className="bi bi-clock-history"></i> Start date -time timezone </li>
													<li className="eventDetailsList"><i className="bi bi-chat-left-text"></i> Language: English</li>
													<li className="eventDetailsList"><i className="bi bi-geo-alt"></i> Location </li>
												</ul>
											</div>
											<div className="col-12">
												<div className="knowMore">
													<span className="text">Know More</span>
													<span className="arrow"><i className="bi bi-arrow-right-short"></i></span>
												</div>
											</div>
									</div>
								</a>	
							</SwiperSlide>
							
						))
						
						) : (
							<p>No upcoming events found.</p>
						)}	
						</div>
					</Swiper>

						</div>
					</div>
				</div>		
			</div>
 		</div>
		
		<div className="container">
			 <div className="row">
				 <div className="col-12 mt-5"><div className="title-fs28 border-bottom mb-5 pb-3">Events</div></div>
			 </div>
			<div className="row">
				<div className="col-lg-3 col-12">
					<div className="filter-sec">
							<div className="accordion" id="filterAccordion">
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#contentFocus" aria-expanded="true" aria-controls="contentFocus">
											Content Focus
										</button>
									</h2>
									<div id="contentFocus" className="accordion-collapse collapse show">
										<div className="accordion-body">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="contentFocus_Technical" />
													<label className="form-check-label" htmlFor="contentFocus_Technical">Technical</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="contentFocus_Other" />
													<label className="form-check-label" htmlFor="contentFocus_Other">Other</label>
												</div>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#eventType" aria-expanded="true" aria-controls="eventType">
										Event Type
										</button>
									</h2>
									<div id="eventType" className="accordion-collapse collapse show">
										<div className="accordion-body">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
													<label className="form-check-label" htmlFor="flexCheckDefault">Virtual</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
													<label className="form-check-label" htmlFor="flexCheckChecked">In-Person</label>
												</div>
										</div>
									</div>
								</div>
								
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#level" aria-expanded="true" aria-controls="level">
										Level
										</button>
									</h2>
									<div id="level" className="accordion-collapse collapse show">
										<div className="accordion-body">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="level100" />
													<label className="form-check-label" htmlFor="level100">Level 100</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value=""id="level200" />
													<label className="form-check-label" htmlFor="level200">Level 200</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="level300" />
													<label className="form-check-label" htmlFor="level300">Level 300</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="level400" />
													<label className="form-check-label" htmlFor="level400">Level 400</label>
												</div>
										</div>
									</div>
								</div>
								
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#month" aria-expanded="true" aria-controls="month">
										Month
										</button>
									</h2>
									<div id="month" className="accordion-collapse collapse show">
										<div className="accordion-body">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="June" />
													<label className="form-check-label" htmlFor="June">June 2025</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value=""id="July" />
													<label className="form-check-label" htmlFor="July">July 2025</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="August" />
													<label className="form-check-label" htmlFor="August">August 2025</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="September" />
													<label className="form-check-label" htmlFor="September">September 2025</label>
												</div>
										</div>
									</div>
								</div>
							</div>
					</div>
				</div>
				<div className="col-lg-9 col-12">	
					{events && events.length > 0 ? (	
						 events.map(events => (				
							<div className="event_main_con">
								<div className="row justify-content-between border-bottom pb-3">
									<div className="col">
										<div className="event-type">{events.event_type == 1 ? 'Virtual Event' : 'In-Person'}</div>
									</div>
									<div className="col text-end">
										<div className="event-seat">L{events.level}</div>
									</div>
								</div>
								<div className="row">
									<div className="w-100"> 
										<h2 className="eventTitle"><a href="sign-up">{events.event_title}</a></h2>
										<h3 className="eventSubTitle">About the Workshop:</h3>
										{events.event_description}
									</div>
								</div>
								<div className="row justify-content-between event_main_con_footer">
									<div className="col">
										<div className="mb-0">
											<span className="date">{events.event_date}</span> |
											<span className="duration">6 hours</span>
										</div>
										<div className="timeZone">Start_time - End_time Timezone</div>
									</div>
									<div className="col text-end mt-2">
										<a href="/Registration?event_id=3" className="btn-gradient">Know more</a>
									</div>
								</div>
							</div>
						))
						
						) : (
							<p>No events found.</p>
						)}	
				</div>
			</div>			
		</div>
	</section>
        
        <script>
            
        </script>
    </>
  )
}

export default Home