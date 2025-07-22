import React from 'react'

const Footer = () => {
  return (   
    <> 
        <footer id="footer">
        <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
                <div className="col">
                        <h2 className="title-fs28 w-100">Learn About AWS</h2>
                        <ul className="footeLinksList">
                            <li><a href="https://aws.amazon.com/what-is-aws/" target="_blank" rel="noopener noreferrer">What Is AWS?</a></li>
                        </ul>
                </div>
                <div className="col">
                            <h2 className="title-fs28 w-100">Help</h2>
                            <ul className="footeLinksList">
                                <li><a href="https://aws.amazon.com/contact-us/?nc1=f_m" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                                <li><a  href="faq">FAQ</a></li>
                                <li><a href="https://aws.amazon.com/legal/?nc1=f_cc" target="_blank" rel="noopener noreferrer">Legal</a></li>
                                <li><a href="https://www.amazon.jobs/aws" target="_blank" rel="noopener noreferrer">AWS Careers</a></li>
                            </ul>
                </div>
        <div className="col">
                    <h2 className="title-fs28 w-100">Social Connect</h2>
                    <ul className="socialNav">
                        <li><a href="https://twitter.com/awscloud" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a></li>
                        <li><a href="https://www.facebook.com/amazonwebservices" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="https://www.twitch.tv/aws" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitch"></i></a></li>
                        <li><a href="https://www.youtube.com/user/AmazonWebServices/Cloud/" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube"></i></a></li>
                        <li><a href="https://aws.amazon.com/podcasts/" target="_blank" rel="noopener noreferrer"><i className="bi bi-broadcast-pin" rel="noopener noreferrer"></i></a></li>
                        <li><a href="https://pages.awscloud.com/communication-preferences?trk=homepage" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a></li>
                    </ul>
                    <div className="clearfix"></div>
                    <p>Amazon is an Equal Opportunity<br/>Employer: <i>Minority / Women / Disability / Veteran / Gender Identity / Sexual Orientation / Age.</i></p>
        </div>
        </div>
        </div>
        </footer>
        <section className="footerCopyright">
        <div className="container">
            <div className="row ">
                <div className="col-12">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="https://aws.amazon.com/privacy/?nc1=f_pr" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                        <li className="list-inline-item"><a href="https://aws.amazon.com/terms/?nc1=f_pr" target="_blank" rel="noopener noreferrer">Site Terms</a></li>
                        <li className="list-inline-item border-0">© 2025, Amazon Web Services, Inc. or its affiliates. All rights reserved.</li>
                    </ul>
                </div>
            </div>
        </div>	
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>      
    </>    

  )
}

export default Footer;
