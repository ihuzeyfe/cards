import React from "react";

// export const Course = () => {
//   return (
//     <div>Course Div</div>
//   )
// }

function Course(title, description, image) {
  //   console.log(props);

  //   const title = props.title;
  //   const description = props.description;

  //   const { title, description } = props;
  return (
    <div>
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default Course;
