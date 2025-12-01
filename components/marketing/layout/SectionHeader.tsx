import Link from "next/link";

export default function SectionHeader({ title, group_page, current_page, display }: any) {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto text-center">
                            <div className="main-heading">
                                <h1>{title}</h1>
                                <div className="pages-intro">
                                    <Link href="/">Home </Link>
                                    <span className={display}>
                                        <i className="fa-regular fa-angle-right" />
                                    </span>
                                    <Link className={display} href="/blog">
                                        {group_page}
                                    </Link>
                                    <span>
                                        <i className="fa-regular fa-angle-right" />
                                    </span>
                                    <p>{current_page}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
