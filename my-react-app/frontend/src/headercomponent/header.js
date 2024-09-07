
function Header()
{
    return(
        <div>
            
     {/* <meta charset="utf-8"/>
    <title>Tourist - Travel Agency HTML Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords"/>
    <meta content="" name="description"/> */}

    {/* Favicon */}
    <link rel="icon" href="img/favicon.ico" />

    {/* Google Web Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" />

    {/* Icon Font Stylesheet */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />

    {/* Libraries Stylesheet */}
    <link  rel="stylesheet" href="lib/animate/animate.min.css"/>
    <link rel="stylesheet" href="lib/owlcarousel/assets/owl.carousel.min.css" />
    <link rel="stylesheet" href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"  />

    {/* Customized Bootstrap Stylesheet */}
    <link rel="stylesheet" href="css/bootstrap.min.css" />

    {/* Template Stylesheet */}
    <link rel="stylesheet" href="css/style.css" />


    {/* Spinner Start */}
    {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style={{"width": "3rem", "height": "3rem"}} role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* Spinner End */}


    {/* Topbar Start */}
    {/* <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style={{"height": "45px"}}>
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>info@example.com</small>
                </div>
            </div> */}
            {/* <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style={{"height": "45px"}}>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#"><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div> */}
      {/* //  </div> */}
     {/* </div> */}
    {/* Topbar End */}


    {/* Navbar & Hero Start */}
    <div class="container-fluid position-relative p-0">       
        <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p class="fs-4 text-white mb-4 animated slideInDown">Find Your Next Destination,where Your Adventures Begins</p>
                        <div class="position-relative w-75 mx-auto animated slideInDown">
                            <input class="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand"/>
                            <button type="button" class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{"margin-top": "7px"}}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Navbar & Hero End */}

        </div>
    );
}

export default Header;