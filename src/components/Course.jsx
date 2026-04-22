import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {

    const {course} = props

    const totalExercises = course.parts.reduce(
  (accumulator, currentValue) => accumulator + currentValue.exercises,0);
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={totalExercises} />
        </>
    )
}

export default Course;