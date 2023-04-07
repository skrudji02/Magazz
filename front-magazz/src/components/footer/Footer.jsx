import '../footer/footer.css';

const Footer = () =>{
    return(
        <footer class="footer-area section_gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-6 single-footer-widget">
              <h4>Top Products</h4>
              <ul>
                <li><a>Managed Website</a></li>
                <li><a>Manage Reputation</a></li>
                <li><a>Power Tools</a></li>
                <li><a>Marketing Service</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><a>Jobs</a></li>
                <li><a>Brand Assets</a></li>
                <li><a>Investor Relations</a></li>
                <li><a>Terms of Service</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 single-footer-widget">
              <h4>Features</h4>
              <ul>
                <li><a>Jobs</a></li>
                <li><a>Brand Assets</a></li>
                <li><a>Investor Relations</a></li>
                <li><a>Terms of Service</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 single-footer-widget">
              <h4>Resources</h4>
              <ul>
                <li><a>Guides</a></li>
                <li><a>Research</a></li>
                <li><a>Experts</a></li>
                <li><a>Agencies</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 single-footer-social">
                  <a><i class="fa fa-facebook"></i></a>
                  <a><i class="fa fa-twitter"></i></a>
                  <a><i class="fa fa-dribbble"></i></a>
                  <a><i class="fa fa-behance"></i></a>
            </div>
          </div>
        </div>
        </footer>
    );
}

export default Footer; 