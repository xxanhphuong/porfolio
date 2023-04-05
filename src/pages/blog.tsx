import BlogItem from "@/components/BlogItem";
import CateListBlog from "@/components/CateListBlog";
import { Main } from "@/components/Main";
import { Meta } from "@/layouts/Meta";

const Blog = () => (
  <Main
    meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}
    noContainer
    headerLanding
  >
    <section className="container mx-auto pt-[2rem]" id="categories-page">
      <div className="grid grid-cols-1 gap-0 px-[1rem] lg:grid-cols-3 lg:gap-[2rem] lg:divide-x lg:px-0">
        <div className="col-span-2 leading-8">
          <h2 className="font-20 font-bold text-[#2C2C2C]">
            Danh sách bài viết
          </h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            fuga recusandae quidem. Quaerat molestiae blanditiis doloremque
            possimus labore voluptatibus distinctio recusandae autem esse
            explicabo molestias officia placeat, accusamus aut saepe.
          </p> */}
          <CateListBlog />
        </div>

        <div className="grid grid-cols-1 gap-1 pl-0 pt-[2rem] lg:pl-[2rem] lg:pt-0">
          <h2 className="font-20 font-bold text-[#2C2C2C]">
            Bài viết liên quan
          </h2>
          <BlogItem type="side" />
          <BlogItem type="side" />
          <BlogItem type="side" />
        </div>
      </div>
    </section>
  </Main>
);

export default Blog;
