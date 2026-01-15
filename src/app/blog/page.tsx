import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import PostCard from "@/components/PostCard";
import { baseURL, blog, person, newsletter } from "@/resources";
// import image from "../../../public/images/111.jpg"

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <>
      <Column maxWidth="m" paddingTop="24">

        <Schema
          as="blogPosting"
          baseURL={baseURL}
          title={blog.title}
          description={blog.description}
          path={blog.path}
          image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}/blog`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        {/* <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
          My Blog Posts
        </Heading> */}
        <Column fillWidth flex={1} gap="40">

          {/* <Post
            post={ 
              {
                slug: "test",
                metadata: {
                  title: "Test",
                  publishedAt: new Date(),
                  tag: "Test",
                  image: "https://via.placeholder.com/150",
                },
              }
            }
            thumbnail={true}
            direction="column"
          /> */}
          <PostCard post={
            {
              slug: "https://inclusiveworkplace11.blogspot.com/2025/04/establishing-safe-spaces-for-honest.html",
              metadata: {
                title: "Establishing Safe Spaces for Honest Conversation",
                publishedAt: "April 03, 2025",
                tag: "Every employee should feel heard, respected, and appreciated...",
                image: '/images/111.jpg',
              },
            }
          }
            thumbnail
            direction="row"
          />
          <PostCard post={
            {
              slug: "https://inclusiveworkplace11.blogspot.com/2025/04/community-engagement-and-social.html",
              metadata: {
                title: "Community Engagement and Social Responsibility",
                publishedAt: "April 03, 2025",
                tag: "In the rapidly changing business environment of today, promoting an ...",
                image: '/images/222.jpg',
              },
            }
          }
            thumbnail
            direction="row"
          />

          <PostCard post={
            {
              slug: "https://inclusiveworkplace11.blogspot.com/2025/04/building-equal-opportunities-for.html",
              metadata: {
                title: "Building Equal Opportunities for Advancement",
                publishedAt: "April 03, 2025",
                tag: "Balanced career advancement opportunities are essential to fostering...",
                image: '/images/333.webp',
              },
            }
          }
            thumbnail
            direction="row"
          />

          <PostCard post={
            {
              slug: "https://inclusiveworkplace11.blogspot.com/2025/04/honoring-cultural-sensitivity-and.html",
              metadata: {
                title: "Honoring Cultural Sensitivity and diversity",
                publishedAt: "April 03, 2025",
                tag: "Building an inclusive workplace is essential for corporate success...",
                image: '/images/444.avif',
              },
            }
          }
            thumbnail
            direction="row"
          />

          <PostCard post={
            {
              slug: "https://inclusiveworkplace11.blogspot.com/2025/04/inclusive-policies-and-benefits.html",
              metadata: {
                title: "Inclusive Policies and Benefits",
                publishedAt: "April 02, 2025",
                tag: "A truly inclusive workplace is one in which each worker...",
                image: '/images/555.webp',
              },
            }
          }
            thumbnail
            direction="row"
          />

          <PostCard post={
            {
              slug: "https://inclusiveworkplace11.blogspot.com/2025/04/establishing-inclusive-culture-in.html",
              metadata: {
                title: "Establishing an Inclusive Culture in the Workplace",
                publishedAt: "April 02, 2025",
                tag: "The development of an inclusive workplace culture is essential...",
                image: '/images/666.jpg',
              },
            }
          }
            thumbnail
            direction="row"
          />

          <PostCard post={
            {
              slug: "https://inclusiveworkplace11.blogspot.com/2025/04/creating-flexible-work-environments.html",
              metadata: {
                title: "Creating Flexible Work Environments",
                publishedAt: "April 02, 2025",
                tag: "In the quickly changing workplace of today, flexibility is now a critica...",
                image: '/images/777.jpg',
              },
            }
          }
            thumbnail
            direction="row"
          />

        </Column>
      </Column>

    </>
  );
}
