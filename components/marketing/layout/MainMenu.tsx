import Link from "next/link";

export default function MainMenu() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li className="dropdown-menu-parrent">
        <Link href="#" className="main1">
          Service <i className="fa-solid fa-angle-down" />
        </Link>
        <ul>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li className="has-dropdown has-dropdown1">
            <Link href="/service-details" className="main">
              Service Detials
              <span>
                <i className="fa-solid fa-angle-right" />
              </span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="/service-details-left">Details Left</Link>
              </li>
              <li>
                <Link href="/service-details-right">Details Right</Link>
              </li>
              <li>
                <Link href="/service-details">Single Details</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="dropdown-menu-parrent">
        <Link href="#" className="main1">
          Pages <i className="fa-solid fa-angle-down" />
        </Link>
        <div className="mega-menu-all">
          <div className="row">
            <div className="col-md-3">
              <div className="mega-menu-single dis1">
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <Link href="/service">Service</Link>
                  </li>
                  <li>
                    <Link href="/service-details-left">Details Left</Link>
                  </li>
                  <li>
                    <Link href="/service-details-right">Details Right</Link>
                  </li>
                  <li>
                    <Link href="/service-details">Single Details</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mega-menu-single">
                <h3>News / Blog</h3>
                <ul>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/blog-details-left">Details Left</Link>
                  </li>
                  <li>
                    <Link href="/blog-details-right">Details Right</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Single Details</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mega-menu-single">
                <h3>Page's</h3>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/testimonial">Testimonial</Link>
                  </li>
                  <li>
                    <Link href="/error">ERROR 404</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mega-menu-single">
                <h3>Our Project's</h3>
                <ul>
                  <li>
                    <Link href="/project">Project</Link>
                  </li>
                  <li>
                    <Link href="/project-details-left">Details Left</Link>
                  </li>
                  <li>
                    <Link href="/project-details-right">Details Right</Link>
                  </li>
                  <li>
                    <Link href="/project-details">Single Details</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="dropdown-menu-parrent">
        <Link href="#" className="main1">
          Blog <i className="fa-solid fa-angle-down" />
        </Link>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li className="has-dropdown has-dropdown1">
            <Link href="/blog-details" className="main">
              Blog Detials
              <span>
                <i className="fa-solid fa-angle-right" />
              </span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="/blog-details-left">Details Left</Link>
              </li>
              <li>
                <Link href="/blog-details-right">Details Right</Link>
              </li>
              <li>
                <Link href="/blog-details">Single Details</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="dropdown-menu-parrent">
        <Link className="main1" href="#">
          Project <i className="fa-solid fa-angle-down" />
        </Link>
        <ul>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li className="has-dropdown has-dropdown1">
            <Link href="/blog-details" className="main">
              Blog Detials
              <span>
                <i className="fa-solid fa-angle-right" />
              </span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="/project-details-left">Details Left</Link>
              </li>
              <li>
                <Link href="/project-details-right">Details Right</Link>
              </li>
              <li>
                <Link href="/project-details">Single Details</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
