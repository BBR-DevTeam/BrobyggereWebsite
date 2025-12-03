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
    </ul>
  );
}
