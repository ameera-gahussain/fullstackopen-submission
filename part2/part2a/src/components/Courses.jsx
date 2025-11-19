const Courses = ({ course }) => {
   return (
    <li>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map(part => 
          <li key={part.id}>
            {part.name} — {part.exercises}
          </li>
        )}
      </ul>
      <div>
        <p>
        <strong>
          Total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </strong>
        </p>
      </div>
    </li>
  )
}
export default Courses