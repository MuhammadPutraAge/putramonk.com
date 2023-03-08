import type { LinksFunction } from "@remix-run/node";

// Components
import ArrowLink from "~/components/ArrowLink";
import BlogCard from "~/components/BlogCard";
import Button from "~/components/Button";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import SectionTitle from "~/components/SectionTitle";
import Sidebar from "~/components/Sidebar";

// Styles
import styles from "~/styles/homepage.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <main>
      <header className="homepage-header">
        <Sidebar />
        <div className="main-header">
          <Navbar />
          <div className="hero">
            <div className="hero-content">
              <div className="welcome-container">
                <h1 className="welcome-text">
                  Building and sharing knowledge about front-end development
                  technology.
                </h1>
                <div className="welcome-btn-container">
                  <Button title="Read the blog" onClick={() => {}} />
                  <div style={{ width: "2.4rem" }} />
                  <Button
                    title="Take a course"
                    type="secondary"
                    onClick={() => {}}
                  />
                </div>
              </div>
              <img src="/images/profile.png" alt="Muhammad Putra Age" />
            </div>
          </div>
          <div className="learn-more-container">
            <p className="learn-more-text">Learn more about Putra</p>
            <img src="/icons/chevron-down.svg" alt="learn-more" />
          </div>
        </div>
      </header>

      <section className="homepage-about">
        <div>
          <img src="/images/about.png" alt="Muhammad Putra Age" />
        </div>
        <div className="about-container">
          <h1 className="about-intro">
            Hi, I'm Muhammad Putra Age. I'm a front-end engineer who specialized
            in React JS.
          </h1>
          <h2 className="about-desc">
            I'm also a person who wants to help people to learn programming
            especially in front-end world or in other words I'm a front-end
            expert wannabe.
          </h2>
          <ArrowLink to="/about" title="Learn more about me" />
        </div>
      </section>

      <section className="homepage-features">
        <div>
          <SectionTitle
            title="Want to be a better developer?"
            subtitle="I can help you with that"
          />
          <div className="features-container">
            <FeatureCard
              title="Blog"
              description="I've been writing many blog post to help you understand various topics about front-end development technology."
              linkTitle="Start reading the blog"
              linkTo="/blog"
              iconSrc="/icons/blog.svg"
            />
            <FeatureCard
              title="Courses"
              description="There are many courses that I made to help you to understand more about front-end development world."
              linkTitle="Explore the courses"
              linkTo="/courses"
              iconSrc="/icons/courses.svg"
            />
          </div>
        </div>
      </section>

      <section className="homepage-blog">
        <div className="homepage-blog-title">
          <SectionTitle
            title="Blog recommendations"
            subtitle="Broaden your knowledge"
          />
          <ArrowLink to="/blog" title="Read other posts" />
        </div>
        <div className="homepage-blog-recommendations">
          <BlogCard
            cover="/images/blog-1.jpeg"
            date="November 5th, 2018"
            title="How to test custom React Hooks"
            to="/blog/how-to-test-custom-hooks"
          />
          <BlogCard
            cover="/images/blog-1.jpeg"
            date="November 5th, 2018"
            title="How to test custom React Hooks"
            to="/blog/how-to-test-custom-hooks"
          />
          <BlogCard
            cover="/images/blog-1.jpeg"
            date="November 5th, 2018"
            title="How to test custom React Hooks"
            to="/blog/how-to-test-custom-hooks"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
