import Link from "next/link";
import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section2 from "@/components/marketing/sections/about/Section3";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Error 404"
          group_page=""
          current_page="Error 404"
          display="d-none"
        />
        <>
          {/*=====ERROR AREA START=======*/}
          <div className="error-page sp">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="error-page-content">
                    <div className="image text-center">
                      <img src="assets/img/others/error.png" alt="" />
                    </div>
                    <div className="space50" />
                    <div className="heading1 text-center">
                      <h2> Sorry, Page Not Found!</h2>
                      <div className="space16" />
                      <p>
                        Sorry, the page you are looking for doesn’t exist or has{" "}
                        <br /> been moved. Here are some helpful links.
                      </p>
                      <div className="space30" />
                      <div className="button">
                        <Link className="theme-btn1" href="/">
                          Take Me Home
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====ERROR AREA END=======*/}
        </>

        <Section2 />
      </Layout>
    </>
  );
}
