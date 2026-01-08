import Link from "next/link";
import BlogItem from "@/components/marketing/elements/BlogItem";
import blogData from "../../../../utils/marketing/blog.json";

export default function Section1() {
  return (
    <>
      {/*===== BLOG AREA START =======*/}
      <div className="blog-page">
        <div className="container">
          <div className="row">
            {blogData.map((item) => (
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

          <div className="space30" />
        </div>
      </div>
      {/*===== BLOG AREA END =======*/}
    </>
  );
}
