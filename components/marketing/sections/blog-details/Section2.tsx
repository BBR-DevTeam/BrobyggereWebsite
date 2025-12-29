import Link from "next/link";
import blogData from "../../../../utils/marketing/blog.json";
import BlogItem from "@/components/marketing/elements/BlogItem";

interface Section2Props {
  blogId: number;
}

export default function Section2({ blogId }: Section2Props) {
  const otherBlogs = blogData.filter((b) => b.id !== blogId).slice(0, 3);

  return (
    <>
      {/*===== BLOG AREA START =======*/}
      <div className="blog-page pb120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading1">
                <h2>Se flere nyheter</h2>
              </div>
            </div>
          </div>
          <div className="space60" />
          <div className="row">
            {otherBlogs.map((item) => (
              <BlogItem
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                category={item.category}
                author={item.author}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
      {/*===== BLOG AREA END =======*/}
    </>
  );
}
