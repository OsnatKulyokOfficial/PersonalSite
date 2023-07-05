import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AboutMe() {
  const studentRecommendations = [
    {
      id: 1,
      name: "John Doe",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/path/to/student1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Ut euismod quam eu leo vestibulum, id gravida tellus pretium.",
      imageUrl: "/path/to/student2.jpg",
    },
    // Add more student recommendations as needed
  ];

  return (
    <div>
      <h2>Education and Achievements</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        scelerisque lacus id nunc pellentesque, non ullamcorper dolor efficitur.
        In hac habitasse platea dictumst. Sed cursus ante nec arcu cursus
        iaculis.
      </p>
      <h3>Projects</h3>
      <ul>
        <li>
          Project 1 - <a href="https://netlify-demo-link.com">Netlify Demo</a> |{" "}
          <a href="https://github.com/your-username/project1">GitHub</a>
        </li>
        <li>
          Project 2 - <a href="https://netlify-demo-link.com">Netlify Demo</a> |{" "}
          <a href="https://github.com/your-username/project2">GitHub</a>
        </li>
        {/* Add more projects as needed */}
      </ul>
      <h2>About Me as a Private Teacher</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
        dolor et lacus sollicitudin efficitur nec a quam. Sed euismod diam nec
        consectetur ultricies. Proin sed purus elit.
      </p>
      <h3>Student Achievements</h3>
      <ul>
        <li>Student Achievement 1</li>
        <li>Student Achievement 2</li>
        {/* Add more student achievements as needed */}
      </ul>
      <h2>Student Recommendations</h2>
      <Carousel>
        {studentRecommendations.map((student) => (
          <div key={student.id}>
            <img src={student.imageUrl} alt={student.name} />
            <p>{student.testimonial}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default AboutMe;
